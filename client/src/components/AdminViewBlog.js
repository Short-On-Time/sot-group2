import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import AdminEditBlog from "./AdminEditBlog";
import AdminDeleteBlog from "./AdminDeleteBlog";
import AdminAddBlog from "./AdminAddBlog";

const AdminViewBlog = props => {
	const [blog, setBlog] = useState([]);

	useEffect(() => {
		axios
			.get(`/api/admin/get_blog`)
			.then(res => {
				setBlog(res.data);
			});
	}, []);

	return (
		<div>
			<div className="admin-toggle">
				<Form.Check
					type="switch"
					id="custom-switch"/>
			</div>

			<Table striped bordered>
				<thead>
					<tr>
						<th className="align-middle">Title</th>
						<th className="align-middle">Text</th>
						<th className="align-middle">Social Media</th>
						<th className="align-middle">
							<AdminAddBlog />
						</th>
					</tr>
				</thead>
				<tbody>
					{blog.filter(post =>
						post.title.toLowerCase().includes(props.query.toLowerCase())
					).map(post => {
						if (true) {
							return (
								<tr key={post._id} name={post.title}>
									<td className="align-middle">{post.title}</td>
									<td className="align-middle">{post.text}</td>
									<td className="align-middle">{post.socialtype}</td>
									<td className="align-middle">
										<ButtonGroup>
											<AdminEditBlog post={post} />
											<AdminDeleteBlog
												post={post}
												setBlog={setBlog}
											/>
										</ButtonGroup>
									</td>
								</tr>
							);
						}
					})}
				</tbody>
			</Table>
		</div>
	);
};

export default AdminViewBlog;
