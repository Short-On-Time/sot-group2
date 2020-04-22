import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { FaRegEdit } from "react-icons/fa";

const AdminEditBlog = props => {
	const [modal, setModal] = useState(false);
	const [title, setTitle] = useState(props.post.title);
	const [text, setText] = useState(props.post.text);
	const [socialType, setSocialType] = useState(props.post.socialtype);
	const [socialSrc, setSocialSrc] = useState(props.post.socialsrc);

	const openModal = () => {
		setModal(true);
	};

	const handleClose = () => {
		setModal(false);
	};

	const handleSubmit = event => {
		let data = {
			_id: props.post._id,
			title: title,
			text: text,
			createdAt: props.post.createdAt,
			socialsrc: socialSrc,
			socialtype: socialType
		};
		axios.put(
			`/api/admin/update_blog/${data._id}`,
			data
		).then(
			response => {
				console.log(response);
				window.location.reload(false);
			}
		);

		handleClose();
	};

	return (
		<>
			<Button variant="success" onClick={openModal}>
				<FaRegEdit size={24} />
			</Button>

			<Modal show={modal} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Editing: {title}</Modal.Title>
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
								defaultValue={title}
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
								defaultValue={text}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Social Media Type (optional)</Form.Label>

							<Form.Control
								required
								as="select"
								name="socialType"
								onChange={event => setSocialType(event.target.value)}
								defaultValue={socialType} >

								<option value=""></option>
								<option value="youtube">YouTube Video</option>
								<option value="twitter">Tweet</option>
								<option value="facebook">Facebook Post</option>
								<option value="instagram">Instagram Post</option>
							</Form.Control>

						</Form.Group>

						<Form.Group>
							<Form.Label>Social Media URL (optional)</Form.Label>
							<Form.Control
								required
								name="socialSrc"
								type="text"
								onChange={event => setSocialSrc(event.target.value)}
								defaultValue={socialSrc}
							/>
						</Form.Group>

					</Modal.Body>

					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Cancel
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

export default AdminEditBlog;
