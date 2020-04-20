import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import config from "../config.js";
import { FaRegEdit } from "react-icons/fa";

const ForumEditPost = props => {
    const [modal, setModal] = useState(false);
	const [title, setTitle] = useState(props.item.title);
	const [body, setBody] = useState(props.item.body);
	const [author_username, setAuthor_Username] = useState(props.item.author_username);
    const [createdAt, setCreatedAt] = useState(props.item.createdAt);
    const[is_edited, setIs_Edited] = useState(props.item.is_edited);
    const[comments, setComments] = useState(props.item.comments);



	const openModal = () => {
		setModal(true);
	};

	const handleClose = () => {
		setModal(false);
	};

	const handleSubmit = event => {
		let data = {
			_id: props.item._id,
			title: title,
			body: body,
			author_username: author_username,
			createdAt: createdAt,
			is_edited: is_edited,
			comments: comments
		};
		console.log("This is data", data);
		axios.put(
			`http://localhost:${config.server_port}/api/users/update_post/${data.title}`,
			data
		).then(
			response => {
				console.log(response);
				window.location.reload(false);
			}
		)

		setModal(false);
	};

	return (
		<>
			<Button variant="success" onClick={openModal}>
				<FaRegEdit color="white" />
			</Button>

			<Modal show={modal} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Editing: {title}</Modal.Title>
				</Modal.Header>
				<Form>
					<Modal.Body>
						<Form.Group>
							<Form.Label>Title</Form.Label>
							<Form.Control
								name="Title"
								type="text"
								defaultValue={title}
								onChange={event => setTitle(event.target.value)}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Body</Form.Label>
							<Form.Control
								as="textarea"
								name="body"
								rows="2"
								defaultValue={body}
								onChange={event => setBody(event.target.value)}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Author Username</Form.Label>
							<Form.Control
								as="textarea"
								name="Body Part"
								rows="2"
								defaultValue={author_username}
								onChange={event => setAuthor_Username(event.target.value)}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Created At</Form.Label>
							<Form.Control
								as="textarea"
								name="Created at"
								rows="2"
								defaultValue={createdAt}
								onChange={event => setCreatedAt(event.target.value)}
							/>
						</Form.Group>


                        <Form.Group>
							<Form.Label>Comments</Form.Label>
							<Form.Control
								as="textarea"
								name="Created at"
								rows="2"
								defaultValue={createdAt}
								onChange={event => setComments(event.target.value)}
							/>
						</Form.Group>

						<Form.Check
							type="checkbox"
							name="draft"
							label="Is Edited?"
							defaultChecked={!is_edited}
							onChange={event => setIs_Edited(!event.target.checked)}
						/>

					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
            			</Button>

						<Button variant="primary" onClick={handleSubmit}>
							Save Changes
            			</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</>
	);
};

export default ForumEditPost;
