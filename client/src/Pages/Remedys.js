import React from 'react';
import '../App.css';
import NavBar from '../components/NavBar';
import ViewRemedys from '../components/ViewRemedys';
import Footer from '../components/Footer';

const Remedys = (props) => {
	return (
		<div className="AboutPage">
			<div id="overlayer"></div>
			<div className="loader">
				<div className="spinner-border text-primary" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			</div>
			<div className="site-wrap">
				<div className="site-mobile-menu">
					<div className="site-mobile-menu-header">
						<div className="site-mobile-menu-close mt-3">
							<span className="icon-close2 js-menu-toggle"></span>
						</div>
					</div>
					<div className="site-mobile-menu-body"></div>
				</div>

				<NavBar page="Remedys" />

				<div className=" inner-page overlay" style={{ backgroundImage: "url('images/hero_2.jpg')" }} data-aos="fade" data-stellar-background-ratio="0.5">
					<div className="row align-items-center justify-content-center">
						<div className="text-center" data-aos="fade">
							<br />
							<br />
							<br />
							<br />
							<h1 className="text-uppercase">Remedys</h1>
							<ViewRemedys name={props.match.params.name} />
							<br />
							<br />
							<br />
							<br />
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default Remedys;
