import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import initFirebase from './utils/firebase.js'
import { generalLimiter } from './middleware/rateLimiter.js'
import subscribeRoutes from './routes/subscribe.js'
import contactRoutes from './routes/contact.js'

const app = express()
const PORT = process.env.PORT || 5000

// ── CORS ──────────────────────────────────────────────────────
const allowedOrigins = [
  process.env.CLIENT_URL || 'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:5175',
  'https://fleet-mobilities.vercel.app',
  'https://fleetmobilities.in',
  'https://www.fleetmobilities.in',
]
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) callback(null, true)
      else callback(new Error(`CORS blocked: ${origin}`))
    },
    credentials: true,
  })
)

// ── Body parsing ──────────────────────────────────────────────
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))
app.set('trust proxy', 1)

// ── General rate limit ────────────────────────────────────────
app.use('/api', generalLimiter)

// ── Health check ──────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Fleet Mobilities API is running 🛵',
    timestamp: new Date().toISOString(),
    database: 'Firebase Firestore',
  })
})

// ── Routes ────────────────────────────────────────────────────
app.use('/api/subscribe', subscribeRoutes)
app.use('/api/contact', contactRoutes)

// ── 404 ───────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found` })
})

// ── Global error handler ──────────────────────────────────────
app.use((err, req, res, _next) => {
  console.error('[Error]', err.message)
  res.status(err.status || 500).json({
    success: false,
    message: process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message,
  })
})

// ── Start: init Firebase then listen ─────────────────────────
try {
  initFirebase()
  app.listen(PORT, () => {
    console.log(`🚀 Fleet Mobilities API → http://localhost:${PORT}`)
    console.log(`📧 Email: ${process.env.EMAIL_USER}`)
    console.log(`🌐 Allowed origin: ${process.env.CLIENT_URL}`)
  })
} catch (err) {
  console.error('❌ Failed to start server:', err.message)
  process.exit(1)
}

// ── Graceful shutdown ─────────────────────────────────────────
process.on('SIGTERM', () => {
  console.log('SIGTERM — shutting down gracefully')
  process.exit(0)
})
