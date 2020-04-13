import axios from 'axios';
import config from './config.js';
import React, { useState, useEffect } from 'react';

const DisclaimerCaption = () => {

	const [disclaimer_caption, setDisclaimer_caption] = useState('');

	axios.get(`http://localhost:${config.server_port}/api/admin/get_disclaimer_caption`).then(res => {
		setDisclaimer_caption(res.data.content)
	}).catch(function (error) {
		setDisclaimer_caption('(You can change this text) The information presented herein by Consider Herbs is intended for educational purposes only. These statements have not been evaluated by the FDA and are not intended to diagnose, cure, treat or prevent disease. Individual results may vary, and before using any supplements, it is always advisable to consult with your own healthcare provider.')
	});

	return (
		<>
			{disclaimer_caption}
		</>
	);
}

export default DisclaimerCaption;
