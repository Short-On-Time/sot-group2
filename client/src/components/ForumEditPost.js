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
		};
		console.log("This is data", data);
		axios.put(
			`/api/users/update_post/${data._id}`,
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
