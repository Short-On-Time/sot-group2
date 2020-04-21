import mongoose from 'mongoose';

//comment
const CommentSchema = mongoose.Schema({
	body: {type: String, required: true}, //content
	author_username: {type: String, required: true}, //poster
	author_ID: {type: String, required: true},
	createdAt: {type: Date, default: Date.now()},
	is_edited: {type: Boolean, default: false, required: true} //in case they edit, want to show that it was changed
});

//this is the original post, contains extra information because of that
const PostSchema = mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true},
	author_username: { type: String, required: true},
	author_ID: {type: String, required: true},
	createdAt: { type: Date, default: Date.now()},
	is_edited: {type: Boolean, default: false, required: true},
	comments: [CommentSchema], //sub-doc, holds all the comments
	views: {type: Number, default: 0},
});


export default mongoose.model('Post', PostSchema);
//export const mongoose.model('Comment', CommentSchema);
//export default {Post, Comment};
