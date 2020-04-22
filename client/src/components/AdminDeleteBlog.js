import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import axios from "axios";
import config from "../config.js";
import { FaRegTrashAlt } from "react-icons/fa";

const AdminDeleteBlog = props => {
	const [modal, setModal] = useState(false);

	const openModal = () => {
		setModal(true);
	};

	const handleClose = () => {
		setModal(false);
	};

	const deleteBlog = e => {
		const id = props.post._id;

		axios.delete(
			`/api/admin/delete_blog/${id}`
		).then(res => {
			console.log(`Deleted ${id}!`);
		});

		axios.get(
			`/api/admin/get_blog`
		).then(res => {
			props.setBlog(res.data);
			window.location.reload(false);
		});

		handleClose();
	};

	return (
		<>
			<Button variant="secondary" onClick={openModal} value={props.post.title}>
				<FaRegTrashAlt size={24} />
			</Button>

			<Modal show={modal} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Deleting: {props.post.title}</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					Are you sure you want to delete this post?
        		</Modal.Body>

				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cancel
            		</Button>

					<Button variant="danger" onClick={deleteBlog}>
						Yes, delete
            		</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default AdminDeleteBlog;
