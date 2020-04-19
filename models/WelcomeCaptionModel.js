import mongoose from 'mongoose';

const WelcomeCaptionSchema = mongoose.Schema({
	content: { type: String, required: true },
	imageID: {type: String},
  createdAt: { type: Date, default: Date.now()}
});

export default mongoose.model('welcome', WelcomeCaptionSchema);
