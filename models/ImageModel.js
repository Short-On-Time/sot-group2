import mongoose from 'mongoose';

const ImageSchema = mongoose.Schema({
	name: {type: String },
	imageBuffer: {type: Buffer },
	mimeType: {type: String },
  createdAt: { type: Date, default: Date.now()},
});

export default mongoose.model('image', ImageSchema);