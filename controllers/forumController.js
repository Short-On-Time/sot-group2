import mongoose from 'mongoose';
import Post from '../models/ForumModel.js';
import config from '../config/config.js';

let db;
function initMongoose() {
  mongoose.connect(config.db.uri, {useNewUrlParser: true});
  db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
}

export const getPostList = async (req, res) => {
	initMongoose()
	Post.find({}, (err, data) => {
		res.status(200).json(data);
	});
}

export const getPost = async (req, res) => {
	initMongoose()
	const id = req.params.id;
	Post.findOne({_id: id}, (err, data) => {
		if(!data) {
			res.status(400).json({
				message: "Post does not exist!"
			});
		} else {
			res.status(200).json(data);
		}
	});
}

export const addPost = async (req, res) => {
	initMongoose()
	let save_post
	save_post = new Post({
		title: req.body.title,
		body: req.body.body,
		author_username: req.body.author_username,
		author_ID: req.body.author_ID,
	});
	save_post.save(function (err, save_post) {
		if(err) {
			return res.status(400).json(err);
		} else {
			console.log("saved =>", save_post);
			return res.status(200).json(save_post);
		}
	});
}

export const getComment = async (req, res) => {
	const postID = req.params.post_id;
	const commentID = req.params.comment_id;
	initMongoose()
	let post = await Post.findOne({_id: postID});
	if(!post) {
		res.status(400).json({
			message: "Post does not exist!"
		});
	} else {
		let comment = post.comments.id(commentID);
		if(!comment) {
			res.status(400).json({
				message: "Comment does not exist!"
			});
		} else {
			res.status(200).json(comment);
		}
	}
}

export const editPost = async (req, res) => {
	initMongoose()
	const id = req.params.id;
	req.body.is_edited = true;
	Post.findOneAndUpdate({_id: id}, req.body, {new: true}, (err, data) => {
		if(err) {
      res.status(400).json({err});
      throw err;
    } else if (!data) {
      res.status(500).json({
        message: "Post does not exist!"
      });
    } else {
      res.status(200).json(data);
    }
	});
}

export const deletePost = async (req, res) => {
	initMongoose()
	const id = req.params.id;
	Post.findOneAndDelete({_id: id}, (err, data) => {
		if(err) {
      res.status(400).json({err});
      throw err;
    } else if(!data) {
      res.status(400).json({
        message: 'Post does not exist!',
      });
    } else {
      res.status(200).json(data);
    }
	});
}

export const addComment = async (req, res) => {
	const postID = req.params.post_id;
	initMongoose()
	//get parent doc and add the subdoc
	let post = await Post.findOne({_id: postID});
	post.comments.push({
		body: req.body.body,
		author_username: req.body.author_username,
		author_ID: req.body.author_ID,
	});
	//save parent doc
	post.save(function(err, save_post) {
		if(err) {
      return res.status(400).json(err);
    } else {
      console.log('updated =>', save_post);
      return res.status(200).json(save_post);
    }
	});
}

export const editComment = async (req, res) => {
	const postID = req.params.post_id;
	const commentID = req.params.comment_id;
	initMongoose()
	let post = await Post.findOne({_id: postID});
	let comment = post.comments.id(commentID);
	//update data manually
	comment.body = req.body.body;
	comment.is_edited = true;
	//save parent doc
	post.save(function(err, save_post) {
		if(err) {
      return res.status(400).json(err);
    } else {
      console.log('updated =>', save_post);
      return res.status(200).json(save_post);
    }
	});
}

export const deleteComment = async (req, res) => {
	const postID = req.params.post_id;
	const commentID = req.params.comment_id;
	initMongoose()
	let post = await Post.findOne({_id: postID});
	let comment = post.comments.id(commentID).remove();
	post.save(function(err, save_post) {
		if(err) {
      return res.status(400).json(err);
    } else {
			console.log('updated =>', save_post);
			console.log('removed =>', comment);
      return res.status(200).json(save_post);
    }
	});
}