import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import config from "../config.js";
import { TiDocumentAdd } from "react-icons/ti";

const AdminAddGlossary = () => {
	const [modal, setModal] = useState(false);
	const [title, setTitle] = useState("");
	const [definition, setDefinition] = useState("");
	const [usage, setUsage] = useState("");
	const [isPublished, setIsPublished] = useState(false);

	const openModal = () => {
		setModal(true);
	};

	const handleClose = () => {
		setModal(false);
	};

	const handleSubmit = event => {
		let data = {
			title: title,
			definition: definition,
			usage: usage,
			is_published: isPublished
		};
		console.log("This is data", data);
		axios.post(
			`/api/admin/add_glossary`,
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
					<Modal.Title>Add New Item</Modal.Title>
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
							<Form.Label>Definition</Form.Label>
							<Form.Control
								required
								as="textarea"
								name="definition"
								rows="2"
								onChange={event => setDefinition(event.target.value)}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Usage</Form.Label>

							<Form.Control
								required
								as="textarea"
								name="usage"
								rows="2"
								onChange={event => setUsage(event.target.value)}
							/>

							<Form.Control.Feedback type="invalid">
								Please provide a valid usage.
            				</Form.Control.Feedback>
						</Form.Group>

						<Form.Check
							type="checkbox"
							name="draft"
							label="Save as Draft"
							onChange={event => setIsPublished(!event.target.checked)}
						/>
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

export default AdminAddGlossary;
