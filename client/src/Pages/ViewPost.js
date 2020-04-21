import React, { useState, useEffect } from 'react';
import '../App.css';
import NavBar from '../components/NavBar';
import ViewGlossary from '../components/ViewGlossary';
import Footer from '../components/Footer';
import axios from "axios";
import config from "../config.js";
import ForumAddComment from '../components/ForumAddComment';
import Table from "react-bootstrap/Table";


const ViewPost= (props) => {
	const [post, setPost] = useState({});
	let logged = localStorage.getItem("user_logged");

	useEffect(() => {
		axios
			.get(`http://localhost:3001/api/forum/get_post/${props.match.params.id}`)
			.then(res => {
				setPost(res.data);
			});
	}, []);

	const showComments = () => {
		if(post.comments) {
			
			return post.comments.map(comment => {
				return (
					
					<div>
					<div key={comment._id}>

					<br></br>
					<br></br>
					<ul class="list-group">
						<li class="list-group-item list-group-item-success ">Comment by {comment.author_username}</li>
						<li class="list-group-item disabled">{comment.body}</li>
					</ul>


						<br></br>
		
						  
						
						
					</div>

					</div>
				);
			});
		}
	};


	
	const Addcomment = () => {
		return (
			<div aling="right" class="align-middle"> 
							Add a Comment <ForumAddComment post_id={props.match.params.id}/>
			</div>
		)
	}
	
	return (
		<div className="AboutPage">
				<div id="overlayer"></div>
				<div className="loader">
						<div className="spinner-border text-primary" role="status">
								<span className="sr-only">Loading...</span>
						</div>
				</div>
				<div className="site-wrap">
						<div className="site-mobile-menu">
								<div className="site-mobile-menu-header">
										<div className="site-mobile-menu-close mt-3">
												<span className="icon-close2 js-menu-toggle"></span>
										</div>
								</div>
								<div className="site-mobile-menu-body"></div>
						</div>

						<NavBar page="Forum"/>

						<div  className=" inner-page overlay" style={{backgroundImage: "url('images/hero_2.jpg')"}} data-aos="fade" data-stellar-background-ratio="0.5">
								<div className="row align-items-center justify-content-center">
										<div className="text-center shadow p-3 mb-5 bg-white rounded" data-aos="fade" style={{maxWidth : '800px', minWidth:'800px'}}>
												<br />
												<br />
												<br />
												<br />
												
												
												<h1 className="text-uppercase">{post.title}</h1>
												<p><i>By: <h2 className="text-lowercase"> {post.author_username}</h2></i></p>	

												<ul class="list-group list-group-flush">
												<li class="list-group-item">{post.body}</li>
												
												</ul>
												
								

												
												{
													showComments()
												}
												{ (logged) ? Addcomment() :  <div vertical-align="middle">You need to be logged in to make a comment. </div> }
												<br />
												<br />
												<br />
												<br />
										</div>
								</div>
						</div>

						<Footer />
				</div>
		</div>
	);
}

export default ViewPost;