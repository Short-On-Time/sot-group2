import React, { useState, useEffect } from 'react';
import axios from "axios";
import config from "../config.js";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Please rename this file to something that reflects its purpose.

const UserButton = () => {
	const [show, setShow] = useState(false);
	const [ID, setID] = useState("");
	const [profile, setProfile] = useState({});

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		setID(props.id);
		axios
			.get(`http://localhost:3001/api/forum/view_user/${ID}`)
			.then(res => {
				setPost(res.data);
			});
	}, []);

	return (
		<>
			<a onClick={handleShow}>
				<Image src="../logo.svg" roundedCircle />
			</a>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>profile.username</Modal.Title>
				</Modal.Header>

				<Modal.Body>Posts: {profile.posts}\nComments: {profile.comments}</Modal.Body>

				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Close 2.0
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default UserButton;
