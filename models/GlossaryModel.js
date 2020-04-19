import mongoose from 'mongoose';

const GlossarySchema = mongoose.Schema({
  title: { type: String, required: true },
  definition: { type: String, required: true},
  usage: { type: String, required: true},
	is_published: { type: Boolean, required: true, default: false },
	
	imageID: {type: String},
	
	createdAt: { type: Date, default: Date.now()},
});

export default mongoose.model('glossary', GlossarySchema);
