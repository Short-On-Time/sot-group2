import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

const SearchField = () => {
	const [searchText, setSearchText] = useState("");

	let url = window.location.href;
	url = url.split("/")[3];
	let page = url.split("?")[0];
	console.log(url)
	if (page === "products" || page === "glossary" || page === "remedies") {
		return (
			<Form action={url} id="search-bar">
				<Form.Control type="text" placeholder={`Search ${page}`} value={searchText} onChange={(val) => { setSearchText(val.target.value) }} name="search_term"/>
			</Form>
		);
	} else {
		return (
			''
		);
	}
}

export default SearchField;
