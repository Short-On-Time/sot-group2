import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import config from "../config.js";
import { FaRegEdit } from "react-icons/fa";

const AdminEditProducts = props => {
	const [modal, setModal] = useState(false);
	const [name, setName] = useState(props.item.name);
	const [ailment, setAilment] = useState(props.item.ailment);
	const [body_part, setBody_Part] = useState(props.item.body_part);
	const [description, setDescription] = useState(props.item.description);
	const [createdAt, setCreatedAt] = useState(props.item.createdAt);
	const [isPremium, setIsPremium] = useState(props.item.is_premium);
	const [isPublished, setIsPublished] = useState(props.item.is_published);

	const openModal = () => {
		setModal(true);
	};

	const handleClose = () => {
		setModal(false);
	};

	const handleSubmit = event => {
		let data = {
			_id: props.item._id,
			name: name,
			ailment: ailment,
			body_part: body_part,
			description: description,
			createdAt: createdAt,
			is_published: isPublished,
			is_premium: isPremium
		};
		console.log("This is data", data);
		axios.put(
			`http://localhost:${config.server_port}/api/admin/update_products/${data.name}`,
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
					<Modal.Title>Editing: {name}</Modal.Title>
				</Modal.Header>
				<Form>
					<Modal.Body>
						<Form.Group>
							<Form.Label>Name</Form.Label>
							<Form.Control
								name="Name"
								type="text"
								defaultValue={name}
								onChange={event => setName(event.target.value)}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Ailment</Form.Label>
							<Form.Control
								as="textarea"
								name="Ailment"
								rows="2"
								defaultValue={ailment}
								onChange={event => setAilment(event.target.value)}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Body Part</Form.Label>
							<Form.Control
								as="textarea"
								name="Body Part"
								rows="2"
								defaultValue={body_part}
								onChange={event => setBody_Part(event.target.value)}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Description</Form.Label>
							<Form.Control
								as="textarea"
								name="Description"
								rows="2"
								defaultValue={description}
								onChange={event => setDescription(event.target.value)}
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

						<Form.Check
							type="checkbox"
							name="draft"
							label="Premium?"
							defaultChecked={!isPremium}
							onChange={event => setIsPremium(!event.target.checked)}
						/>

						<Form.Check
							type="checkbox"
							name="draft"
							label="Save as Draft"
							defaultChecked={!isPublished}
							onChange={event => setIsPublished(!event.target.checked)}
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

export default AdminEditProducts;
