// import { Link } from 'react-router-dom'
import React, { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas } from 'react-three-fiber'
import ImageMapper from 'react-image-mapper'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Spinner from 'react-bootstrap/Spinner'

import RemediesSelector from '../components/RemediesSelector'
// import Search from '../components/Search'
import NavBar from '../components/NavBar'
import Services from '../components/ServicesButton'
import CameraControls from '../components/CameraControls'
import Model from '../components/Model'
import Footer from '../components/Footer'
import PremiumCaption from '../components/PremiumCaption'
import WelcomeCaption from '../components/WelcomeCaption'

import '../App.css';

const Home = () => {
	const [is3d, set3d] = useState(false)
	const [isLoading, setLoading] = useState(false)
	const [orientation, setOrientation] = useState('front')
	const [hoveredArea, setHoveredArea] = useState(null)

	// update to receive request from ImageMapper onLoad()
	// update to work with some sort of loading from 3D model---maybe from Suspense?
	useEffect(() => {
		if (isLoading) {
			new Promise((resolve) => setTimeout(resolve, 2000)).then(() => setLoading(false))
		}
	}, [isLoading])

	const mouse = useRef({ x: 0, y: 0 })

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
						{(is3d) ? (
							<Canvas
								pixelRatio={window.devicePixelRatio}
								camera={{ position: [0, -3, 18] }}
								shadowMap
								onMouseMove={e => (mouse.current = { x: e.clientX, y: e.clientY })}
							>
								<CameraControls />	{/* get rid of CameraControls and emplace all the camera controls here */}
								<fog attach="fog" args={[0xdfdfdf, 35, 65]} />
								<hemisphereLight skyColor={'black'} groundColor={0xffffff} intensity={0.68} position={[0, 50, 0]} />
								<directionalLight
									position={[-8, 12, 8]}
									shadow-camera-left={-8.25}
									shadow-camera-bottom={-8.25}
									shadow-camera-right={8.25}
									shadow-camera-top={8.25}
									shadow-camera-near={0.1}
									shadow-camera-far={1500}
									castShadow
								/>
								<mesh position={[0, -3, -10]}>
									<circleBufferGeometry attach="geometry" args={[8, 64]} />
									<meshBasicMaterial attach="material" color="lightpink" />
								</mesh>
								<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -11, 0]} receiveShadow>
									<planeGeometry attach="geometry" args={[5000, 5000, 1, 1]} />
									<meshLambertMaterial attach="material" color="#9b9b9b" transparent opacity={0.2} />
								</mesh>
								<Suspense fallback={null}>
									<Model mouse={mouse} position={[0, -11, 0]} scale={[7, 7, 7]} />
								</Suspense>
							</Canvas>
						) : (
								<div>
									<ImageMapper
										src={`${orientation}.jpg`}
										map={
											(orientation === 'front') ? {
												name: orientation,
												areas: [
													{ name: 'eye-l', shape: 'poly', coords: [318, 196, 307, 188, 301, 185, 291, 186, 281, 193, 295, 200, 303, 200], fillColor: 'rbga(255, 255, 255, 0.2)' },
													{ name: 'eye-r', shape: 'poly', coords: [347, 195, 356, 187, 367, 185, 383, 193, 370, 200, 360, 201, 351, 198], fillColor: 'rbga(255, 255, 255, 0.2)' },
													{ name: 'neck', shape: 'poly', coords: [269, 358, 297, 367, 317, 377, 326, 387, 346, 385, 346, 380, 357, 371, 373, 364, 396, 358, 393, 353, 402, 350, 400, 344, 385, 336, 374, 295, 374, 289, 360, 300, 348, 307, 322, 309, 303, 301, 292, 289, 289, 289, 287, 317, 281, 340, 277, 354, 272, 357], fillColor: 'rbga(255, 255, 255, 0.2)' },
													{ name: 'head', shape: 'poly', coords: [260, 372, 241, 370, 229, 359, 225, 353, 226, 339, 212, 331, 210, 318, 217, 314, 197, 291, 194, 277, 195, 266, 199, 252, 188, 234, 190, 222, 201, 212, 195, 196, 194, 177, 199, 166, 205, 162, 210, 143, 227, 103, 243, 81, 257, 71, 271, 60, 281, 52, 297, 43, 327, 37, 346, 37, 386, 49, 410, 68, 433, 97, 444, 118, 448, 120, 459, 145, 459, 165, 472, 190, 470, 203, 465, 211, 468, 236, 471, 245, 469, 256, 459, 268, 457, 282, 462, 293, 464, 311, 460, 321, 440, 342, 434, 351, 434, 357, 431, 358, 429, 351, 425, 353, 424, 358, 415, 365, 404, 365, 393, 353, 402, 350, 401, 344, 394, 341, 384, 334, 375, 300, 374, 288, 358, 301, 345, 308, 321, 309, 303, 300, 291, 288, 289, 289, 287, 309, 286, 324, 278, 351, 270, 358, 255, 366], fillColor: 'rbga(255, 255, 255, 0.2)' },
													{ name: 'arm-l', shape: 'poly', coords: [194, 370, 163, 376, 138, 391, 127, 408, 113, 467, 113, 506, 111, 580, 106, 650, 95, 712, 92, 735, 87, 865, 86, 949, 124, 947, 143, 856, 162, 749, 173, 672, 182, 578, 189, 549, 187, 531, 191, 509, 210, 469, 207, 408, 197, 374, 196, 374], fillColor: 'rbga(255, 255, 255, 0.2)' },
													{ name: 'arm-r', shape: 'poly', coords: [471, 370, 497, 375, 518, 383, 532, 396, 540, 412, 551, 462, 554, 492, 553, 516, 557, 632, 565, 678, 573, 730, 579, 842, 579, 944, 541, 946, 515, 807, 498, 710, 479, 563, 477, 550, 480, 528, 476, 511, 454, 467, 458, 405, 469, 372], fillColor: 'rbga(255, 255, 255, 0.2)' },
													{ name: 'stomach', shape: 'poly', coords: [279, 719, 283, 686, 299, 653, 323, 642, 344, 642, 356, 646, 368, 655, 377, 668, 384, 707, 385, 725, 380, 795, 364, 819, 351, 832, 331, 838, 310, 829, 286, 806, 282, 786], fillColor: 'rbga(255, 255, 255, 0.2)' },
													{ name: 'knee-l', shape: 'poly', coords: [320, 1394, 224, 1397, 227, 1372, 230, 1331, 230, 1302, 226, 1280, 324, 1275, 323, 1301, 317, 1338, 315, 1355, 321, 1384, 324, 1394], fillColor: 'rbga(255, 255, 255, 0.2)' },
													{ name: 'knee-r', shape: 'poly', coords: [340, 1275, 441, 1274, 434, 1313, 437, 1349, 445, 1396, 342, 1396, 349, 1361, 351, 1345, 345, 1320, 341, 1293], fillColor: 'rbga(255, 255, 255, 0.2)' },
													{ name: 'foot-l', shape: 'poly', coords: [255, 1654, 311, 1652, 316, 1667, 314, 1687, 314, 1731, 326, 1764, 326, 1784, 328, 1804, 323, 1816, 316, 1821, 303, 1822, 295, 1819, 294, 1816, 287, 1822, 273, 1821, 273, 1816, 265, 1819, 258, 1818, 254, 1811, 248, 1814, 245, 1812, 243, 1809, 241, 1806, 241, 1804, 241, 1800, 236, 1802, 231, 1802, 230, 1799, 230, 1790, 233, 1779, 237, 1764, 243, 1757, 254, 1707, 254, 1701, 252, 1693, 251, 1684, 254, 1668, 255, 1654, 256, 1654], fillColor: 'rbga(255, 255, 255, 0.2)' },
													{ name: 'foot-r', shape: 'poly', coords: [353, 1652, 409, 1652, 409, 1675, 414, 1682, 409, 1704, 418, 1742, 433, 1777, 436, 1785, 434, 1802, 426, 1802, 423, 1808, 421, 1811, 416, 1814, 409, 1811, 407, 1817, 400, 1819, 393, 1817, 391, 1820, 386, 1823, 376, 1821, 371, 1816, 363, 1821, 353, 1822, 345, 1819, 339, 1817, 336, 1805, 338, 1794, 339, 1777, 338, 1762, 349, 1736, 350, 1687, 347, 1672, 350, 1658, 352, 1653], fillColor: 'rbga(255, 255, 255, 0.2)' },
													{ name: 'leg-l', shape: 'poly', coords: [168, 843, 227, 893, 288, 955, 317, 976, 322, 1029, 325, 1134, 325, 1251, 325, 1294, 315, 1356, 327, 1404, 325, 1523, 311, 1648, 319, 1681, 313, 1684, 319, 1740, 326, 1770, 327, 1802, 327, 1815, 298, 1822, 295, 1814, 289, 1820, 283, 1820, 271, 1814, 261, 1818, 257, 1810, 258, 1808, 251, 1811, 245, 1811, 242, 1803, 246, 1790, 238, 1802, 233, 1798, 233, 1790, 236, 1776, 243, 1761, 255, 1703, 252, 1695, 253, 1681, 258, 1660, 255, 1643, 243, 1577, 235, 1556, 228, 1529, 223, 1421, 223, 1387, 232, 1337, 231, 1288, 211, 1213, 162, 1024, 148, 940, 160, 853, 167, 843], fillColor: 'rbga(255, 255, 255, 0.2)' },
													{ name: 'leg-r', shape: 'poly', coords: [341, 1817, 338, 1804, 339, 1782, 339, 1765, 347, 1736, 350, 1686, 348, 1667, 355, 1649, 341, 1515, 340, 1431, 347, 1370, 349, 1346, 341, 1292, 340, 1097, 342, 1034, 349, 990, 347, 981, 402, 932, 417, 915, 497, 844, 500, 843, 510, 885, 514, 908, 515, 956, 512, 985, 508, 1012, 484, 1111, 461, 1194, 444, 1250, 434, 1316, 435, 1345, 439, 1362, 444, 1399, 444, 1455, 439, 1514, 431, 1560, 418, 1603, 409, 1646, 409, 1672, 413, 1684, 412, 1698, 409, 1703, 417, 1741, 429, 1768, 435, 1787, 433, 1802, 430, 1802, 426, 1799, 423, 1810, 419, 1814, 411, 1813, 409, 1812, 408, 1815, 407, 1817, 404, 1819, 400, 1819, 396, 1819, 394, 1816, 392, 1820, 388, 1822, 382, 1822, 377, 1821, 373, 1818, 371, 1815, 366, 1819, 359, 1821, 345, 1818], fillColor: 'rbga(255, 255, 255, 0.2)' }
													// add acne and ears (likely floating to the side)
												]
											} : (orientation === 'side') ? {
												name: orientation,
												areas: [
													{ name: '1', shape: 'poly', coords: [25, 33, 27, 300, 128, 240, 128, 94], fillColor: 'blue' },
													{ name: '2', shape: 'poly', coords: [219, 118, 220, 210, 283, 210, 284, 119], fillColor: 'pink' },
													{ name: '3', shape: 'poly', coords: [381, 241, 383, 94, 462, 53, 457, 282], fillColor: 'yellow' },
													{ name: '4', shape: 'poly', coords: [245, 285, 290, 285, 274, 239, 249, 238], fillColor: 'red' }
												]
											} : (orientation === 'back') && {
												name: orientation,
												areas: [
													{ name: '1', shape: 'poly', coords: [25, 33, 27, 300, 128, 240, 128, 94], fillColor: 'blue' },
													{ name: '2', shape: 'poly', coords: [219, 118, 220, 210, 283, 210, 284, 119], fillColor: 'pink' },
													{ name: '3', shape: 'poly', coords: [381, 241, 383, 94, 462, 53, 457, 282], fillColor: 'yellow' },
													{ name: '4', shape: 'poly', coords: [245, 285, 290, 285, 274, 239, 249, 238], fillColor: 'red' }
												]
											}}
										width={
											(orientation === 'front') ? (
												100
											) : (orientation === 'side') ? (
												100
											) : (orientation === 'back') && (
												100
											)
										}
										imgWidth={
											(orientation === 'front') ? (
												660
											) : (orientation === 'side') ? (
												512
											) : (orientation === 'back') && 596
										}
										onLoad={() => { }}
										onClick={() => { }} 							// redirect to remedy with certain name (omit -l and -r if exists)
										onMouseEnter={(area) => setHoveredArea(area)}
										onMouseLeave={() => setHoveredArea(null)}
										onMouseMove={() => { }}							// probably unneeded
										onImageClick={() => { }}						// figure out how this is different from onClick
										onImageMouseMove={() => { }}					// also probably unneeded
									/>

									<ToggleButtonGroup type="radio" name="orientation-controller" size="sm" vertical defaultValue={'front'}
										onChange={(orientation) => setOrientation(orientation)}
									>
										<ToggleButton variant="outline-success" value={'front'}>Front</ToggleButton>
										<ToggleButton variant="outline-success" value={'side'}>Side</ToggleButton>
										<ToggleButton variant="outline-success" value={'back'}>Back</ToggleButton>
									</ToggleButtonGroup>
								</div>
							)
						}

						<br />

						<ToggleButtonGroup type="radio" name="3d-controller" size="sm" defaultValue={is3d}
							onChange={is3d => set3d(is3d)}
						>
							<ToggleButton variant="outline-success" value={false} disabled={isLoading && !is3d}
								onClick={(!isLoading && is3d) && (() => setLoading(true))}
							>
								{(isLoading && !is3d) ? (
									<Spinner
										as="span"
										animation="border"
										size="sm"
										role="status"
										aria-hidden="true"
									>
										<span className="sr-only">Loading...</span>
									</Spinner>
								) : '2D'}
							</ToggleButton>

							<ToggleButton
								variant="outline-success"
								value={true}
								disabled={isLoading && is3d}
								onClick={(!isLoading && !is3d) && (() => setLoading(true))}
							>
								{(isLoading && is3d) ? (
									<Spinner
										as="span"
										animation="border"
										size="sm"
										role="status"
										aria-hidden="true"
									>
										<span className="sr-only">Loading...</span>
									</Spinner>
								) : '3D'}
							</ToggleButton>
						</ToggleButtonGroup>
					</div>

					<div className="container">
						<div className="row no-gutters align-items-stretch">
							<div className="col-lg-5 mr-lg-auto py-5 text-justify">
								<span className="caption d-block mb-2 font-secondary font-weight-bold">Human Body</span>
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
									<blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
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

export default Home;
