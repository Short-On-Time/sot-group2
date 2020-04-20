// import { Link } from 'react-router-dom'
import React, { Suspense, useRef, useState } from 'react'
import { Canvas } from 'react-three-fiber'
import ImageMapper from 'react-image-mapper'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import RemediesSelector from '../components/RemediesSelector'
// import Search from '../components/Search'
import NavBar from '../components/NavBar'
import Services from '../components/ServicesButton'
import CameraControls from '../components/CameraControls'
import Model from '../components/Model'
import Footer from '../components/Footer'
import PremiumCaption from '../components/PremiumCaption'
import WelcomeCaption from '../components/WelcomeCaption'
import SocialEmbed from '../components/SocialEmbed'

import '../App.css';

const Home = () => {
	const [is3d, set3d] = useState(false)
	const [hoveredArea, setHoveredArea] = useState(null)

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
						{is3d ? (
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
								<Container fluid>
									<Row>
										<Col>
											<ImageMapper
												src={'front.jpg'}
												map={{
													name: 'front',
													areas: [
														{
															name: 'eye-l',
															shape: 'poly',
															coords: [318, 196, 307, 188, 301, 185, 291, 186, 281, 193, 295, 200, 303, 200],
															fillColor: 'rbga(255, 255, 255, 0.2)'
														},

														{
															name: 'eye-r',
															shape: 'poly',
															coords: [347, 195, 356, 187, 367, 185, 383, 193, 370, 200, 360, 201, 351, 198],
															fillColor: 'rbga(255, 255, 255, 0.2)'
														},

														{
															name: 'neck',
															shape: 'poly',
															coords: [269, 358, 297, 367, 317, 377, 326, 387, 346, 385, 346, 380, 357, 371, 373, 364, 396, 358, 393, 353, 402, 350, 400, 344, 385, 336, 374, 295, 374, 289, 360, 300, 348, 307, 322, 309, 303, 301, 292, 289, 289, 289, 287, 317, 281, 340, 277, 354, 272, 357],
															fillColor: 'rbga(255, 255, 255, 0.2)'
														},

														{
															name: 'head',
															shape: 'poly',
															coords: [260, 372, 241, 370, 229, 359, 225, 353, 226, 339, 212, 331, 210, 318, 217, 314, 197, 291, 194, 277, 195, 266, 199, 252, 188, 234, 190, 222, 201, 212, 195, 196, 194, 177, 199, 166, 205, 162, 210, 143, 227, 103, 243, 81, 257, 71, 271, 60, 281, 52, 297, 43, 327, 37, 346, 37, 386, 49, 410, 68, 433, 97, 444, 118, 448, 120, 459, 145, 459, 165, 472, 190, 470, 203, 465, 211, 468, 236, 471, 245, 469, 256, 459, 268, 457, 282, 462, 293, 464, 311, 460, 321, 440, 342, 434, 351, 434, 357, 431, 358, 429, 351, 425, 353, 424, 358, 415, 365, 404, 365, 393, 353, 402, 350, 401, 344, 394, 341, 384, 334, 375, 300, 374, 288, 358, 301, 345, 308, 321, 309, 303, 300, 291, 288, 289, 289, 287, 309, 286, 324, 278, 351, 270, 358, 255, 366],
															fillColor: 'rbga(255, 255, 255, 0.2)'
														},

														{
															name: 'arm-l',
															shape: 'poly',
															coords: [194, 370, 163, 376, 138, 391, 127, 408, 113, 467, 113, 506, 111, 580, 106, 650, 95, 712, 92, 735, 87, 865, 86, 949, 124, 947, 143, 856, 162, 749, 173, 672, 182, 578, 189, 549, 187, 531, 191, 509, 210, 469, 207, 408, 197, 374, 196, 374],
															fillColor: 'rbga(255, 255, 255, 0.2)'
														},

														{
															name: 'arm-r',
															shape: 'poly',
															coords: [471, 370, 497, 375, 518, 383, 532, 396, 540, 412, 551, 462, 554, 492, 553, 516, 557, 632, 565, 678, 573, 730, 579, 842, 579, 944, 541, 946, 515, 807, 498, 710, 479, 563, 477, 550, 480, 528, 476, 511, 454, 467, 458, 405, 469, 372],
															fillColor: 'rbga(255, 255, 255, 0.2)'
														},

														{
															name: 'stomach',
															shape: 'poly',
															coords: [279, 719, 283, 686, 299, 653, 323, 642, 344, 642, 356, 646, 368, 655, 377, 668, 384, 707, 385, 725, 380, 795, 364, 819, 351, 832, 331, 838, 310, 829, 286, 806, 282, 786],
															fillColor: 'rbga(255, 255, 255, 0.2)'
														},

														{
															name: 'knee-l',
															shape: 'poly',
															coords: [320, 1394, 224, 1397, 227, 1372, 230, 1331, 230, 1302, 226, 1280, 324, 1275, 323, 1301, 317, 1338, 315, 1355, 321, 1384, 324, 1394],
															fillColor: 'rbga(255, 255, 255, 0.2)'
														},

														{
															name: 'knee-r',
															shape: 'poly',
															coords: [340, 1275, 441, 1274, 434, 1313, 437, 1349, 445, 1396, 342, 1396, 349, 1361, 351, 1345, 345, 1320, 341, 1293], fillColor: 'rbga(255, 255, 255, 0.2)'
														},

														{
															name: 'foot-l',
															shape: 'poly',
															coords: [255, 1654, 311, 1652, 316, 1667, 314, 1687, 314, 1731, 326, 1764, 326, 1784, 328, 1804, 323, 1816, 316, 1821, 303, 1822, 295, 1819, 294, 1816, 287, 1822, 273, 1821, 273, 1816, 265, 1819, 258, 1818, 254, 1811, 248, 1814, 245, 1812, 243, 1809, 241, 1806, 241, 1804, 241, 1800, 236, 1802, 231, 1802, 230, 1799, 230, 1790, 233, 1779, 237, 1764, 243, 1757, 254, 1707, 254, 1701, 252, 1693, 251, 1684, 254, 1668, 255, 1654, 256, 1654],
															fillColor: 'rbga(255, 255, 255, 0.2)'
														},

														{
															name: 'foot-r',
															shape: 'poly',
															coords: [353, 1652, 409, 1652, 409, 1675, 414, 1682, 409, 1704, 418, 1742, 433, 1777, 436, 1785, 434, 1802, 426, 1802, 423, 1808, 421, 1811, 416, 1814, 409, 1811, 407, 1817, 400, 1819, 393, 1817, 391, 1820, 386, 1823, 376, 1821, 371, 1816, 363, 1821, 353, 1822, 345, 1819, 339, 1817, 336, 1805, 338, 1794, 339, 1777, 338, 1762, 349, 1736, 350, 1687, 347, 1672, 350, 1658, 352, 1653],
															fillColor: 'rbga(255, 255, 255, 0.2)'
														},

														{
															name: 'leg-l',
															shape: 'poly',
															coords: [168, 843, 227, 893, 288, 955, 317, 976, 322, 1029, 325, 1134, 325, 1251, 325, 1294, 315, 1356, 327, 1404, 325, 1523, 311, 1648, 319, 1681, 313, 1684, 319, 1740, 326, 1770, 327, 1802, 327, 1815, 298, 1822, 295, 1814, 289, 1820, 283, 1820, 271, 1814, 261, 1818, 257, 1810, 258, 1808, 251, 1811, 245, 1811, 242, 1803, 246, 1790, 238, 1802, 233, 1798, 233, 1790, 236, 1776, 243, 1761, 255, 1703, 252, 1695, 253, 1681, 258, 1660, 255, 1643, 243, 1577, 235, 1556, 228, 1529, 223, 1421, 223, 1387, 232, 1337, 231, 1288, 211, 1213, 162, 1024, 148, 940, 160, 853, 167, 843],
															fillColor: 'rbga(255, 255, 255, 0.2)'
														},

														{
															name: 'leg-r',
															shape: 'poly',
															coords: [341, 1817, 338, 1804, 339, 1782, 339, 1765, 347, 1736, 350, 1686, 348, 1667, 355, 1649, 341, 1515, 340, 1431, 347, 1370, 349, 1346, 341, 1292, 340, 1097, 342, 1034, 349, 990, 347, 981, 402, 932, 417, 915, 497, 844, 500, 843, 510, 885, 514, 908, 515, 956, 512, 985, 508, 1012, 484, 1111, 461, 1194, 444, 1250, 434, 1316, 435, 1345, 439, 1362, 444, 1399, 444, 1455, 439, 1514, 431, 1560, 418, 1603, 409, 1646, 409, 1672, 413, 1684, 412, 1698, 409, 1703, 417, 1741, 429, 1768, 435, 1787, 433, 1802, 430, 1802, 426, 1799, 423, 1810, 419, 1814, 411, 1813, 409, 1812, 408, 1815, 407, 1817, 404, 1819, 400, 1819, 396, 1819, 394, 1816, 392, 1820, 388, 1822, 382, 1822, 377, 1821, 373, 1818, 371, 1815, 366, 1819, 359, 1821, 345, 1818],
															fillColor: 'rbga(255, 255, 255, 0.2)'
														}

														// add acne and ears (likely floating to the side)
													]
												}
												}
												width={159.4822}
												imgWidth={660}
												onClick={(area) => {
													(area.name.endsWith('-l') || area.name.endsWith('-r'))
														? document.location = `/remedies?body_part=${area.name.substring(0, area.name.length - 2)}`
														: document.location = `/remedies?body_part=${area.name}`
												}}
												onMouseEnter={(area) => setHoveredArea(area)}
												onMouseLeave={() => setHoveredArea(null)}
											/>
										</Col>

										<Col>
											<ImageMapper
												src={'side.jpg'}
												map={{
													name: 'side',
													areas: [
														{
															name: 'lips',
															shape: 'poly',
															coords: [187, 256, 177, 252, 165, 245, 163, 246, 163, 249, 167, 255, 165, 260, 165, 264, 166, 266, 176, 263, 183, 259, 184, 259, 185, 257],
															fillColor: 'rgba(255, 255, 255, 0.2)'
														},

														{
															name: 'mouth',
															shape: 'poly',
															coords: [169, 241, 277, 245, 280, 294, 210, 299, 180, 302, 173, 298, 169, 290, 171, 279, 171, 270, 168, 264, 164, 263, 165, 258, 167, 255, 163, 247, 167, 241],
															fillColor: 'rgba(255, 255, 255, 0.2)'
														},

														{
															name: 'throat',
															shape: 'poly',
															coords: [211, 298, 335, 297, 326, 371, 234, 373, 236, 364, 233, 350, 229, 327, 219, 306, 215, 302],
															fillColor: 'rgba(255, 255, 255, 0.2)'
														},

														{
															name: 'chest',
															shape: 'poly',
															coords: [215, 407, 206, 423, 195, 435, 181, 455, 155, 499, 145, 517, 134, 538, 137, 545, 144, 569, 160, 586, 177, 594, 190, 595, 210, 592, 223, 585, 233, 572, 235, 567, 237, 424],
															fillColor: 'rgba(255, 255, 255, 0.2)'
														},

														{
															name: 'wrist',
															shape: 'poly',
															coords: [260, 900, 309, 908, 294, 947, 292, 969, 249, 964, 255, 947, 257, 938],
															fillColor: 'rgba(255, 255, 255, 0.2)'
														},

														{
															name: 'finger',
															shape: 'poly',
															coords: [243, 1032, 254, 1033, 254, 1056, 252, 1069, 251, 1080, 248, 1086, 243, 1086, 241, 1077, 241, 1039, 242, 1033],
															fillColor: 'rgba(255, 255, 255, 0.2)'
														},

														{
															name: 'hand',
															shape: 'poly',
															coords: [248, 964, 292, 969, 291, 1015, 289, 1024, 287, 1038, 286, 1047, 283, 1055, 277, 1059, 275, 1058, 272, 1064, 267, 1069, 266, 1071, 265, 1071, 262, 1075, 263, 1076, 261, 1078, 259, 1079, 256, 1080, 255, 1080, 253, 1079, 254, 1075, 255, 1072, 255, 1069, 256, 1061, 256, 1039, 254, 1038, 253, 1039, 254, 1063, 252, 1069, 253, 1075, 251, 1080, 249, 1085, 243, 1086, 243, 1082, 241, 1080, 241, 1075, 241, 1040, 236, 1048, 230, 1050, 230, 1045, 231, 1038, 231, 1025, 233, 1000, 243, 977, 243, 976],
															fillColor: 'rgba(255, 255, 255, 0.2)'
														},

														{
															name: 'leg',
															shape: 'poly',
															coords: [197, 900, 222, 879, 242, 865, 266, 855, 292, 853, 327, 861, 364, 883, 389, 907, 378, 944, 356, 985, 353, 996, 340, 1194, 333, 1267, 332, 1295, 337, 1352, 362, 1451, 363, 1509, 355, 1580, 345, 1644, 338, 1712, 338, 1728, 345, 1752, 344, 1776, 335, 1784, 300, 1784, 290, 1781, 248, 1782, 223, 1785, 191, 1789, 173, 1787, 167, 1789, 158, 1790, 157, 1788, 149, 1788, 146, 1785, 137, 1787, 136, 1785, 127, 1786, 119, 1780, 114, 1769, 117, 1762, 116, 1766, 146, 1764, 198, 1746, 229, 1733, 237, 1726, 247, 1723, 260, 1697, 263, 1616, 250, 1452, 248, 1415, 230, 1328, 220, 1295, 207, 1130, 195, 1046, 193, 971],
															fillColor: 'rgba(255, 255, 255, 0.2)'
														},
													]
												}}
												width={123.5862}
												imgWidth={512}
												onClick={(area) => { document.location = `/remedies?body_part=${area.name}` }}
												onMouseEnter={(area) => setHoveredArea(area)}
												onMouseLeave={() => setHoveredArea(null)}
											/>
										</Col>

										<Col>
											<ImageMapper
												src={'back.jpg'}
												map={{
													name: 'back',
													areas: [
														{
															name: 'back',
															shape: 'poly',
															coords: [169, 597, 187, 607, 204, 611, 249, 615, 317, 616, 377, 613, 411, 609, 438, 598, 431, 621, 416, 667, 412, 690, 412, 717, 425, 751, 447, 795, 459, 821, 453, 828, 412, 843, 359, 851, 299, 853, 244, 851, 197, 841, 157, 829, 148, 823, 170, 771, 182, 751, 193, 724, 195, 683],
															fillColor: 'rgba(255, 255, 255, 0.2)'
														}
													]
												}}
												width={146.3860}
												imgWidth={596}
												onClick={(area) => { document.location = `/remedies?body_part=${area.name}` }}
												onMouseEnter={(area) => setHoveredArea(area)}
												onMouseLeave={() => setHoveredArea(null)}
											/>

											{
												hoveredArea &&
												<span
													style={{
														position: 'relative',
														color: '#fff',
														padding: '10px',
														background: 'rgba(0, 0, 0, 0.8)',
														transform: 'translate3d(-50%, -50%, 0)',
														borderRadius: '5px',
														pointerEvents: 'none',
														zIndex: '1000',
														top: `${hoveredArea.center[1]}px`,
														left: `${hoveredArea.center[0]}px`
													}}
												>
													{hoveredArea && hoveredArea.name}
												</span>
											}
										</Col>
									</Row>
								</Container>
							)
						}

						<Container fluid>
							<Row>
								<Col>
									<ToggleButtonGroup type="radio" name="3d-controller" size="sm" defaultValue={is3d} onChange={is3d => set3d(is3d)}>
										<ToggleButton variant="outline-success" value={false}>2D</ToggleButton>
										<ToggleButton variant="outline-success" value={true}>3D</ToggleButton>
									</ToggleButtonGroup>
								</Col>
							</Row>
						</Container>
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
