import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from './config.js';
import Card from 'react-bootstrap/Card';
import SocialEmbed from './SocialEmbed.js';

const BlogPost = (props) => {

	const getSocialEmbed = (post) => {
		if(post.socialsrc && post.socialtype){
			return (
				<SocialEmbed type={post.socialtype} src={post.socialsrc} />
			);
		}
	}

	const createBlogPost = (post) => {
		const JSX = (
			<Card className="text-justify" style={{ width: 'auto', paddingLeft: "1rem", paddingRight: "1rem" }}>
			<Card.Title style = {{
				display: "flex",
				justifyContent: "center",
				alignItems: "center"}}>

					<br />
					{post.title}
			</Card.Title>
				<Card.Body>
					<Card.Text>
						<p>{post.text}</p>
						<br />
						{getSocialEmbed(post)}
					</Card.Text>
				</Card.Body>
			</Card>
		);

		return JSX;
	}

	return (
		<div className="glossary-item">
			{createBlogPost(props.post)}
		</div>
	);
};

export default BlogPost;
