import axios from 'axios';
import config from './config.js';
import React, { useState, useEffect } from 'react';

const PremiumCaption = () => {

	const [premium_caption, setPremium_caption] = useState('');

	axios.get(`/api/admin/get_premium_caption`).then(res => {
		setPremium_caption(res.data.content)
	}).catch(function (error) {
		setPremium_caption('Premium caption')
	});

	// render() {
	return (
		<>
			{premium_caption}
		</>
	);
	// }
}

export default PremiumCaption;
