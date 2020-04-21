import React, { useState, useEffect } from "react";
import axios from "axios";
// import config from "../config.js";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

import ButtonGroup from "react-bootstrap/ButtonGroup";
// import Container from "react-bootstrap/Container";
import ForumEditPost from "./ForumEditPost";
import ForumDeletePost from "./ForumDeletePost";
import ForumAddPost from "./ForumAddPost";
import User from '../components/User';


const ViewForum = (props) => {
	const [post, setPost] = useState([]);
	let logged = localStorage.getItem("user_logged");

	useEffect(() => {
		axios
			.get(`http://localhost:3001/api/forum/get_post`)
			.then(res => {
				setPost(res.data);
			});
	}, []);

	const Addpost = () => {
		return (
			<div aling="right" class="align-middle"> 
							Add a Post <ForumAddPost />
			</div>
		)
	}

	const ViewUser = () =>{

		return (
			<div aling="right" class="align-middle"> 
						 <User />
			</div>
		)



	}



	return (
		<div class="container" style={{maxWidth : '800px'}}>
			<div class="row">
   			<div class="col-lg-12">
        	<div class="wrapper wrapper-content animated fadeInRight">

            <div class="ibox-content forum-container">

				{/*Ask how to link to user when post*/ }
				{/*Ask automatically add userID when they make a post*/ }
				{/*See how to present the post*/ }
				
			

				{ (logged) ? Addpost() :  <div vertical-align="middle">You need to be logged in to make a post. </div> }
				
			

	




                <div class="forum-item active">
				<Table  striped bordered >
					<thead>
						<tr>
						<th class="aligh-right" width="25">Posts</th>
						<th class="align-right" width="25">Views</th>
						<th class="align-right" width="25">Comments</th>
						</tr>
					</thead>

		{post.map(post => {

				return (

					<tbody>
						<tr key={post._id} name={post.title}>
							<td class="col-md-9">
									<a href={`/post/${post._id}` } class="forum-item-title">{post.title} </a> by  <a href={`/forum/view_user/${post._ID}` } class="forum-item-title"> {post.author_username} </a>  {/*delete the link if it messes with the code*/}
									<div class="forum-sub-title"> <small> {post.body.substring(0, 70)}</small></div>
							</td>
							
							<td class="align-right" height="25" width="25">{post.views}</td>
							<td class="align-right" height="25" width="25">{post.comments.length}</td>
						</tr>
		
					</tbody>

				);
		})}

				</Table>

                </div>


					</div>
				</div>
			</div>
		</div>
		</div>
	);


};

export default ViewForum;
