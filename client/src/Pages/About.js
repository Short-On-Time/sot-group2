import React from 'react';
import '../App.css';
import NavBar from '../components/NavBar';

const AboutPage = () => {
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

				<NavBar page="About" />

				<div className="site-blocks-cover inner-page overlay" style={{ backgroundImage: "url('images/hero_2.jpg')" }} data-aos="fade" data-stellar-background-ratio="0.5">
					<div className="row align-items-center justify-content-center">
						<div className="col-md-5 text-center" data-aos="fade">
							<h1 className="text-uppercase">About Us</h1>
							<span className="caption d-block text-white">Free Templates by <a href="#">Colorlib</a></span>
						</div>
					</div>
				</div>

				<div className="slant-1"></div>

				<div className="site-half first-section">
					<div className="img-bg-1" style={{ backgroundImage: "url('images/img_4.jpg')" }} data-aos="fade" />
					<div className="container">
						<div className="row no-gutters align-items-stretch">
							<div className="col-lg-5 ml-lg-auto py-5">
								<span className="caption d-block mb-2 font-secondary font-weight-bold">Outstanding Services</span>
								<h2 className="site-section-heading text-uppercase font-secondary mb-5">Clean Design</h2>
								<p>Our intentions are to educate and to show you no matter where you are in your life's journey that you can and should connect with Mother Nature. These thoughtful actions will ensure the wellbeing of your mind, body, and spirit. You will realize the amazing plant allies nature has provided for us. You can incorporate them in your daily life in many forms such as herbs, oils, teas, food, and tinctures to name a few.</p>
								<p>We encourage you to make lifestyle changes one step at a time that put you back in control of your life and health, which is your most valuable gift. While rediscovering with the help of Mother Nature and living in sync with her, you can heal yourself.</p>
							</div>
						</div>
					</div>
				</div>

				<div className="site-half block">
					<div className="img-bg-1 right" style={{ backgroundImage: "url('images/img_5.jpg')" }} data-aos="fade" data-aos-delay="100"></div>
					<div className="container">
						<div className="row no-gutters align-items-stretch">
							<div className="col-lg-5 mr-lg-auto py-5">
								<span className="caption d-block mb-2 font-secondary font-weight-bold">Easy To Use Templates</span>
								<h2 className="site-section-heading text-uppercase font-secondary mb-5">Free HTML5 Templates</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquid eius facilis voluptatem eligendi magnam accusamus vel commodi asperiores sint rem reprehenderit nobis nesciunt veniam qui fugit doloremque numquam quod.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora distinctio ipsam nesciunt recusandae repellendus asperiores amet.</p>
							</div>
						</div>
					</div>
				</div>

				<div className="site-section bg-light">
					<div className="container">
						<div className="row mb-5">
							<div className="col-md-12" data-aos="fade">
								<h2 className="site-section-heading text-center text-uppercase">The Team</h2>
							</div>
						</div>
						<div className="row justify-content-center">
							<div className="col-md-6 text-center mb-5" data-aos="fade-up" data-aos-delay="100">
								<img src="images/person_2.jpg" alt="Image" className="img-fluid rounded w-50 mb-4" />
								<h2 className="h5 text-uppercase">Andrew Neel</h2>
								<span className="d-block mb-4">CEO, Co-Founder</span>
								<p className="lead">Expedita et aliquam fuga dicta amet ad laborum error recusandae, voluptatibus quam minima sed, saepe odio voluptatem. Sed unde hic, vitae fugiat.</p>
								<p>
									<a href="#" className="p-3"><span className="icon-facebook"></span></a>
									<a href="#" className="p-3"><span className="icon-twitter"></span></a>
									<a href="#" className="p-3"><span className="icon-instagram"></span></a>
									<a href="#" className="p-3"><span className="icon-linkedin"></span></a>
								</p>
							</div>
							<div className="col-md-6 text-center mb-5" data-aos="fade-up" data-aos-delay="200">
								<img src="images/person_3.jpg" alt="Image" className="img-fluid rounded w-50 mb-4" />
								<h2 className="h5 text-uppercase">Aron Knipes</h2>
								<span className="d-block mb-4">President, Co-Founder</span>
								<p className="lead">Expedita et aliquam fuga dicta amet ad laborum error recusandae, voluptatibus quam minima sed, saepe odio voluptatem. Sed unde hic, vitae fugiat.</p>
								<p>
									<a href="#" className="p-3"><span className="icon-facebook"></span></a>
									<a href="#" className="p-3"><span className="icon-twitter"></span></a>
									<a href="#" className="p-3"><span className="icon-instagram"></span></a>
									<a href="#" className="p-3"><span className="icon-linkedin"></span></a>
								</p>
							</div>
							<div className="col-md-6 text-center mb-5" data-aos="fade-up" data-aos-delay="300">
								<img src="images/person_4.jpg" alt="Image" className="img-fluid rounded w-50 mb-4" />
								<h2 className="h5 text-uppercase">Tim Watkins</h2>
								<span className="d-block mb-4">CEO, Co-Founder</span>
								<p className="lead">Expedita et aliquam fuga dicta amet ad laborum error recusandae, voluptatibus quam minima sed, saepe odio voluptatem. Sed unde hic, vitae fugiat.</p>
								<p>
									<a href="#" className="p-3"><span className="icon-facebook"></span></a>
									<a href="#" className="p-3"><span className="icon-twitter"></span></a>
									<a href="#" className="p-3"><span className="icon-instagram"></span></a>
									<a href="#" className="p-3"><span className="icon-linkedin"></span></a>
								</p>
							</div>
							<div className="col-md-6 text-center mb-5" data-aos="fade-up" data-aos-delay="400">
								<img src="images/person_1.jpg" alt="Image" className="img-fluid rounded w-50 mb-4" />
								<h2 className="h5 text-uppercase">Nicole Davis</h2>
								<span className="d-block mb-4">Product Manager</span>
								<p className="lead">Expedita et aliquam fuga dicta amet ad laborum error recusandae, voluptatibus quam minima sed, saepe odio voluptatem. Sed unde hic, vitae fugiat.</p>
								<p>
									<a href="#" className="p-3"><span className="icon-facebook"></span></a>
									<a href="#" className="p-3"><span className="icon-twitter"></span></a>
									<a href="#" className="p-3"><span className="icon-instagram"></span></a>
									<a href="#" className="p-3"><span className="icon-linkedin"></span></a>
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="site-section section-counter">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<p className="mb-5"><img src="images/img_1.jpg" alt="Image" className="img-fluid" /></p>
							</div>
							<div className="col-lg-5 ml-auto">
								<h2 className="site-section-heading mb-3 font-secondary text-uppercase">Free Template by Colorlib</h2>
								<p className="mb-5">Ullam ut modi cum voluptatibus atque nulla quidem maxime enim animi cupiditate, mollitia. </p>

								<div className="row">
									<div className="col-lg-6">
										<div className="counter">
											<span className="caption">Current Downloads</span>
											<span className="number" data-number="49020">0</span>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="counter">
											<span className="caption">Number of Templates</span>
											<span className="number" data-number="275">0</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="py-5 bg-primary">
					<div className="container">
						<div className="row align-items-center justify-content-center">
							<div className="col-md-6 text-center mb-3 mb-md-0">
								<h2 className="text-uppercase text-white mb-4" data-aos="fade-up">Try For Your Next Project</h2>
								<a href="#" className="btn btn-bg-primary font-secondary text-uppercase" data-aos="fade-up" data-aos-delay="100">Contact Us</a>
							</div>
						</div>
					</div>
				</div>

				<footer className="site-footer bg-dark">
					<div className="container">
						<div className="row">
							<div className="col-md-4 mb-4 mb-md-0">
								<h3 className="footer-heading mb-4 text-white">About</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quos rem ullam, placeat amet.</p>
								<p><a href="#" className="btn btn-primary text-white px-4">Read More</a></p>
							</div>
							<div className="col-md-5 mb-4 mb-md-0 ml-auto">
								<div className="row mb-4">
									<div className="col-md-6">
										<h3 className="footer-heading mb-4 text-white">Quick Menu</h3>
										<ul className="list-unstyled">
											<li><a href="#">Home</a></li>
											<li><a href="#">About</a></li>
											<li><a href="#">Blog</a></li>
											<li><a href="#">Contacts</a></li>
											<li><a href="#">Privacy</a></li>
										</ul>
									</div>
									<div className="col-md-6">
										<h3 className="footer-heading mb-4 text-white">Free Templates</h3>
										<ul className="list-unstyled">
											<li><a href="#">HTML5 / CSS3</a></li>
											<li><a href="#">Clean Design</a></li>
											<li><a href="#">Responsive</a></li>
											<li><a href="#">Multi Purpose Template</a></li>
										</ul>
									</div>
								</div>

								<div className="row mb-5">
									<div className="col-md-12">
										<h3 className="footer-heading mb-4 text-white">Stay up to date</h3>
										<form action="#" className="d-flex footer-subscribe">
											<input type="text" className="form-control rounded-0" placeholder="Enter your email" />
											<input type="submit" className="btn btn-primary rounded-0" value="Subscribe" />
										</form>
									</div>
								</div>
							</div>

							<div className="col-md-2">
								<div className="row">
									<div className="col-md-12"><h3 className="footer-heading mb-4 text-white">Social Icons</h3></div>
									<div className="col-md-12">
										<p>
											<a href="#" className="pb-2 pr-2 pl-0"><span className="icon-facebook"></span></a>
											<a href="#" className="p-2"><span className="icon-twitter"></span></a>
											<a href="#" className="p-2"><span className="icon-instagram"></span></a>
											<a href="#" className="p-2"><span className="icon-vimeo"></span></a>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row pt-5 mt-5 text-center">
							<div className="col-md-12">
								<p>
									Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a>
								</p>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
}

export default AboutPage;
