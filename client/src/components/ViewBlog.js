import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from './config.js';
import ListGroup from 'react-bootstrap/ListGroup'
import PremiumWarning from './PremiumWarning'
import Error from './Error'
import BlogPost from './BlogPost'
import Button from 'react-bootstrap/Button';

const ViewBlog = (props) => {
	const [post, setPost] = useState({});
	const [previousId, setPreviousId] = useState("");
	const [nextId, setNextId] = useState("");

	useEffect(() => {
		if(props.p){
			axios.get(`/api/users/get_blog/${props.p}`)
			.then(res => {
				setPost(res.data);
			})
			.catch(function (e) {
				console.log(e.response)
				if (e) {
					return(<Error error={e} returnURL="/" />)
				}
			});
		}
		else{
			axios.get(`/api/users/get_blog_newest`)
			.then(res => {
				setPost(res.data);
			})
			.catch(function (e) {
				console.log(e.response)
				if (e) {
					return(<Error error={e} returnURL="/" />)
				}
			});
		}
	}, []);

	useEffect( () => {
		axios.get(`/api/users/get_blog_previous/${post._id}`)
			.then(res => {
				setPreviousId(res.data._id);
			})
			.catch(function (e) {
				console.log(e.response)
				if (e) {
					return(<Error error={e} returnURL="/" />)
				}
		});

		axios.get(`/api/users/get_blog_next/${post._id}`)
			.then(res => {
				setNextId(res.data._id);
			})
			.catch(function (e) {
				console.log(e.response)
				if (e) {
					return(<Error error={e} returnURL="/" />)
				}
		});
	}, [post])

	const getButtons = () => {
		let buttons = [];
		if(previousId != post._id){
			buttons.push(<Button variant="light" href={`/didyouknow/${previousId}`} key="previous"> Previous </Button>);
		}
		if(nextId != post._id){
			buttons.push(<Button variant="light" href={`/didyouknow/${nextId}`} key="next"> Next </Button>);
		}
		buttons.push(<Button variant="light" href="/didyouknow" key="newest">Newest</Button>)

		return buttons;
	}

	return (
		<div style={{ backgroundColor: "white" }} className="glossary-item">
			<BlogPost post={post}/>
			{getButtons()}
		</div>
	);

};
export default ViewBlog;
