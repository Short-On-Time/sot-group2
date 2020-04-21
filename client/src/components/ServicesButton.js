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
	const stripePromise = loadStripe(config.stripe.test.publishable);

	const [one_month, setOneMonth] = useState(2000);
	const [three_month, setThreeMonth] = useState(2000);
	const [one_session, setOneSession] = useState(2000);
	const [five_session, setFiveSession] = useState(2000);

	const UserInfo = () => {
		const token = localStorage.getItem("user-token")
		if (token) {
			let decoded = jwt.verify(token, 'herbs');
			return decoded.user_info
		}
	}

	let logged = localStorage.getItem("user_logged");


	const getAmount = () => {
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
	}

	if (logged) getAmount()

	const subscriptionButtons = () => {
		return (
			<>
				<StripePay amount={one_session} info={UserInfo()} text={`One session, $${one_session/100} for 30 minutes`} /><br /><br />
				<StripePay amount={five_session} info={UserInfo()} text={`Five sessions for $${five_session/100}`} />
			</>
		)
	}

	const consultingButtons = () => {
		return (
			<>
				<StripePay amount={one_month} info={UserInfo()} text={`One month for $${one_month/100}`} /><br /><br />
				<StripePay amount={three_month} info={UserInfo()} text={`Three months for $${three_month/100}`} />
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
								{ (logged) ? subscriptionButtons() : <b>You need to login before purchasing.</b> }
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
