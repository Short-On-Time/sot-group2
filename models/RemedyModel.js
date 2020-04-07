import mongoose from 'mongoose';

const RemedySchema = mongoose.Schema({
  name: { type: String, required: true },
  ailment: { type: String, required: true},
  body_part: { type: String, required: true},
  is_published: { type: Boolean, required: true, default: false },
  is_premium: { type: Boolean, required: true, default: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now()}
});

export default mongoose.model('remedys', RemedySchema);
