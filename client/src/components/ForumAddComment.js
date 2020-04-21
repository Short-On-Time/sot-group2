import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import config from "../config.js";
import { TiPlusOutline } from "react-icons/ti";


const ForumAddComment = () => {
	const [modal, setModal] = useState(false);
    const [body, setBody] = useState("");
    const [author_username,setAuthor_Username]= useState("");
    const [ author_ID, set_Author_ID]= useState("");
    
	
	const openModal = () => {
		setModal(true);
	};

	const handleClose = () => {
		setModal(false);
	};

	const handleSubmit = event => {
		let data = {
			body: body
		};
		console.log("This is data", data);
		axios.post(
			`http://localhost:${config.server_port}/api/forum/add_comment`,
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
				<TiPlusOutline size={32} />
			</Button>

			<Modal show={modal} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add Comment</Modal.Title>
				</Modal.Header>

				<Form validate>
					<Modal.Body>
					

						<Form.Group>
							<Form.Label>What do you want to comment?</Form.Label>
							<Form.Control
								required
								as="textarea"
								name="body"
								rows="2"
								onChange={event => setBody(event.target.value)}
							/>
						</Form.Group>


                        <Form.Group>
							<Form.Label>Username</Form.Label>
							<Form.Control
								required
								as="textarea"
								name="body"
								rows="2"
								onChange={event => setAuthor_Username(event.target.value)}
							/>
						</Form.Group>


                        <Form.Group>
							<Form.Label>ID</Form.Label>
							<Form.Control
								required
								as="textarea"
								name="body"
								rows="2"
								onChange={event => set_Author_ID(event.target.value)}
							/>
						</Form.Group>

					</Modal.Body>

					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Cancel
            			</Button>

						<Button variant="primary" onClick={handleSubmit}>
							Post Comment
            			</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</>
	);
};

export default ForumAddComment;
