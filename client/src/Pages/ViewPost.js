import React, { useState, useEffect } from 'react';
import '../App.css';
import NavBar from '../components/NavBar';
import ViewGlossary from '../components/ViewGlossary';
import Footer from '../components/Footer';
import axios from "axios";
import config from "../config.js";


const ViewPost= (props) => {
	const [post, setPost] = useState([]);
	const [ID, setID] = useState("");

	useEffect(() => {
		setID(props.match.params.id);
		axios
			.get(`http://localhost:3001/api/forum/get_post/${ID}`)
			.then(res => {
				setPost(res.data);
			});
	}, []);
	
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

						<div className=" inner-page overlay" style={{backgroundImage: "url('images/hero_2.jpg')"}} data-aos="fade" data-stellar-background-ratio="0.5">
								<div className="row align-items-center justify-content-center">
										<div className="text-center shadow p-3 mb-5 bg-white rounded" data-aos="fade">
												<br />
												<br />
												<br />
												<br />
												<h1 className="text-uppercase">{post.title}</h1>
												<p><i>By: {post.author_username}</i></p>
												<p>{post.body}</p>

												{
													post.comments.map(comment => {
														return (
															<div> 
																<h2>{comment.title}</h2>
																<p><i>By: {comment.author_username}</i></p>
																<p>{comment.body}</p>
															</div>
														);
													})
												}

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