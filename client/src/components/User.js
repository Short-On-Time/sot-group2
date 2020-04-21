import React, { useState, useEffect } from 'react';
import axios from "axios";
import config from "../config.js";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Please rename this file to something that reflects its purpose.

const UserButton = (props) => {
	const [show, setShow] = useState(false);
	const [profile, setProfile] = useState({});

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		axios
			.get(`http://localhost:3001/api/forum/view_user/${props.id}`)
			.then(res => {
				setProfile(res.data);
			});
	}, []);

	return (
		<>
			<a onClick={handleShow}>
				<Image src="../logo.svg" roundedCircle />
			</a>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{profile.username}</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<p>Posts: {profile.number_posts}</p>
					<p>Comments: {profile.number_comments}</p>
				</Modal.Body>

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
