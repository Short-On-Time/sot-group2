import React from "react";
import "../App.css";
import Nav from "react-bootstrap/Nav";
import { MdExitToApp } from "react-icons/md";

class Logout extends React.Component {
	state = {
		nav: false
	}

	logout = () => {
		localStorage.clear();
		// localStorage.setItem("user_logged", false)
		this.setState({ nav: true })
	}

	render() {
		const { nav } = this.state;

		if (this.props.loginData) {
			console.log("LOGIN DATA ====");
			this.props.loginData()
		}

		if (nav) {
			return <Nav.Link className="admin-link text-light" href="/" onClick={this.logout}>Logout  <MdExitToApp size={20} /></Nav.Link>
		} else {
			return <Nav.Link className="admin-link text-light" href="/" onClick={this.logout}>Logout  <MdExitToApp size={20} /></Nav.Link>
		}

	}
}

export default Logout;
