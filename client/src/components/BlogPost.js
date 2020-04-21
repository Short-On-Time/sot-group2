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
						<p style={{whiteSpace: "pre-line"}}>{post.text}</p>
						<br />
						{getSocialEmbed(post)}
					</Card.Text>
				</Card.Body>
			</Card>
		);

		return JSX;
	}

	const createDate = () => {
		if(props.post.createdAt){
			const postDate = props.post.createdAt;
			/*console.log(postDate)
			let ampm = "AM";
			let adjustedHour = postDate.getHours();
			let adjustedMinutes = "";
			let adjustedSeconds = "";
			if(adjustedHour>12){
				ampm = "PM";
				adjustedHour -= 12;
			}
			else if(adjustedHour === 12){
				ampm = "PM";
			}
			else if(adjustedHour === 0){
				adjustedHour += 12;
			}

			if(postDate.getMinutes<10){
				adjustedMinutes = "0" + postDate.getMinutes();
			}
			else{
				adjustedMinutes = "" + postDate.getMinutes();
			}

			if(postDate.getSeconds<10){
				adjustedSeconds = "0" + postDate.getSeconds();
			}
			else{
				adjustedSeconds = "" + postDate.getSeconds();
			}
			*/
			return(
				<i className="text-secondary">
					{/*${postDate.getMonth()+1}/${postDate.getDate()}/${postDate.getFullYear()} at 
					${adjustedHour}:${adjustedMinutes}:${adjustedSeconds} ${ampm}*/}
					{`Posted on ${postDate}`}</i>
			);
		}
		else{
			return '';
		}
	}

	return (
		<div className="glossary-item">
			{createBlogPost(props.post)}
			{createDate()}
		</div>
	);
};

export default BlogPost;
