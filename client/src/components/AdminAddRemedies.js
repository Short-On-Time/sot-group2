import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import config from "../config.js";
import { TiDocumentAdd } from "react-icons/ti";
import AdminAddRemediesIngredient from "./AdminAddRemediesIngredient.js";

const AdminAddRemedies = () => {
	const [modal, setModal] = useState(false);
	const [name, setName] = useState("");
	const [ailment, setAilment] = useState("");
	const [body_part, setBody_Part] = useState("");
	const [ingredients, setIngredients] = useState([]);
	const [amounts, setAmounts] = useState([]);
	const [units, setUnits] = useState([]);
	const [description, setDescription] = useState("");
	const [is_published, setIsPublished] = useState(false);
	const [is_premium, setIsPremium] = useState(false);
	const [createdAt, setCreatedAt] = useState(false);

	const openModal = () => {
		setModal(true);
	};

	const handleClose = () => {
		setModal(false);
	};

	const parseIngredients = (text) => {
		let ing = [];
		let amnt = [];
		let unit = [];
		const allIngredients = text.split("\n");
		allIngredients.forEach( ingredient => {
			let fields = ingredient.split(",");
			ing.push(fields[0])
			amnt.push(fields[1])
			unit.push(fields[2]);
		});
		setIngredients(ing);
		setAmounts(amnt);
		setUnits(unit);
	}

	const handleSubmit = event => {
		let data = {
			name: name,
			ailment_type: ailment,
			body_part: body_part,
			is_published: is_published,
			is_premium: is_premium,
			ingredients: ingredients,
			amounts: amounts,
			units: units,
			description: description,
			createdAt: Date.now()
		};
		console.log("This is data", data);
		axios.post(
			`http://localhost:${config.server_port}/api/admin/add_remedy`,
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
					<Modal.Title>Add New Remedy</Modal.Title>
				</Modal.Header>

				<Form validate>
					<Modal.Body>
						<Form.Group>
							<Form.Label>Name</Form.Label>
							<Form.Control
								required
								name="name"
								type="text"
								onChange={event => setName(event.target.value)}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Ailment</Form.Label>
							<Form.Control
								required
								as="textarea"
								name="ailment"
								rows="2"
								onChange={event => setAilment(event.target.value)}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Body Part</Form.Label>

							<Form.Control
								required
								as="textarea"
								name="body_part"
								rows="2"
								onChange={event => setBody_Part(event.target.value)}
							/>

						</Form.Group>

						<Form.Group>
							<Form.Label>Description</Form.Label>
							<Form.Control
								required
								as="textarea"
								name="description"
								rows="2"
								onChange={event => setDescription(event.target.value)}
							/>
						</Form.Group>

						
						<Form.Group>
							<Form.Label>Ingredients</Form.Label>
							<div>Enter each ingredient on a new line in this format:</div>
							<div>Water,3,oz</div>
							<Form.Control
								required
								as="textarea"
								name="ailment"
								rows="5"
								onChange={event => parseIngredients(event.target.value)}
							/>
						</Form.Group>

						<Form.Check
							type="checkbox"
							name="draft"
							label="Save as Draft"
							onChange={event => setIsPublished(!event.target.checked)}
						/>

						<Form.Check
							type="checkbox"
							name="Premium"
							label="Save as Premium"
							onChange={event => setIsPremium(event.target.checked)}
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

export default AdminAddRemedies;
