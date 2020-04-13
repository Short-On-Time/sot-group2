import mongoose from 'mongoose';

const DisclaimerCaptionSchema = mongoose.Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now()}
});

export default mongoose.model('disclaimer', DisclaimerCaptionSchema);
