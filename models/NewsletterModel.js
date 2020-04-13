import mongoose from 'mongoose';

const Newsletter = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now()}
});

export default mongoose.model('newsletter', Newsletter);
