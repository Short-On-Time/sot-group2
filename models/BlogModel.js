import mongoose from 'mongoose';

const BlogSchema = mongoose.Schema({
  title: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now() },
  text: String,
  socialsrc: String,
  socialtype: String
});

export default mongoose.model('blog', BlogSchema);
