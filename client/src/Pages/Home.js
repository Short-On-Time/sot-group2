// import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import jwt from 'jsonwebtoken'

import RemediesSelector from '../components/RemediesSelector'
// import Search from '../components/Search'
import NavBar from '../components/NavBar'
import Services from '../components/ServicesButton'
import Model2D from '../components/Model2D'
import Model3D from '../components/Model3D'
import Footer from '../components/Footer'
import PremiumCaption from '../components/PremiumCaption'
import WelcomeCaption from '../components/WelcomeCaption'
// import SocialEmbed from '../components/SocialEmbed'

import '../App.css';

const Home = () => {
	const [is3d, set3d] = useState(false)

	const isAdmin = () => {
		const token = localStorage.getItem('user-token')

		if (token) {
			jwt.verify(token, 'herbs', (_e, decoded) => {
				return decoded.user_info.is_admin
			});
		} else {
			return false
		}
	}

	return (
		<div className="App">
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

				<NavBar page="Home" />

				<div className="slide-one-item home-slider owl-carousel">
					<div className="site-blocks-cover inner-page overlay" style={{ backgroundImage: "url('images/hero_2.jpg')" }} data-aos="fade" data-stellar-background-ratio="0.5">
						<div className="container">
							<div className="row align-items-center justify-content-center">
								<div className="col-md-6 text-center" data-aos="fade">
									<h1 className="font-secondary  font-weight-bold text-uppercase"><WelcomeCaption /></h1>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="slant-1"></div>

				<div className="site-section first-section">
					<div className="container">
						<div className="row mb-5">
							<div className="col-md-12 text-center" data-aos="fade">
								<span className="caption d-block mb-2 font-secondary font-weight-bold">Outstanding Services</span>
								<h2 className="site-section-heading text-uppercase text-center font-secondary">Herb Medicine</h2>
							</div>
						</div>
						<div className="row border-responsive">
							<div className="col-md-6 col-lg-3 mb-4 mb-lg-0 border-right" data-aos="fade-up" data-aos-delay="">
								<div className="text-center">
									<span className="flaticon-money-bag-with-dollar-symbol display-4 d-block mb-3 text-primary"></span>
									<h3 className="text-uppercase h4 mb-3">Cheaper</h3>
									<p>Herb medicine is usually cheaper than traditional methods</p>
								</div>
							</div>
							<div className="col-md-6 col-lg-3 mb-4 mb-lg-0 border-right" data-aos="fade-up" data-aos-delay="100">
								<div className="text-center">
									<span className="flaticon-bar-chart display-4 d-block mb-3 text-primary"></span>
									<h3 className="text-uppercase h4 mb-3">Analytics</h3>
									<p>Proven results with less side effects</p>
								</div>
							</div>
							<div className="col-md-6 col-lg-3 mb-4 mb-lg-0 border-right" data-aos="fade-up" data-aos-delay="200">
								<div className="text-center">
									<span className="flaticon-medal display-4 d-block mb-3 text-primary"></span>
									<h3 className="text-uppercase h4 mb-3">5+ Years Experience</h3>
									<p>Get professional services from experts in the field</p>
								</div>
							</div>
							<div className="col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
								<div className="text-center">
									<span className="flaticon-box display-4 d-block mb-3 text-primary"></span>
									<h3 className="text-uppercase h4 mb-3">Quality content</h3>
									<p>Premium users have access to personal and curated content. <br /><a style={{ color: "forestgreen" }}><Services text={"Try it now!"} /></a></p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="site-half">
					<div className="img-bg-1 shadow p-3 mb-5 bg-white rounded" style={{ backgroundImage: "url('images/hero_2.jpg')" }} data-aos="fade"></div>
					<div className="container">
						<div className="row no-gutters align-items-stretch">
							<div className="col-lg-5 ml-lg-auto py-5 text-justify">
								<span className="caption d-block mb-2 font-secondary font-weight-bold">Welcome to my site</span>
								<h2 className="site-section-heading text-uppercase font-secondary mb-5">Information in a fun, inviting, and easily digestible format</h2>
								{/*<p>My intentions are to present the information in a fun, inviting, and easily digestible format&mdash;one that will reignite that natural, innate desire to return to a more holistic earth-based approach to our health and wellbeing. Do you remember your first introduction? Some people started with an oil, others with teas or fresh herb in a dish. I remember how a few sniffs of a peppermint oil suggested by a friend relieved a headache almost instantly. I was hooked, and the desire and passion was born to learn, share, and help people experience the joy of listening to our body and healing with nature.</p>*/}
								<RemediesSelector />
							</div>
						</div>
					</div>
				</div>

				<div className="site-half block">
					<div className="img-bg-1 right shadow p-3 mb-5 bg-white rounded" data-aos="fade">
						{
							is3d
								? <Model3D />
								: <Model2D />
						}
					</div>

					<div className="container">
						<div className="row no-gutters align-items-stretch">
							<div className="col-lg-5 mr-lg-auto py-5 text-justify">
								<span className="caption d-block mb-2 font-secondary font-weight-bold">
									Human Body{' '}
									{
										!!isAdmin() && (
											<ToggleButtonGroup type="radio" name="3d-controller" size="sm" defaultValue={is3d} onChange={is3d => set3d(is3d)}>
												<ToggleButton variant="outline-success" value={false}>2D</ToggleButton>
												<ToggleButton variant="outline-success" value={true}>3D</ToggleButton>
											</ToggleButtonGroup>
										)
									}
								</span>

								<h2 className="site-section-heading text-uppercase font-secondary mb-5">HOW (Herbs, Oils, Wellbeing)</h2>
								<p>You are looking at an amazing tool called <b>HOW</b> that was developed out of the desire and a passion to simplify one of the many paths to self-love and self-care through natural means using our plant friends. This is by no means the say-all-be-all. Many of us who are further along in our journey, let's not forget our humble beginnings. Do you remember the not knowing but having a need and wanting a healthier less side effect ridden solution, the apprehension and information overload that came with an internet search for user well-seasoned individual who remember these things called books on the subject that was hard to find or nonexistent.</p>
								<p>This path can and will lead to you discovering and respecting the world of natural healing in its many forms. So feel free to explore!</p>
							</div>
						</div>
					</div>
				</div>

				<div className="site-section">
					<div className="container">
						<div className="row">
							<div className="col-md-12 text-center">
								<span className="caption d-block mb-2 font-secondary font-weight-bold">Glossary</span>
								<h2 className="site-section-heading text-uppercase text-center font-secondary">Information available for Free users</h2>
							</div>
						</div>

						<div className="row">
							<div className="col-md-12 block-13 nav-direction-white">
								<div className="nonloop-block-13 owl-carousel">
									<div className="media-image">
										<img src="images/hero_2.jpg" alt="Image" className="img-fluid" />
										<div className="media-image-body text-justify">
											<h2 className="font-secondary text-uppercase">Garlic</h2>
											<p>Currently, garlic is used as a dietary supplement for many purposes, including high blood cholesterol and other diseases.</p>
											<p><a href="/glossary/Garlic" className="btn btn-primary text-white px-4">Learn More</a></p>
										</div>
									</div>

									<div className="media-image">
										<img src="images/hero_1.jpg" alt="Image" className="img-fluid" />
										<div className="media-image-body">
											<h2 className="font-secondary text-uppercase">Green Tea</h2>
											<p>To produce green tea, fresh leaves from the plant are lightly steamed.</p>
											<p><a href="/glossary/Green%20Tea" className="btn btn-primary text-white px-4">Learn More</a></p>
										</div>
									</div>

									<div className="media-image">
										<img src="images/hero_2.jpg" alt="Image" className="img-fluid" />
										<div className="media-image-body text-justify">
											<h2 className="font-secondary text-uppercase">Neroli Oil</h2>
											<p>Lowers inflammation &amp; pain, reduces stress and improve symptoms of menopause, decreases blood pressure levels.</p>
											<p><a href="/glossary/Neroli%20Oil" className="btn btn-primary text-white px-4">Learn More</a></p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="site-section section-counter">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<p className="mb-5"><img src="images/hero_2.jpg" alt="Image" className="img-fluid shadow p-3 mb-5 bg-white rounded" /></p>
							</div>

							<div className="col-lg-5 ml-auto">
								<h2 className="site-section-heading mb-3 font-secondary text-uppercase">What is premium?</h2>
								<p className="caption mb-5"><PremiumCaption /></p>
								{/*
									<div className="row">
										<div className="col-lg-6">
											<div className="counter">
												<span className="caption">Current products</span>
												<span className="number" data-number="207">0</span>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="counter">
												<span className="caption">Number of users</span>
												<span className="number" data-number="50">0</span>
											</div>
										</div>
									</div>
								*/}
							</div>
						</div>
					</div>
				</div>

				{/*
					<div className="site-section block-14 nav-direction-white">
						<div className="container">
							<div className="row mb-5">
								<div className="col-md-12">
									<h2 className="site-section-heading text-center text-uppercase">Testimonials</h2>
								</div>
							</div>

							<div className="nonloop-block-14 owl-carousel">
								<div className="d-block block-testimony mx-auto text-center">
									<div className="person w-25 mx-auto mb-4">
										<img src="images/person_1.jpg" alt="Image" className="img-fluid rounded-circle w-25 mx-auto" />
									</div>

									<div>
										<h2 className="h5 mb-4">Katie Johnson</h2>
										<blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate 	aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
									</div>
								</div>

								<div className="d-block block-testimony mx-auto text-center">
									<div className="person w-25 mx-auto mb-4">
										<img src="images/person_2.jpg" alt="Image" className="img-fluid rounded-circle w-25 mx-auto" />
									</div>

									<div>
										<h2 className="h5 mb-4">Jun Mars</h2>
										<blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
									</div>
								</div>

								<div className="d-block block-testimony mx-auto text-center">
									<div className="person w-25 mx-auto mb-4">
										<img src="images/person_3.jpg" alt="Image" className="img-fluid rounded-circle w-25 mx-auto" />
									</div>

									<div>
										<h2 className="h5 mb-4">Shane Holmes</h2>
										<blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
									</div>
								</div>

								<div className="d-block block-testimony mx-auto text-center">
									<div className="person w-25 mx-auto mb-4">
										<img src="images/person_4.jpg" alt="Image" className="img-fluid rounded-circle w-25 mx-auto" />
									</div>

									<div>
										<h2 className="h5 mb-4">Mark Johnson</h2>
										<blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
									</div>
								</div>
							</div>
						</div>
					</div>
				*/}

				<Footer />
			</div>
		</div>
	);
}

export default Home
