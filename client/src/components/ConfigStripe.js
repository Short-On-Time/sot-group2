import React, { Fragment } from "react";
import StripeCheckout from "react-stripe-checkout";
import config from "./config";
import axios from "axios";

const stripeBtn = (props) => {
	const publishableKey = config.stripe.test.publishable;
	const onToken = token => {
		console.log(token);
		const body = {
			amount: props.amount,
			name: "me",
			email: "a@b.com",
			token: token
		};

		axios.post("/api/stripe/charges", body).then(response => {
			console.log(response);
			alert("Payment Success");

			axios.post(`localhost:${config.server_port}/api/users/user_premium`, { email: "q@a.com" }).then(response => {
				console.log(response);
			}).catch(error => {
				console.log("Setting user to premium error: ", error);
				alert("Setting user to premium error");
			});
		}).catch(error => {
			console.log("Payment Error: ", error);
			alert("Payment Error");
		});
	};

	return (
		<StripeCheckout
			label={props.text}				// Component button text
			name="ConsiderHerbs"				// Modal Header
			description="Upgrade to a premium account today."
			panelLabel={props.text}				// Submit button in modal
			amount={props.amount}				// Amount in cents $9.99
			token={onToken}
			stripeKey={publishableKey}
			image="https://considerherbs.com/media/filer_public_thumbnails/filer_public/b8/ca/b8cab25d-08ef-42e2-b9e1-0dbe812a4816/logo.jpg__2500x579_q85_subsampling-2.jpg" //Pop-in header image
			billingAddress={false}
		/>
	);
};

export default stripeBtn;
