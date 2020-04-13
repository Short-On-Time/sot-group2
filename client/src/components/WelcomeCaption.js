import axios from 'axios';
import config from './config.js';
import React, { useState, useEffect } from 'react';

const WelcomeCaption = () => {

	const [welcome_caption, setWelcome_caption] = useState('');

	axios.get(`http://localhost:${config.server_port}/api/admin/get_welcome_caption`).then(res => {
		setWelcome_caption(res.data.content)
	}).catch(function (error) {
		setWelcome_caption('You can change this text')
	});

	return (
		<>
			{welcome_caption}
		</>
	);
}

export default WelcomeCaption;
