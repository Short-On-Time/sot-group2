import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import config from './config.js';
import ViewRemedy from './ViewRemedy'
import Error from './Error'

const ViewRemedys = (props) => {
	//TODO: find a way to eliminate setRemedysJSX
	const [remedys, setRemedys] = useState([]);
	const [remedysJSX, setRemedysJSX] = useState([]);

	const Remedy = (remedy, letter) => {
		const getFirstLetter = (str) => {
			return str.toUpperCase()[0];
		}


		if (getFirstLetter(remedy.name) === letter.letter || (!isNaN(getFirstLetter(remedy.name)) && letter.letter === "#")) {
			return (<div><a href={"/remedys/" + remedy.name} className="text-secondary">{remedy.name}</a></div>);
		}
		else if (!isNaN(getFirstLetter(remedy.name)) && letter.letter !== "#") {
			letter.letter = "#";
			return (
				<div className="glossary-letter card">
					<h5 id={letter.letter}>{letter.letter}</h5>
					<a href={"/remedys/" + remedy.name} className="text-secondary">{remedy.name}</a>
				</div>
			);
		}
		else if (!(getFirstLetter(remedy.name) === letter.letter)) {
			letter.letter = getFirstLetter(remedy.name);
			return (
				<div className="glossary-letter card">
					<h5 id={letter.letter}>{letter.letter}</h5>
					<a href={"/remedys/" + remedy.name} className="text-secondary">{remedy.name}</a>
				</div>
			);
		}
	}


	const doesContain = (name, remedys) => {
		let contains = false;
		remedys.forEach((remedy) => {
			if (remedy.name === name) {
				contains = true;
			}
		});
		return contains;
	}

	const getRemedy = () => {
		if (!props.name) {
			return <div style={{ backgroundColor: "white" }} className="list-unstyled card-columns glossary">{remedysJSX}</div>;
		}
		else if (remedysJSX.size === 0) {
			return <p>Loading Remedys...</p>
		}
		else if (doesContain(props.name, remedys) === false && remedys.length > 0) {
			document.location = "/remedys"
			return (<div><h3>Remedy not found</h3><p>Redirecting..</p></div>);
		}
		else {
			return <ViewRemedy name={props.name} className="glossary-item" />;
		}
	}

	useEffect(() => {
		axios.get(`/api/users/get_remedy`)
			.then(res => {
				const remedys = res.data;

				const compare = (a, b) => {
					if (a.name.toLowerCase() < b.name.toLowerCase()) {
						return -1
					}
					if (a.name.toLowerCase() > b.name.toLowerCase()) {
						return 1
					}
					return 0;
				}

				remedys.sort(compare);

				const lastLetter = { letter: "" }
				setRemedys(remedys);
				setRemedysJSX(remedys.map(remedy => Remedy(remedy, lastLetter)));
			})
			.catch(function (e) {
				console.log(e.response)
				if (e) {
					setRemedysJSX(<Error error={e} returnURL="/" />)
					setRemedys([])
				}
			});
	}, []);

	return getRemedy();

};
export default ViewRemedys;
