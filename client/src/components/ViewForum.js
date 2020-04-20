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
	const [comments, setComments] = useState({});

	useEffect(() => {
		axios
			.get(`http://localhost:3001/api/forum/get_post`)
			.then(res => {
				setPost(res.data);
			});
	}, []);


	return (
		<div>

			<Table striped bordered>
				<thead>
					<tr>
						<th class="align-middle">Title</th>
						<th class="align-middle">Body</th>
						<th class="align-middle">Author</th>
						<th class="align-middle">
							<ForumAddPost />
						</th>
					</tr>
				</thead>
				<tbody>
					{post.map(post => {
					
							return (
								<tr key={post._id} name={post.title}>
									<td class="align-middle">
										<a href={`/post/${post._id}`}>{post.title}</a> {/*delete the link if it messes with the code*/}
									</td>
									<td class="align-middle">{post.body.substring(0, 20)}</td>
									<td class="align-middle">{post.author_username}</td>
									<td class="align-middle">
										<ButtonGroup>
											<ForumEditPost item={post._id} />
											<ForumDeletePost
												post={post._id}
												setPost={setPost}
											/>
										</ButtonGroup>
									</td>
								</tr>
							);
					})}
				</tbody>
			</Table>
		</div>
	);


};

export default ViewForum;
