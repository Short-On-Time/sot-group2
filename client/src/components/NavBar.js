import React, { useState } from 'react';
import LoginButton from '../components/LoginButton';
import Search from '../components/Search';
import Logout from '../components/Logout';
import Contact from '../components/ContactButton';
import Services from '../components/ServicesButton';
import logo from '../resources/logo.jpg';
// import UserButton from './User';
import jwt from 'jsonwebtoken';

// make this JSX
const NavBar = (props) => {
	// menuItem should be the string of a navbar item

	const setActivePageHighlight = (menuItem) => {
		if (menuItem === props.page) {
			return "active"
		} else {
			return
		}
	}

	const [token, setToken] = useState(localStorage.getItem("user_logged"));
	const logout_user = () => setToken('true');
	let ulogged = localStorage.getItem("user_logged")

	const logged = () => {
		if (token) {
			return <Logout navBarLink={"true"} loginData={logout_user} />
			// admin logged
		} else {
			return <LoginButton />
		}
	}

	const isAdmin = () => {
		const token = localStorage.getItem('user-token')
		let is_admin;
		if (token) {
			jwt.verify(token, 'herbs', function (err, decoded) {
				console.log(decoded.user_info);
				is_admin = decoded.user_info.is_admin
			});

			if (is_admin) {
				return <a href="/admin">Admin Panel</a>
			}
		}
	}
	// console.log("==> user_logged: " + token);

	return (
		<div className="site-navbar-wrap js-site-navbar bg-white" style={{ position: "fixed", boxShadow: "0 5px 5px rgba(0,0,0,0.2)" }}>
			<div className="container">
				<div className="site-navbar">
					<div className="row align-items-center">
						<div className="col-2">
							<h2 className="mb-0 site-logo">
								<a href="/">
									<img src={logo} alt="logo" width="250" height="55" />
								</a>
							</h2>
						</div>
						<div className="col-10">
							<nav className="site-navigation text-right" role="navigation">
								<div className="container">
									<div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
										<a href="/" className="site-menu-toggle js-menu-toggle text-black">
											<span className="icon-menu h3"></span>
										</a>
									</div>

									<ul className="site-menu js-clone-nav d-none d-lg-block">
										<li className={setActivePageHighlight("Home")}><a href="/">Home</a></li>
										<li className={setActivePageHighlight("DidYouKnow")}><a href="didyouknow">Did You Know?</a></li>
										<li className={setActivePageHighlight("Glossary")}><a href="glossary">Glossary</a></li>
										<li className={setActivePageHighlight("Remedies")}><a href="remedies">Remedies</a></li>
										<li className={setActivePageHighlight("Forum")}><a href="forum">Forum</a></li>
										<li className={setActivePageHighlight("Services")}><Services text={"Services"}/></li>
										<li className={setActivePageHighlight("Contact")}><Contact /></li>
										<li>{isAdmin()}</li>
										<li>{logged()}</li>
										{/*<li className={setActivePageHighlight("User")}><UserButton /></li>*/}
									</ul>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
