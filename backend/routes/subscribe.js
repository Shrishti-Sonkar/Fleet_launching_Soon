import express from 'express'
import { body, validationResult } from 'express-validator'
import { getDb } from '../utils/firebase.js'
import {
  sendSubscriberConfirmation,
  sendNewSubscriberAlert,
} from '../utils/mailer.js'
import { subscribeLimiter } from '../middleware/rateLimiter.js'

const router = express.Router()

// ── POST /api/subscribe ────────────────────────────────────────
router.post(
  '/',
  subscribeLimiter,
  [
    body('email')
      .isEmail().withMessage('Please provide a valid email address')
      .normalizeEmail(),
    body('source')
      .optional()
      .isIn(['hero', 'cta', 'footer']).withMessage('Invalid source'),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, message: errors.array()[0].msg })
    }

    const { email, source = 'hero' } = req.body
    const ip = req.ip || req.headers['x-forwarded-for'] || ''

    try {
      const db = getDb()
      const subscribersRef = db.collection('subscribers')

      // Check duplicate — Firestore query
      const existing = await subscribersRef
        .where('email', '==', email)
        .limit(1)
        .get()

      if (!existing.empty) {
        return res.status(409).json({
          success: false,
          message: "You're already on the waitlist! We'll notify you at launch. 🎉",
        })
      }

      // Save to Firestore
      await subscribersRef.add({
        email,
        source,
        ip,
        confirmed: false,
        createdAt: new Date().toISOString(),
      })

      // Send emails (non-blocking)
      sendSubscriberConfirmation(email).catch((err) =>
        console.error('[Mailer] Subscriber confirmation failed:', err.message)
      )
      sendNewSubscriberAlert(email, source).catch((err) =>
        console.error('[Mailer] Admin alert failed:', err.message)
      )

      return res.status(201).json({
        success: true,
        message: "You're on the list! Check your inbox for a confirmation. 🛵",
      })
    } catch (err) {
      console.error('[Subscribe] Error:', err)
      return res.status(500).json({
        success: false,
        message: 'Something went wrong. Please try again.',
      })
    }
  }
)

// ── GET /api/subscribe/count ───────────────────────────────────
router.get('/count', async (req, res) => {
  try {
    const db = getDb()
    const snap = await db.collection('subscribers').count().get()
    return res.json({ success: true, count: snap.data().count })
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Error fetching count' })
  }
})

export default router
