import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import config from "../config.js";
import { TiDocumentAdd } from "react-icons/ti";


const ForumAddPost = () => {
	const [modal, setModal] = useState(false);
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author_username, setAuthor_Username] = useState("");
	const [author_ID, setAuthor_ID] = useState("");

	const openModal = () => {
		setModal(true);
	};

	const handleClose = () => {
		setModal(false);
	};

	const handleSubmit = event => {
		let data = {
			title: title,
			body: body,
			author_username: author_username,
      author_ID: author_ID
		};
		console.log("This is data", data);
		axios.post(
			`http://localhost:${config.server_port}/api/forum/add_post`,
			data
		).then(response => {
			console.log(response);
			window.location.reload(false);
		});

		handleClose();
	};

	return (
		<>
			<Button variant="light" onClick={openModal}>
				<TiDocumentAdd size={32} />
			</Button>

			<Modal show={modal} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add Post</Modal.Title>
				</Modal.Header>

				<Form validate>
					<Modal.Body>
						<Form.Group>
							<Form.Label>Title</Form.Label>
							<Form.Control
								required
								name="title"
								type="text"
								onChange={event => setTitle(event.target.value)}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Body</Form.Label>
							<Form.Control
								required
								as="textarea"
								name="body"
								rows="2"
								onChange={event => setBody(event.target.value)}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Author Username</Form.Label>

							<Form.Control
								required
								as="textarea"
								name="author_username"
								rows="2"
								onChange={event => setAuthor_Username(event.target.value)}
							/>

							<Form.Control.Feedback type="invalid">
								Please provide a valid usage.
            				</Form.Control.Feedback>
						</Form.Group>

						<Form.Group>
							<Form.Label>Author ID</Form.Label>

							<Form.Control
								required
								as="textarea"
								name="author_ID"
								rows="2"
								onChange={event => setAuthor_ID(event.target.value)}
							/>

							<Form.Control.Feedback type="invalid">
								Please provide a valid usage.
            				</Form.Control.Feedback>
						</Form.Group>

					</Modal.Body>

					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Cancel
            			</Button>

						<Button variant="primary" onClick={handleSubmit}>
							Save Item
            			</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</>
	);
};

export default ForumAddPost;
