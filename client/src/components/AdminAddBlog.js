import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import config from "../config.js";
import { TiDocumentAdd } from "react-icons/ti";

const AdminAddBlog = () => {
	const [modal, setModal] = useState(false);
	const [title, setTitle] = useState("");
	const [text, setText] = useState("");
	const [socialType, setSocialType] = useState("");
	const [socialSrc, setSocialSrc] = useState("");

	const openModal = () => {
		setModal(true);
	};

	const handleClose = () => {
		setModal(false);
	};

	const handleSubmit = event => {
		let data = {
			title: title,
			text: text,
			createdAt: new Date(),
			socialsrc: socialSrc,
			socialtype: socialType
		};
		console.log("This is data", data);
		axios.post(
			`http://localhost:${config.server_port}/api/admin/add_blog`,
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
					<Modal.Title>New Post</Modal.Title>
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
							<Form.Label>Text</Form.Label>
							<Form.Control
								required
								as="textarea"
								name="text"
								rows="5"
								onChange={event => setText(event.target.value)}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Social Media Type (optional)</Form.Label>

							<Form.Control
								required
								as="select"
								name="socialType"
								onChange={event => setSocialType(event.target.value)}>
								<option value=""></option>
								<option value="youtube">YouTube Video</option>
								<option value="twitter">Tweet</option>
								<option value="facebook">Facebook Post</option>
								<option value="instagram">Instagram Post</option>
								<option value="link">Link</option>
							</Form.Control>
							
						</Form.Group>

						<Form.Group>
							<Form.Label>Social Media URL (optional)</Form.Label>
							<Form.Control
								required
								name="socialSrc"
								type="text"
								onChange={event => setSocialSrc(event.target.value)}
							/>
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

export default AdminAddBlog;
