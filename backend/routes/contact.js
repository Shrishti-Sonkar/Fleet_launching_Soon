import express from 'express'
import { body, validationResult } from 'express-validator'
import { getDb } from '../utils/firebase.js'
import {
  sendContactConfirmation,
  sendContactAlert,
} from '../utils/mailer.js'
import { contactLimiter } from '../middleware/rateLimiter.js'

const router = express.Router()

// ── POST /api/contact ──────────────────────────────────────────
router.post(
  '/',
  contactLimiter,
  [
    body('name').trim().notEmpty().withMessage('Name is required')
      .isLength({ max: 100 }).withMessage('Name too long'),
    body('email').isEmail().withMessage('Please provide a valid email')
      .normalizeEmail(),
    body('role').isIn(['Traveler', 'Host', 'Partner']).withMessage('Invalid role'),
    body('message').trim().notEmpty().withMessage('Message is required')
      .isLength({ min: 10, max: 2000 }).withMessage('Message must be 10–2000 characters'),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, message: errors.array()[0].msg })
    }

    const { name, email, role, message } = req.body
    const ip = req.ip || req.headers['x-forwarded-for'] || ''

    try {
      const db = getDb()

      // Save to Firestore
      await db.collection('contacts').add({
        name,
        email,
        role,
        message,
        ip,
        status: 'new',
        createdAt: new Date().toISOString(),
      })

      // Send emails (non-blocking)
      sendContactConfirmation({ name, email, role, message }).catch((err) =>
        console.error('[Mailer] Contact confirmation failed:', err.message)
      )
      sendContactAlert({ name, email, role, message }).catch((err) =>
        console.error('[Mailer] Contact admin alert failed:', err.message)
      )

      return res.status(201).json({
        success: true,
        message: `Thanks, ${name}! We've received your message and will reply within 24–48 hours. 🙏`,
      })
    } catch (err) {
      console.error('[Contact] Error:', err)
      return res.status(500).json({
        success: false,
        message: 'Failed to send your message. Please try again.',
      })
    }
  }
)

// ── GET /api/contact (admin) ───────────────────────────────────
router.get('/', async (req, res) => {
  try {
    const db = getDb()
    const snap = await db.collection('contacts')
      .orderBy('createdAt', 'desc')
      .limit(50)
      .get()
    const data = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    return res.json({ success: true, data })
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Error fetching messages' })
  }
})

export default router
