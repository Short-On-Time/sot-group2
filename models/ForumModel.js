import mongoose from 'mongoose';

//post is a comment
const CommentSchema = mongoose.Schema({
	body: {type: String, required: true}, //content
	author_username: {type: String, required: true}, //poster
	createdAt: {type: Date, default: Date.now()},
	is_edited: {type: Boolean, required: false} //in case they edit, want to show that it was changed
});

//this is the original post, contains extra information
const PostSchema = mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true},
  author_username: { type: String, required: true},
	createdAt: { type: Date, default: Date.now()},
	is_edited: {type: Boolean, required: false},
	comments: [CommentSchema] //sub-doc, holds all the comments
});


export default mongoose.model('Post', PostSchema);
export default mongoose.model('Comment', CommentSchema);
