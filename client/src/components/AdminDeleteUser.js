import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import axios from "axios";
import config from "../config.js";
import { FaRegTrashAlt } from "react-icons/fa";

const AdminDeleteUser = props => {
	const [modal, setModal] = useState(false);

	const openModal = () => {
		setModal(true);
	};

	const handleClose = () => {
		setModal(false);
	};

	const deleteGloss = e => {
		const id = props.user._id;

		axios.delete(`http://localhost:3001/api/admin/delete_user/${id}`).then(res => {
			console.log(`Deleted ${id}!`);
		});

		axios.get(`http://localhost:3001/api/admin/get_user`).then(res => {
			props.setUsers(res.data);
			window.location.reload(false);
		});

		handleClose();
	};

	return (
		<>
			<Button variant="secondary" onClick={openModal}>
				<FaRegTrashAlt size={24} />
			</Button>

			<Modal show={modal} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Deleting: {props.user.username}</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					Are you sure you want to delete this user?
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

export default AdminDeleteUser;
