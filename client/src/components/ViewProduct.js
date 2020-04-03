import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import config from './config.js';

const ViewProduct = (props) => {
	const [product, setProduct] = useState([]);

	const createProduct = (product) => {
		const JSX = [
			<h3>{product.name}</h3>,
			<h6>{product.body_part}</h6>,
			<p className="text-primary"><b>Ailment: </b> {product.ailment}</p>,
			<p className="text-primary"><b>Description: </b> {product.description}</p>
		];

		return JSX;
	}

	useEffect(() => {
		axios.get(`/api/users/get_product/${props.name}`)
			.then(res => {
				const product = res.data;

				setProduct(product);
			})
	}, []);

	return (
		<div style={{ backgroundColor: "white" }} className="glossary-item">
			{createProduct(product)}
		</div>
	);

};
export default ViewProduct;
