import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import axios from "axios";
import config from "../config.js";
import { FaRegTrashAlt } from "react-icons/fa";

const AdminDeleteGlossary = props => {
	const [modal, setModal] = useState(false);

	const openModal = () => {
		setModal(true);
	};

	const handleClose = () => {
		setModal(false);
	};

	const deleteGloss = e => {
		const title = props.glossary.title;

		axios.delete(
			`http://localhost:${config.server_port}/api/admin/delete_glossary/${title}`
		).then(res => {
			console.log(`Deleted ${props.glossary.title}!`);
		});

		axios.get(
			`http://localhost:${config.server_port}/api/admin/get_glossary`
		).then(res => {
			props.setGlossary(res.data);
			window.location.reload(false);
		});

		handleClose();
	};

	return (
		<>
			<Button variant="secondary" onClick={openModal} value={props.glossary.title}>
				<FaRegTrashAlt size={24} />
			</Button>

			<Modal show={modal} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Deleting: {props.glossary.title}</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					Are you sure you want to delete this glossary item?
        		</Modal.Body>

				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cancel
            		</Button>

					<Button variant="danger" onClick={deleteGloss}>
						Yes, delete
            		</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default AdminDeleteGlossary;
