/* © 2025 Tiger X Panel — Proprietary/UI modules by Jan Köppke. Do not copy without permission.
*/

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ['admin', 'staff', 'viewer'], default: 'staff' },
    locale: { type: String, enum: ['de', 'en'], default: 'en' }
  },
  { timestamps: true }
);

export default mongoose.model('User', UserSchema);