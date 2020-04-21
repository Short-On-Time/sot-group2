import mongoose from 'mongoose';

const ContactSchema = mongoose.Schema({
  email: { type: String, required: true },
  body: { type: String, required: true },
  createdAt: { type: Date, default: Date.now()}
});

export default mongoose.model('contact', ContactSchema);
