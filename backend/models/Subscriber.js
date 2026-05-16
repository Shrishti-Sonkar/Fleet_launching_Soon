import mongoose from 'mongoose'

const subscriberSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
    },
    source: {
      type: String,
      enum: ['hero', 'cta', 'footer'],
      default: 'hero',
    },
    confirmed: {
      type: Boolean,
      default: false,
    },
    ip: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
)

export default mongoose.model('Subscriber', subscriberSchema)
