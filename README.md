# ⚡ Fleet Mobilities — Full-Stack Website

> Premium vehicle rentals for Uttarakhand · Rent · Ride · Repeat

![Fleet Mobilities](https://img.shields.io/badge/Fleet-Mobilities-FF6B00?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js)
![Firebase](https://img.shields.io/badge/Firebase-Firestore-FFCA28?style=flat-square&logo=firebase)

---

## 📁 Project Structure

```
stitch_fleet_launching_soon_website/
│
├── src/                              # React Frontend (Vite)
│   ├── components/
│   │   ├── IntroAnimation.jsx        # Scooter intro overlay
│   │   ├── Navbar.jsx                # Top nav + scroll progress bar
│   │   ├── Hero.jsx                  # Hero + live email subscription
│   │   ├── CityCard.jsx              # City card (Ken Burns hover)
│   │   └── Footer.jsx                # Footer + social links
│   ├── sections/
│   │   ├── HowItWorks.jsx
│   │   ├── Services.jsx
│   │   ├── Cities.jsx
│   │   ├── About.jsx
│   │   ├── Connect.jsx               # Live contact form
│   │   └── CTA.jsx                   # CTA + live email form
│   ├── utils/
│   │   └── api.js                    # fetch helpers → backend
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── backend/                          # Node.js + Express API
│   ├── utils/
│   │   ├── firebase.js               # Firebase Admin init
│   │   └── mailer.js                 # Nodemailer (4 email functions)
│   ├── routes/
│   │   ├── subscribe.js              # POST /api/subscribe  (Firestore)
│   │   └── contact.js                # POST /api/contact    (Firestore)
│   ├── middleware/
│   │   └── rateLimiter.js            # 3 rate limiters
│   ├── server.js                     # Express entry point
│   ├── firebase-service-account.json # ← YOU place this here (not committed)
│   ├── .env                          # ← fill in credentials
│   └── .env.example                  # template
│
├── public/
│   └── favicon.svg
├── .env                              # VITE_API_URL
├── .gitignore
├── vite.config.js                    # /api proxy → localhost:5000
├── tailwind.config.js
├── index.html                        # Full SEO meta tags
└── README.md
```

---

## 🔥 Firebase Setup (Step-by-Step)

### Step 1 — Create Firebase Project

1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Click **"Add project"** → Name it `fleet-mobilities` → Continue
3. Disable Google Analytics (optional) → **Create project**

---

### Step 2 — Enable Firestore

1. In your project, go to **Build → Firestore Database**
2. Click **"Create database"**
3. Choose **"Start in test mode"** (for development)
4. Select a region (e.g., `asia-south1` for India) → **Enable**

> **Firestore collections created automatically:**
> - `subscribers` — email waitlist signups
> - `contacts` — contact form submissions

---

### Step 3 — Get Service Account Key

1. Go to **Project Settings** (⚙️ gear icon) → **Service accounts**
2. Select **"Firebase Admin SDK"** → click **"Generate new private key"**
3. Click **"Generate key"** → a JSON file downloads
4. **Rename it** to `firebase-service-account.json`
5. **Move it** into the `backend/` folder:
   ```
   backend/firebase-service-account.json  ← place here
   ```

> ⚠️ This file contains secret credentials. It is already in `.gitignore` — never commit it.

---

### Step 4 — Configure Backend `.env`

```bash
cd backend
```

Edit `backend/.env`:
```env
PORT=5000
NODE_ENV=development
FIREBASE_SERVICE_ACCOUNT_PATH=./firebase-service-account.json
EMAIL_USER=fleet.mobilities@gmail.com
EMAIL_PASS=your_16_char_gmail_app_password
CLIENT_URL=http://localhost:5173
```

> **Getting Gmail App Password:**
> 1. [Google Account](https://myaccount.google.com) → Security → Enable **2-Step Verification**
> 2. Search **"App passwords"** → Create one for "Mail"
> 3. Copy the 16-character code → paste as `EMAIL_PASS`

---

### Step 5 — Run Both Servers

**Terminal 1 — Backend:**
```bash
cd backend
npm run dev
# ✅ Firebase Admin initialised
# 🚀 Fleet Mobilities API → http://localhost:5000
```

**Terminal 2 — Frontend:**
```bash
npm run dev
# → http://localhost:5173
```

> Vite proxies `/api/*` → `localhost:5000` automatically. No CORS issues in dev.

---

### Step 6 — Verify

| Check | URL |
|-------|-----|
| Frontend | http://localhost:5173 |
| API health | http://localhost:5000/api/health |
| Subscriber count | http://localhost:5000/api/subscribe/count |

---

## 📡 API Reference

### `POST /api/subscribe`
```json
// Request
{ "email": "user@example.com", "source": "hero" }

// Success 201
{ "success": true, "message": "You're on the list! Check your inbox..." }

// Duplicate 409
{ "success": false, "message": "You're already on the waitlist!..." }
```

### `POST /api/contact`
```json
// Request
{ "name": "Priya", "email": "priya@example.com", "role": "Traveler", "message": "I want to rent a bike" }

// Success 201
{ "success": true, "message": "Thanks, Priya! We'll reply within 24-48 hours." }
```

### `GET /api/health`
```json
{ "success": true, "message": "Fleet Mobilities API is running 🛵", "database": "Firebase Firestore" }
```

---

## 🔥 Firestore Collections

| Collection | Document Fields |
|-----------|----------------|
| `subscribers` | `email`, `source`, `ip`, `confirmed`, `createdAt` |
| `contacts` | `name`, `email`, `role`, `message`, `ip`, `status`, `createdAt` |

View all data in the [Firebase Console](https://console.firebase.google.com) → Firestore Database.

---

## 🚀 Deployment

### Frontend → Vercel

1. Push to GitHub (`.env` and `firebase-service-account.json` are gitignored ✅)
2. Import on [Vercel](https://vercel.com) → **Add environment variable:**
   ```
   VITE_API_URL = https://your-backend.onrender.com
   ```
3. Deploy ✅

### Backend → Render

1. Create **Web Service** → root directory: `backend`
2. Build: `npm install` · Start: `node server.js`
3. Add environment variables — **two options:**

   **Option A (easier):** Upload JSON as env var
   ```
   FIREBASE_PROJECT_ID      = fleet-mobilities-xxxxx
   FIREBASE_CLIENT_EMAIL    = firebase-adminsdk-xxx@fleet-mobilities.iam.gserviceaccount.com
   FIREBASE_PRIVATE_KEY     = -----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n
   ```
   *(Copy values from your `firebase-service-account.json`)*

   **Option B:** Use Render's secret files feature → upload `firebase-service-account.json`
   then set `FIREBASE_SERVICE_ACCOUNT_PATH=./firebase-service-account.json`

4. Also set: `EMAIL_USER`, `EMAIL_PASS`, `CLIENT_URL`, `NODE_ENV=production`

---

## 🌐 Social Media

| Platform | Link |
|----------|------|
| Instagram | [@fleet.mobilities](https://www.instagram.com/fleet.mobilities) |
| Facebook | [Fleet Mobilities](https://www.facebook.com/profile.php?id=61589921305562) |
| Email | [fleet.mobilities@gmail.com](mailto:fleet.mobilities@gmail.com) |

---

## 🔒 Security

- Rate limiting (subscribe: 5/15min · contact: 3/hr · general: 100/15min)
- express-validator on all POST endpoints
- CORS origin whitelist
- 10kb body size limit
- Service account JSON gitignored — never in source control
- Private key newline fix for Render/Railway auto-applied

---

## 📧 Email Flows

| Trigger | Emails sent |
|---------|-------------|
| Waitlist signup | ① Branded welcome to user ② Admin alert to fleet.mobilities@gmail.com |
| Contact form submit | ① Confirmation to user ② Full message to fleet.mobilities@gmail.com |

---

© 2026 Fleet Mobilities 
