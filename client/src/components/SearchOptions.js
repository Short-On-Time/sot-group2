import React from 'react';
import Badge from 'react-bootstrap/Badge';
import { TiDeleteOutline } from "react-icons/ti";

const SearchOptions = (props) => {
	const filter = props.filter;

	const matchOptions = (filt) => {
		let optionsJSX = [];
		if(filt.body_part){
			optionsJSX.push(<Badge variant="success" key="body_part">Body Part: {filt.body_part}</Badge>, " ");
		}
		if(filt.ailment_type){
			optionsJSX.push(<Badge variant="success" key="ailment_type">Ailment: {filt.ailment_type}</Badge>, " ");
		}
		if(filt.free_only){
			optionsJSX.push(<Badge variant="success" key="free_only">Only Free Items</Badge>, " ");
		}
		if(filt.search_term){
			optionsJSX.push(<Badge variant="success" key="search_term">Search Term: {filt.search_term}</Badge>, " ");
		}
		optionsJSX.push(<Badge variant="secondary" key="clear_filters"> <a href={props.path} style={{color: "white"}}>⨉ Clear Filters </a></Badge>)
		return optionsJSX;
	}

	if(JSON.stringify(filter) != '{}'){
		return(<p><b>Search Options: {matchOptions(filter)}</b></p>);
	}
	else{
		return '';
	}
	
}

export default SearchOptions;
