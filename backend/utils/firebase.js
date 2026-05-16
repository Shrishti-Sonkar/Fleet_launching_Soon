import admin from 'firebase-admin'
import { createRequire } from 'module'
import { readFileSync, existsSync } from 'fs'
import { resolve } from 'path'
import 'dotenv/config'

let db

const initFirebase = () => {
  if (admin.apps.length > 0) {
    db = admin.firestore()
    return db
  }

  let credential

  // ── Option A: service account JSON file path ──────────────────
  const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH
  if (serviceAccountPath) {
    const fullPath = resolve(serviceAccountPath)
    if (existsSync(fullPath)) {
      const serviceAccount = JSON.parse(readFileSync(fullPath, 'utf8'))
      credential = admin.credential.cert(serviceAccount)
      console.log('🔑 Firebase: loaded service account from file')
    } else {
      console.warn(`⚠️  Firebase: service account file not found at ${fullPath}`)
    }
  }

  // ── Option B: individual env vars ────────────────────────────
  if (!credential && process.env.FIREBASE_PROJECT_ID) {
    credential = admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      // Render/Railway escape newlines — restore them
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    })
    console.log('🔑 Firebase: loaded credentials from env vars')
  }

  if (!credential) {
    throw new Error(
      'Firebase credentials not found. Set FIREBASE_SERVICE_ACCOUNT_PATH or ' +
      'FIREBASE_PROJECT_ID + FIREBASE_CLIENT_EMAIL + FIREBASE_PRIVATE_KEY in .env'
    )
  }

  admin.initializeApp({ credential })
  db = admin.firestore()
  console.log('✅ Firebase Admin initialised')
  return db
}

export const getDb = () => {
  if (!db) return initFirebase()
  return db
}

export { admin }
export default initFirebase
