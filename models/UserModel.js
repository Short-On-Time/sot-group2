import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
	password: { type: String, required: true },
	is_premium: { type: Boolean, required: true },

  is_admin: { type: Boolean, required: true, default: false }, //can assign roles, premiums, and adjust prices
	is_moderator: { type: Boolean, required: true, default: false }, //can edit/delete forum stuff
	is_glossary_editor: { type: Boolean, required: true, default: false }, //can add/edit/delete glossary
	is_remedy_editor: { type: Boolean, required: true, default: false }, //can add/edit/delete remedies (except premiums)
	is_website_editor: { type: Boolean, required: true, default: false }, //can change text/images on website

	number_posts: {type: Number, default: 0},
	number_comments: {type: Number, default: 0},

  createdAt: { type: Date, default: Date.now()}
});

export default mongoose.model('user', UserSchema);
