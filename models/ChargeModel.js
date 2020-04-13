import mongoose from 'mongoose';

const ChargeSchema = mongoose.Schema({
  type: { type: String, required: true },
  amount: { type: String, required: true },
  createdAt: { type: Date, default: Date.now()}
});

export default mongoose.model('charge', ChargeSchema);
