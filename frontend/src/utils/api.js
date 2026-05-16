// In dev: Vite proxies /api → http://localhost:5000 (no CORS issues)
// In prod: set VITE_API_URL=https://your-backend.onrender.com in Vercel env vars
const BASE = import.meta.env.VITE_API_URL ?? ''

async function request(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.message || 'Request failed')
  return data
}

/**
 * POST /api/subscribe
 * @param {string} email
 * @param {'hero'|'cta'|'footer'} source
 */
export const subscribeEmail = (email, source = 'hero') =>
  request('/api/subscribe', {
    method: 'POST',
    body: JSON.stringify({ email, source }),
  })

/**
 * POST /api/contact
 * @param {{ name: string, email: string, role: string, message: string }} payload
 */
export const submitContact = (payload) =>
  request('/api/contact', {
    method: 'POST',
    body: JSON.stringify(payload),
  })

/** GET /api/health */
export const checkHealth = () => request('/api/health')
