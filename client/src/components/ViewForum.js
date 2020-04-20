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

const ViewForum = (props) => {
	const [post, setPost] = useState([]);

	useEffect(() => {
		axios
			.get(`http://localhost:3001/api/forum/get_post`)
			.then(res => {
				setPost(res.data);
			});
	}, []);


	return (
		<div class="container">
			<div class="row">
   			<div class="col-lg-12">
        	<div class="wrapper wrapper-content animated fadeInRight">

            <div class="ibox-content forum-container">

				{/*Ask how to only let users make posts*/ }
				{/*Ask how to link to user when post*/ }
				{/*Ask automatically add userID when they make a post*/ }
			<div aling="right" class="align-middle">
							Add a Post <ForumAddPost />
			</div>




                <div class="forum-item active">
				<Table  striped bordered>
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
									<a href={`/post/${post._id}` } class="forum-item-title">{post.title} </a> by  <a href={`/user/${post.Author_ID}` } class="forum-item-title"> {post.author_username} </a>  {/*delete the link if it messes with the code*/}
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
