import nodemailer from 'nodemailer'
import 'dotenv/config'

// ── Check if email is configured ──────────────────────────────
const isEmailConfigured = !!(process.env.EMAIL_USER && process.env.EMAIL_PASS)

if (!isEmailConfigured) {
  console.warn('⚠️  Mailer: EMAIL_PASS not set — emails will be skipped. Forms will still save to Firestore.')
}

// ── Transporter (only created if credentials exist) ────────────
const transporter = isEmailConfigured
  ? nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    })
  : null

// ── Safe send wrapper — silently skips if not configured ───────
const safeSend = async (mailOptions) => {
  if (!transporter) return null
  return transporter.sendMail(mailOptions)
}

// ── Shared header/footer HTML for branded emails ───────────────
const emailWrapper = (content) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <style>
    body { margin:0; padding:0; background:#faf9f9; font-family:'Helvetica Neue',Arial,sans-serif; }
    .wrapper { max-width:560px; margin:32px auto; background:#fff; border-radius:16px; overflow:hidden; box-shadow:0 4px 24px rgba(0,0,0,0.06); }
    .header { background:#FF6B00; padding:28px 32px; }
    .header h1 { margin:0; color:#fff; font-size:24px; font-weight:900; letter-spacing:-0.02em; }
    .header p { margin:4px 0 0; color:rgba(255,255,255,0.8); font-size:13px; }
    .body { padding:32px; }
    .body p { margin:0 0 16px; color:#444; font-size:15px; line-height:1.6; }
    .cta { display:inline-block; background:#FF6B00; color:#fff; text-decoration:none; padding:12px 28px; border-radius:9999px; font-weight:700; font-size:14px; margin:8px 0 16px; }
    .divider { border:none; border-top:1px solid #f0ede8; margin:24px 0; }
    .footer { padding:20px 32px; background:#f5f3f3; }
    .footer p { margin:0; color:#999; font-size:12px; }
    .footer a { color:#FF6B00; text-decoration:none; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>⚡ Fleet Mobilities</h1>
      <p>Rent · Ride · Repeat — Uttarakhand's Premium Vehicle Rental</p>
    </div>
    <div class="body">
      ${content}
    </div>
    <div class="footer">
      <p>© 2026 Fleet Mobilities · Dehradun, Uttarakhand 248001</p>
      <p style="margin-top:6px;">
        <a href="https://www.instagram.com/fleet.mobilities">Instagram</a> &nbsp;·&nbsp;
        <a href="https://www.facebook.com/profile.php?id=61589921305562">Facebook</a> &nbsp;·&nbsp;
        <a href="mailto:fleet.mobilities@gmail.com">fleet.mobilities@gmail.com</a>
      </p>
    </div>
  </div>
</body>
</html>
`

// ── 1. Subscriber confirmation email ──────────────────────────
export async function sendSubscriberConfirmation(email) {
  const html = emailWrapper(`
    <p>Hey there! 👋</p>
    <p>
      You've successfully joined the <strong>Fleet Mobilities</strong> waitlist.
      You'll be among the <strong>first to know</strong> when we launch in Uttarakhand
      — along with exclusive early-bird discounts and membership perks.
    </p>
    <p>
      <strong>What to expect:</strong><br/>
      🏍️ &nbsp;Early access to our bike &amp; scooter fleet<br/>
      ⚡ &nbsp;Electric vehicle rentals across Dehradun, Mussoorie &amp; Rishikesh<br/>
      🎉 &nbsp;Lifetime member perks for early subscribers
    </p>
    <a class="cta" href="https://www.instagram.com/fleet.mobilities">Follow us on Instagram</a>
    <hr class="divider"/>
    <p style="font-size:13px;color:#999;">
      You received this because you signed up at fleetmobilities.in. 
      If this wasn't you, please ignore this email.
    </p>
  `)

  return safeSend({
    from: `"Fleet Mobilities" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: '🛵 You\'re on the Fleet waitlist! Welcome aboard.',
    html,
  })
}

// ── 2. Internal notification — new subscriber ─────────────────
export async function sendNewSubscriberAlert(email, source) {
  return safeSend({
    from: `"Fleet Mobilities Bot" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `📬 New Waitlist Signup — ${email}`,
    html: emailWrapper(`
      <p><strong>New subscriber joined the waitlist:</strong></p>
      <p>📧 Email: <strong>${email}</strong></p>
      <p>📍 Source: <strong>${source}</strong></p>
      <p>🕐 Time: <strong>${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</strong></p>
    `),
  })
}

// ── 3. Contact form confirmation ──────────────────────────────
export async function sendContactConfirmation({ name, email, role, message }) {
  const html = emailWrapper(`
    <p>Hi <strong>${name}</strong>! 🙏</p>
    <p>
      Thanks for reaching out to <strong>Fleet Mobilities</strong>. 
      We've received your message and will get back to you within <strong>24–48 hours</strong>.
    </p>
    <p><strong>Your message:</strong></p>
    <blockquote style="border-left:3px solid #FF6B00;margin:0;padding:12px 16px;background:#FFF3E8;border-radius:0 8px 8px 0;color:#555;font-style:italic;">
      ${message}
    </blockquote>
    <hr class="divider"/>
    <p>In the meantime, follow us on social media to stay updated:</p>
    <a class="cta" href="https://www.instagram.com/fleet.mobilities">@fleet.mobilities</a>
  `)

  return safeSend({
    from: `"Fleet Mobilities" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `✅ We got your message, ${name}!`,
    html,
  })
}

// ── 4. Internal notification — new contact form ───────────────
export async function sendContactAlert({ name, email, role, message }) {
  return safeSend({
    from: `"Fleet Mobilities Bot" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `📨 New Contact Form — ${role} — ${name}`,
    html: emailWrapper(`
      <p><strong>New message received via contact form:</strong></p>
      <p>👤 Name: <strong>${name}</strong></p>
      <p>📧 Email: <strong><a href="mailto:${email}">${email}</a></strong></p>
      <p>🏷️ Role: <strong>${role}</strong></p>
      <p>💬 Message:</p>
      <blockquote style="border-left:3px solid #FF6B00;margin:0;padding:12px 16px;background:#FFF3E8;border-radius:0 8px 8px 0;color:#555;">
        ${message}
      </blockquote>
      <p>🕐 Time: <strong>${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</strong></p>
    `),
  })
}
