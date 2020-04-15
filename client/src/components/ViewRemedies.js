import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import config from './config.js';
import ViewRemedy from './ViewRemedy'
import Error from './Error'
import { filter } from 'async';


const ViewRemedies = (props) => {
	//TODO: find a way to eliminate setRemediesJSX
	const [remedies, setRemedies] = useState([]);
	const [remediesJSX, setRemediesJSX] = useState([]);

	let search = useLocation().search;
	const parseURLQuery = (query) => {
		if(!query){
			return {}
		}
		let queriesText = query.split('?')[1];
		let queries = queriesText.split('&')
		let filters = {};
		queries.forEach( (q) => {
			let splitQ = q.split('=');
			let key = splitQ[0];
			splitQ = splitQ[1].split('+');
			let value = "";
			splitQ.forEach( word => {
				value += word + " ";
			});
			value = value.substring(0,value.length-1)

			if(value){
				if(key == "body_part"){
					filters.body_part = value;
				}
				if(key == "ailment"){
					filters.ailment = value;
				}
			}
		})
		return filters;
	}

	//TODO fix this logic
	const matchesQuery = (remedy, filter) => {
		let matchesFilter = true;
		if(filter.body_part){
			if(remedy.body_part){
				matchesFilter = matchesFilter && remedy.body_part.toLowerCase() === filter.body_part.toLowerCase();
			}
			else{
				matchesFilter = false;
			}
		}
		if(filter.ailment){
			if(remedy.ailment){
				
				matchesFilter = matchesFilter && remedy.ailment.toLowerCase() === filter.ailment.toLowerCase();
				console.log(filter.ailment.toLowerCase())
			}
			else{
				matchesFilter = false;
			}
		}
		console.log(matchesFilter)
		return matchesFilter;
	}

	const Remedy = (remedy, letter) => {

		const getFirstLetter = (str) => {
			return str.toUpperCase()[0];
		}

		if (getFirstLetter(remedy.name) === letter.letter || (!isNaN(getFirstLetter(remedy.name)) && letter.letter === "#")) {
			return (<div><a href={"/remedies/" + remedy.name} className="text-secondary">{remedy.name}</a></div>);
		}
		else if (!isNaN(getFirstLetter(remedy.name)) && letter.letter !== "#") {
			letter.letter = "#";
			return (
				<div className="glossary-letter card">
					<h5 id={letter.letter}>{letter.letter}</h5>
					<a href={"/remedies/" + remedy.name} className="text-secondary">{remedy.name}</a>
				</div>
			);
		}
		else if (!(getFirstLetter(remedy.name) === letter.letter)) {
			letter.letter = getFirstLetter(remedy.name);
			return (
				<div className="glossary-letter card">
					<h5 id={letter.letter}>{letter.letter}</h5>
					<a href={"/remedies/" + remedy.name} className="text-secondary">{remedy.name}</a>
				</div>
			);
		}
	}


	const doesContain = (name, remedies) => {
		let contains = false;
		remedies.forEach((remedy) => {
			if (remedy.name === name) {
				contains = true;
			}
		});
		return contains;
	}

	const getRemedy = () => {
		if (!props.name) {
			if(remedies.length){
				return <div style={{ backgroundColor: "white" }} className="list-unstyled card-columns glossary">{remediesJSX}</div>;
			}
			else{
				return <div style={{ backgroundColor: "white" }} className="list-unstyled card-columns glossary"><p>No recipes match your request</p></div>;
			}
		}
		else if (remediesJSX.size === 0) {
			return <p>Loading Remedies...</p>
		}
		else if (doesContain(props.name, remedies) === false && remedies.length > 0) {
			document.location = "/remedies"
			return (<div><h3>Remedy not found</h3><p>Redirecting..</p></div>);
		}
		else {
			return <ViewRemedy name={props.name} className="glossary-item" />;
		}
	}

	useEffect(() => {
		axios.get(`http://localhost:${config.server_port}/api/users/get_remedy_preview`)
			.then(res => {
				const remedies = res.data;

				const compare = (a, b) => {
					if (a.name.toLowerCase() < b.name.toLowerCase()) {
						return -1
					}
					if (a.name.toLowerCase() > b.name.toLowerCase()) {
						return 1
					}
					return 0;
				}

				remedies.sort(compare);

				
				const filters = parseURLQuery(search);

				const lastLetter = { letter: "" }
				if(search){
					setRemedies(remedies.filter( remedy => matchesQuery(remedy, filters)));
					setRemediesJSX(remedies.filter( remedy => matchesQuery(remedy, filters)).map(remedy => Remedy(remedy, lastLetter)));
					
				}
				else{	
					setRemedies(remedies, filters);
					setRemediesJSX(remedies.map(remedy => Remedy(remedy, lastLetter)));
				}
			})
			.catch(function (e) {
				console.log(e)
				if (e) {
					setRemediesJSX(<Error error={e} returnURL="/" />)
					setRemedies([])
				}
			});
	}, []);

	return getRemedy();

};
export default ViewRemedies;
