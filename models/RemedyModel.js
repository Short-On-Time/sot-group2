import mongoose from 'mongoose';

const RemedySchema = mongoose.Schema({
	//general information
  name: { type: String, required: true },
  ailment_type: { type: String, required: true},
	body_part: { type: String, required: true},
	
	//classified information
	ingredients: { type: [String], required: true},
  amounts: {type: [String], required: true},
	units: {type: [String], required: true},
	description: { type: String, required: true },
	
	is_published: { type: Boolean, required: true, default: false },
  is_premium: { type: Boolean, required: true, default: true },
	is_free_trial: { type: Boolean, required: true, default: false},

	imageID: {type: String},
	
  createdAt: { type: Date, default: Date.now()}
});

export default mongoose.model('remedies', RemedySchema);
