import React from 'react';
import NavBar from '../components/NavBar';
import '../App.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  
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


      <NavBar page="PageNotFound"/>

      <div className="py-5 bg-primary">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 text-center mb-3 mb-md-0">
                <br />
                <br />
                <br />
              <h2 className="text-uppercase text-white mb-4" data-aos="fade-up">Page Not found</h2>
              <a href="/" className="btn btn-primary text-uppercase" >Go to the home page</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />


    </div>
    </div>
  );
}

export default PageNotFound;
