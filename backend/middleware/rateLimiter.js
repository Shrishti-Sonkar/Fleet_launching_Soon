import rateLimit from 'express-rate-limit'

// ── Subscribe endpoint: max 5 requests per IP per 15 min ──────
export const subscribeLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    success: false,
    message: 'Too many subscription attempts from this IP. Please try again in 15 minutes.',
  },
  standardHeaders: true,
  legacyHeaders: false,
})

// ── Contact endpoint: max 3 submissions per IP per 60 min ─────
export const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 3,
  message: {
    success: false,
    message: 'Too many messages sent. Please try again in 1 hour.',
  },
  standardHeaders: true,
  legacyHeaders: false,
})

// ── General API limiter: 100 requests per IP per 15 min ───────
export const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    success: false,
    message: 'Too many requests from this IP. Please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
})
