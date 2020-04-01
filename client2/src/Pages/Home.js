import React from 'react';
import ViewProducts from '../components/ViewProducts';
import Search from '../components/Search';
import NavBar from '../components/NavBar';
// import { Link } from 'react-router';
import { Link } from 'react-router-dom';
import '../App.css';

import Footer from '../components/Footer';

const Home = () => {

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
        <div className="site-blocks-cover inner-page overlay" style={{backgroundImage: "url('images/hero_2.jpg')"}} data-aos="fade" data-stellar-background-ratio="0.5">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-6 text-center" data-aos="fade">
                <h1 className="font-secondary  font-weight-bold text-uppercase">Welcome to Consider Herbs</h1>
                <a href="/about" style={{backgroundColor: "black"}}>ROUTING IN REACT2</a><br/>
                <Link to="/about">ROUTING IN REACT</Link>
                <ViewProducts/>
              </div>
            </div>
          </div>
        </div>

        <div className="site-blocks-cover inner-page overlay" style={{backgroundImage: "url('images/hero_1.jpg')"}} data-aos="fade" data-stellar-background-ratio="0.5">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7 text-center" data-aos="fade">
                <h1 className="font-secondary font-weight-bold text-uppercase">Benefits of Herbs Treatment</h1>
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
                <p>Premium users have access to personal and curated content. <br/><a href="#" style={{color: "forestgreen"}}>Try it now!</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>


    <div className="site-half">
      <div className="img-bg-1" style={{backgroundImage: "url('images/img_4.jpg')"}} data-aos="fade"></div>
      <div className="container">
        <div className="row no-gutters align-items-stretch">
          <div className="col-lg-5 ml-lg-auto py-5">
            <span className="caption d-block mb-2 font-secondary font-weight-bold">Outstanding Services</span>
            <h2 className="site-section-heading text-uppercase font-secondary mb-5">Clean Design</h2>
            <p>Welcome to my site. My intentions are to present the information in a fun, inviting, and easily digestible format&mdash;one that will reignite that natural, innate desire to return to a more holistic earth-based approach to our health and wellbeing. Do you remember your first introduction? Some people started with an oil, others with teas or fresh herb in a dish. I remember how a few sniffs of a peppermint oil suggested by a friend relieved a headache almost instantly. I was hooked, and the desire and passion was born to learn, share, and help people experience the joy of listening to our body and healing with nature.</p>
            <p>HUMAN BODY</p>
            <p>You are looking at an amazing tool called HOW (Herbs, Oils, Wellbeing) that was developed out of the desire and a passion to simplify one of the many paths to self-love and self-care through natural means using our plant friends. This is by no means the say-all-be-all. Many of us who are further along in our journey, let's not forget our humble beginnings. Do you remember the not knowing but having a need and wanting a healthier less side effect ridden solution, the apprehension and information overload that came with an internet search for user well-seasoned individual who remember these things called books on the subject that was hard to find or nonexistent.</p>
            <p>This path can and will lead to you discovering and respecting the world of natural healing in its many forms. So feel free to explore!</p>
            <p>Whole Body Wellness</p>
          </div>
        </div>
      </div>
    </div>

    <div className="site-half block">
      <div className="img-bg-1 right" style={{backgroundImage: "url('images/img_5.jpg')"}} data-aos="fade"></div>
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


    <div className="site-section ">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <span className="caption d-block mb-2 font-secondary font-weight-bold">Products &amp; Services</span>
              <h2 className="site-section-heading text-uppercase text-center font-secondary">Share Before You Download</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 block-13 nav-direction-white">
              <div className="nonloop-block-13 owl-carousel">
                <div className="media-image">
                  <img src="images/img_1.jpg" alt="Image" className="img-fluid"/>
                  <div className="media-image-body">
                    <h2 className="font-secondary text-uppercase">Pixel Perfect</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                    <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p>
                  </div>
                </div>
                <div className="media-image">
                  <img src="images/img_2.jpg" alt="Image" className="img-fluid"/>
                  <div className="media-image-body">
                    <h2 className="font-secondary text-uppercase">Template Under CCA 3.0 Unported</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                    <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p>
                  </div>
                </div>
                <div className="media-image">
                  <img src="images/img_3.jpg" alt="Image" className="img-fluid"/>
                  <div className="media-image-body">
                    <h2 className="font-secondary text-uppercase">Useful Web Templates</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                    <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p>
                  </div>
                </div>
                <div className="media-image">
                  <img src="images/img_1.jpg" alt="Image" className="img-fluid"/>
                  <div className="media-image-body">
                    <h2 className="font-secondary text-uppercase">HTML5 / CSS3</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                    <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p>
                  </div>
                </div>
                <div className="media-image">
                  <img src="images/img_4.jpg" alt="Image" className="img-fluid"/>
                  <div className="media-image-body">
                    <h2 className="font-secondary text-uppercase">Bootstrap 4</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                    <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p>
                  </div>
                </div>
                <div className="media-image">
                  <img src="images/img_5.jpg" alt="Image" className="img-fluid"/>
                  <div className="media-image-body">
                    <h2 className="font-secondary text-uppercase">SCSS</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                    <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p>
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
              <p className="mb-5"><img src="images/img_1.jpg" alt="Image" className="img-fluid"/></p>
            </div>
            <div className="col-lg-5 ml-auto">
              <h2 className="site-section-heading mb-3 font-secondary text-uppercase">Free Templates By Colorlib</h2>
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
                  <img src="images/person_1.jpg" alt="Image" className="img-fluid rounded-circle w-25 mx-auto"/>
                </div>
                <div>
                  <h2 className="h5 mb-4">Katie Johnson</h2>
                  <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
                </div>
              </div>

              <div className="d-block block-testimony mx-auto text-center">
                <div className="person w-25 mx-auto mb-4">
                  <img src="images/person_2.jpg" alt="Image" className="img-fluid rounded-circle w-25 mx-auto"/>
                </div>
                <div>
                  <h2 className="h5 mb-4">Jun Mars</h2>
                  <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
                </div>
              </div>

              <div className="d-block block-testimony mx-auto text-center">
                <div className="person w-25 mx-auto mb-4">
                  <img src="images/person_3.jpg" alt="Image" className="img-fluid rounded-circle w-25 mx-auto"/>
                </div>
                <div>
                  <h2 className="h5 mb-4">Shane Holmes</h2>
                  <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
                </div>
              </div>

              <div className="d-block block-testimony mx-auto text-center">
                <div className="person w-25 mx-auto mb-4">
                  <img src="images/person_4.jpg" alt="Image" className="img-fluid rounded-circle w-25 mx-auto"/>
                </div>
                <div>
                  <h2 className="h5 mb-4">Mark Johnson</h2>
                  <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
                </div>
              </div>

          </div>

        </div>

      </div>

      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12" data-aos="fade">
              <h2 className="site-section-heading text-center text-uppercase">Recent Blog Posts</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="100">
              <div className="media-image">
                <a href="single.html"><img src="images/img_1.jpg" alt="Image" className="img-fluid"/></a>
                <div className="media-image-body">
                  <h2 className="font-secondary text-uppercase"><a href="single.html">Where Do You Learn HTML & CSS in 2019?</a></h2>
                  <span className="d-block mb-3">By James &mdash; Jan. 20, 2019</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                  <p><a href="#">Read More</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="200">
              <div className="media-image">
                <a href="single.html"><img src="images/img_2.jpg" alt="Image" className="img-fluid"/></a>
                <div className="media-image-body">
                  <h2 className="font-secondary text-uppercase"><a href="single.html">Where Do You Learn HTML & CSS in 2019?</a></h2>
                  <span className="d-block mb-3">By James &mdash; Jan. 20, 2019</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                  <p><a href="#">Read More</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="300">
              <div className="media-image">
                <a href="single.html"><img src="images/img_3.jpg" alt="Image" className="img-fluid"/></a>
                <div className="media-image-body">
                  <h2 className="font-secondary text-uppercase"><a href="single.html">Where Do You Learn HTML & CSS in 2019?</a></h2>
                  <span className="d-block mb-3">By James &mdash; Jan. 20, 2019</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                  <p><a href="#">Read More</a></p>
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

      <Footer />


    </div>
    </div>
  );
}

export default Home;
