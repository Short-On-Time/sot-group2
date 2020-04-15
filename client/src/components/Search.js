import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SearchField = () => {
	const [searchText, setSearchText] = useState("");

	let url = window.location.href;
	url = url.split("/")[3];
	let page = url.split("?")[0];
	console.log(url)
	if (page === "products" || page === "glossary" || page === "remedies") {
		return (
			<Form action={url}>
				<Row>
					<Col>
						<Form.Control type="text" placeholder={`Search ${page}`} value={searchText} onChange={(val) => { setSearchText(val.target.value) }} name="search_term"/>
					</Col>
				</Row>
			</Form>
		);
	} else {
		return (
			''
		);
	}
}

export default SearchField;
