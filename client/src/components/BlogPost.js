import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from './config.js';
import Card from 'react-bootstrap/Card';
import SocialEmbed from './SocialEmbed.js';

const BlogPost = (props) => {
	const [blogPost, setBlogPost] = useState({});

	const getSocialEmbed = (post) => {
		if(post.socialsrc && post.socialtype){
			return (
				<SocialEmbed type={post.socialtype} src={post.socialsrc} />
			);
		}
	}

	const createBlogPost = (post) => {
		const JSX = [
			<h3>{post.title}</h3>,
			<Card className="text-justify" style={{ width: 'auto' }}>
				<Card.Body>
					<Card.Text>
						<p>{post.text}</p>
						<div>{getSocialEmbed(post)}</div>
					</Card.Text>
				</Card.Body>
			</Card>
		];

		return JSX;
	}

	useEffect(() => {
		axios.get(`http://localhost:${config.server_port}/api/users/get_blog_post`)
			.then(res => {
                const item = res.data;
				setBlogPost(item);
			})
	}, []);

	return (
		<div className="glossary-item">
			{createBlogPost(blogPost)}
		</div>
	);
};

export default BlogPost;
