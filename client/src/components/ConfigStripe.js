import React, { Fragment } from "react";
import StripeCheckout from "react-stripe-checkout";
import config from "./config";
import axios from "axios";
import logosmall from '../resources/logosmall.jpg';

const stripeBtn = (props) => {
	const publishableKey = config.stripe.test.publishable;
	const onToken = token => {
		console.log(token);
		const body = {
			amount: props.amount,
			name: "user",
			email: props.info.email,
			token: token
		};

		axios.post(`/api/stripe/charges`, body).then(response => {
			console.log(response);
			alert("Payment Success");

			axios.post(`/api/users/user_premium`, { email: props.info.email }).then(response_premium => {
				console.log(response_premium);
			}).catch(error_premium => {
				console.log("Setting user to premium error: ", error_premium);
				alert("Setting user to premium error.");
			});
		}).catch(error => {
			console.log("Payment Error: ", error);
			alert("Payment error, contact support.");
		});
	};

	return (
		<StripeCheckout
			label={props.text}				// Component button text
			name="ConsiderHerbs"				// Modal Header
			description="Upgrade to a premium account today."
			panelLabel={props.text}				// Submit button in modal
			amount={props.amount}				// Amount in cents
			token={onToken}
			stripeKey={publishableKey}
			image={logosmall} //Pop-in header image
			billingAddress={false}
		/>
	);
};

export default stripeBtn;
