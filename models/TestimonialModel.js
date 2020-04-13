import mongoose from 'mongoose';

const TestimonialSchema = mongoose.Schema({
  author: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now()}
});

export default mongoose.model('testimony', TestimonialSchema);
