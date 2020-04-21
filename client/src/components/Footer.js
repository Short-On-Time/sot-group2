import React from 'react';
import Newsletter from './NewsletterEmailField'
import DisclaimerCaption from './DisclaimerCaption'

const Footer = () => {
	return (
		<footer className="site-footer bg-dark">
			<div className="container">
				<div className="row">
					<div className="col-md-4 mb-4 mb-md-0 text-justify">
						<h3 className="footer-heading mb-4 text-white">Disclaimer</h3>
						<p><DisclaimerCaption /></p>
					</div>
					<div className="col-md-5 mb-4 mb-md-0 ml-auto">
						<div className="row mb-4">
							<div className="col-md-6 text-justify">
								<h3 className="footer-heading mb-4 text-white">Quick Menu</h3>

								<ul className="list-unstyled">
									<li><a href="/">Home</a></li>
									<li><a href="/didyouknow">Did You Know?</a></li>
									<li><a href="/glossary">Glossary</a></li>
									<li><a href="/remedies">Remedies</a></li>
									<li><a href="/forum">Forum</a></li>
								</ul>
							</div>
						</div>

						<Newsletter />
					</div>

					<div className="col-md-2">
						<div className="row">
							<div className="col-md-12"><h3 className="footer-heading mb-4 text-white">Facebook</h3></div>
							<div className="col-md-12">
								<p>
									<a href="https://www.facebook.com/pages/category/Health---Wellness-Website/Consider-Herbs-276933896476422/" className="pb-2 pr-2 pl-0"><span className="icon-facebook"></span></a>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row pt-5 mt-5 text-center">
					<div className="col-md-12">
						<p>
							Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Project made with <i className="icon-heart text-danger" aria-hidden="true"></i> by Short On Time.
            			</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
