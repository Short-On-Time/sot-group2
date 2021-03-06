import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import config from './config.js';
import ViewRemedy from './ViewRemedy';
import Error from './Error';
import SearchOptions from '../components/SearchOptions';
import jwt from 'jsonwebtoken';

const ViewRemedies = (props) => {
	//TODO: find a way to eliminate setRemediesJSX
	const [remedies, setRemedies] = useState([]);
	const [filter, setFilter] = useState({});
	const [remediesJSX, setRemediesJSX] = useState([]);

	let logged = localStorage.getItem("user_logged");
	const token = localStorage.getItem("user-token");

	const UserEmail = () => {
		const token = localStorage.getItem("user-token")
		if (token) {
			let decoded = jwt.verify(token, 'herbs');
			console.log(decoded);
			return decoded.user_info.is_premium;
		} else {
			return false;
		}
	}

	let search = useLocation().search;
	const parseURLQuery = (query) => {
		if(!query){
			return {}
		}
		let queriesText = query.split('?')[1];
		let queries = queriesText.split('&')
		let filters = {free_only: false};
		queries.forEach( (q) => {
			let splitQ = q.split('=');
			let key = splitQ[0];
			splitQ = splitQ[1].split('+');
			let value = "";
			splitQ.forEach( word => {
				value += word + " ";
			});
			value = value.substring(0,value.length-1)

			switch(key) {
				case "body_part":
					filters.body_part = value;
					break;
				case "ailment_type":
					filters.ailment_type = value;
					break;
				case "search_term":
					filters.search_term = value;
					break;
				case "free_only":
					if(value === "on"){
						filters.free_only = true;
					}
					break;
			}
		})
		return filters;
	}

	//TODO fix this logic
	const matchesQuery = (remedy, filt) => {
		let matchesFilter = true;
		if(filt.body_part){
			if(remedy.body_part){
				matchesFilter = matchesFilter && remedy.body_part.toLowerCase() === filt.body_part.toLowerCase();
			}
			else{
				matchesFilter = false;
			}
		}
		if(filt.ailment_type){
			if(remedy.ailment_type){
				matchesFilter = matchesFilter && remedy.ailment_type.toLowerCase() === filt.ailment_type.toLowerCase();
			}
			else{
				matchesFilter = false;
			}
		}
		if(filt.search_term){
			if(remedy.name){
				matchesFilter = matchesFilter && remedy.name.toLowerCase().includes(filt.search_term.toLowerCase());
			}
			else{
				matchesFilter = false;
			}
		}
		if(filt.free_only){
			if(remedy.is_premium && !remedy.is_free_trial){
				matchesFilter = false;
			}
		}
		
		return matchesFilter;
	}

	const Remedy = (remedy, letter) => {

		const getFirstLetter = (str) => {
			return str.toUpperCase()[0];
		}

		if (getFirstLetter(remedy.name) === letter.letter || (!isNaN(getFirstLetter(remedy.name)) && letter.letter === "#")) {
			return (
				<div>
					<a href={"/remedies/" + remedy.name} className="text-secondary">{remedy.name}</a>
				</div>
			);
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
				return <div style={{ backgroundColor: "white" }} className="list-unstyled card-columns remedies">{remediesJSX}</div>;
			}
			else{
				return <div style={{ backgroundColor: "white" }} className="list-unstyled card-columns remedies"><p>No recipes match your request</p></div>;
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
			var is_premium = UserEmail();
			return <ViewRemedy name={props.name} is_premium={is_premium} className="glossary-item" />;
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
				setFilter(filters);

				const lastLetter = { letter: "" }
				if(search){
					setRemedies(remedies.filter( remedy => matchesQuery(remedy, filters)));
					setRemediesJSX(remedies.filter( remedy => matchesQuery(remedy, filters)).map(remedy => Remedy(remedy, lastLetter)));
					
				}
				else{	
					setRemedies(remedies);
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

	return (
		<div>
			<SearchOptions filter={filter} path={useLocation().pathname}/>
			<br />
			{getRemedy()}
		</div>
	);

};
export default ViewRemedies;
