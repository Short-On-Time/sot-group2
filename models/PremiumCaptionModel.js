import mongoose from 'mongoose';

const PremiumCaptionSchema = mongoose.Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now()}
});

export default mongoose.model('caption', PremiumCaptionSchema);
