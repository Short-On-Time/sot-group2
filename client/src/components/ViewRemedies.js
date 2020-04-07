import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from './config.js';
import ViewRemedy from './ViewRemedy'
import Error from './Error'

const ViewRemedies = (props) => {
	//TODO: find a way to eliminate setRemediesJSX
	const [remedies, setRemedies] = useState([]);
	const [remediesJSX, setRemediesJSX] = useState([]);

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
			return <div style={{ backgroundColor: "white" }} className="list-unstyled card-columns glossary">{remediesJSX}</div>;
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
		axios.get(`localhost:${config.server_port}/api/users/get_remedy`)
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

				const lastLetter = { letter: "" }
				setRemedies(remedies);
				setRemediesJSX(remedies.map(remedy => Remedy(remedy, lastLetter)));
			})
			.catch(function (e) {
				console.log(e.response)
				if (e) {
					setRemediesJSX(<Error error={e} returnURL="/" />)
					setRemedies([])
				}
			});
	}, []);

	return getRemedy();

};
export default ViewRemedies;
