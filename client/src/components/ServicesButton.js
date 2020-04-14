// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import StripePay from './ConfigStripe.js'
import { loadStripe } from '@stripe/stripe-js';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import config from './config.js';

const ServicesButton = (props) => {
	const [smShow, setSmShow] = useState(false);
	const [lgShow, setLgShow] = useState(false);
	const stripePromise = loadStripe('pk_test_cKZ9ArATTFDXKwpXTE7SrSB800xveSplrK');

	const [one_month, setOneMonth] = useState(0);
	const [three_month, setThreeMonth] = useState(0);
	const [one_session, setOneSession] = useState(0);
	const [five_session, setFiveSession] = useState(0);

	let logged = localStorage.getItem("user_logged");
	const token = localStorage.getItem(`user-token`);

	let user_decoded_token = ''
	if (logged) {
		jwt.verify(token, 'herbs', function (err, decoded) {
			user_decoded_token = decoded.user_info
		});
	}



	axios.get(`http://localhost:${config.server_port}/api/stripe/get_charges_type/subscription-1-month`).then(res => {
		setOneMonth(res.data.amount)
	});

	axios.get(`http://localhost:${config.server_port}/api/stripe/get_charges_type/subscription-3-month`).then(res => {
		setThreeMonth(res.data.amount)
	});

	axios.get(`http://localhost:${config.server_port}/api/stripe/get_charges_type/consulting-1-session`).then(res => {
		setOneSession(res.data.amount)
	});
	axios.get(`http://localhost:${config.server_port}/api/stripe/get_charges_type/consulting-5-session`).then(res => {
		setFiveSession(res.data.amount)
	});

	const subscriptionButtons = () => {
		return (
			<>
				<StripePay amount={one_session} info={user_decoded_token} text={`One session, $${one_session/100} for 30 minutes`} /><br /><br />
				<StripePay amount={five_session} info={user_decoded_token} text={`Five sessions for $${five_session/100}`} />
			</>
		)
	}

	const consultingButtons = () => {
		return (
			<>
				<StripePay amount={one_month} info={user_decoded_token} text={`One month for $${one_month/100}`} /><br /><br />
				<StripePay amount={three_month} info={user_decoded_token} text={`Three months for $${three_month/100}`} />
			</>
		)
	}

	return (
		<>
			<a style={{ cursor: "pointer" }} onClick={() => setLgShow(true)}>{props.text}</a>
			<Modal
				size="lg"
				show={lgShow}
				onHide={() => setLgShow(false)}
				aria-labelledby="example-modal-sizes-title-lg contained-modal-title-vcenter"
				id="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="example-modal-sizes-title-lg">
						Services
        			</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Card>
						<Card.Header>Professional consulting</Card.Header>
						<Card.Body>
							<Card.Title>Consulting with Herbalist Dee</Card.Title>
							<Card.Text>
								Personal consulting with Herbalist Dee at scheduled time.
            				</Card.Text>
								{ (logged) ? subscriptionButtons() : subscriptionButtons }
						</Card.Body>
					</Card>
					<hr />
					<Card>
						<Card.Header>Premium services</Card.Header>
						<Card.Body>
							<Card.Title>Monthly subscription</Card.Title>
							<Card.Text>
								In order to unlock herbal recipes for all body symptoms and premium services.
            	</Card.Text>
							<div>
								{ (logged) ? consultingButtons() : <b>You need to login before purchasing.</b> }
							</div>
						</Card.Body>
					</Card>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default ServicesButton;
