import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import {TwitterTweetEmbed} from 'react-twitter-embed'

const SocialEmbed = (props) => {
	switch(props.type){
		case "youtube":
			const ytid = props.src.split('?v=')[1].split('&')[0]
			return(
				<iframe width="560" height="315" src={'https://www.youtube.com/embed/' + ytid}
					frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			);
		case "instagram":
			return(
				<InstagramEmbed url={props.src} />
			);
		case "twitter":
			const twid = props.src.split('/status/')[1].split('?')[0]
			return(
				<TwitterTweetEmbed tweetId={twid} />
			);
		case "facebook":
			const fburl = props.src.split('?')[0]
			return(
				<iframe src={`https://www.facebook.com/plugins/post.php?href=${fburl}&width=500`}
				width="500" height="386" style={{border:"none",overflow:"hidden"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media">
				</iframe>
			);
		case "link":
				return(<a href={props.src}> {props.src}</a>)
		case "image":
				return(<img src={props.src} />);
		default: return ''
	}
}

export default SocialEmbed;
