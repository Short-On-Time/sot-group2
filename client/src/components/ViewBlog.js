import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from './config.js';
import ListGroup from 'react-bootstrap/ListGroup'
import PremiumWarning from './PremiumWarning'
import Error from './Error'
import BlogPost from './BlogPost'

const ViewBlog = (props) => {
	

	return (
		<div style={{ backgroundColor: "white" }} className="glossary-item">
			<BlogPost />
		</div>
	);

};
export default ViewBlog;
