import React from 'react';
import '../App.css';
import NavBar from '../components/NavBar';
import ViewGlossary from '../components/ViewGlossary';
import ViewGlossaryItem from '../components/ViewGlossaryItem';
import Footer from '../components/Footer';
import { Switch, Route, useParams } from 'react-router-dom';

const Glossary = (props) => {
    
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

                <NavBar page="Glossary"/>

                <div className="site-blocks-cover inner-page overlay" style={{backgroundImage: "url('images/hero_2.jpg')"}} data-aos="fade" data-stellar-background-ratio="0.5">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-5 text-center" data-aos="fade">
                            <h1 className="text-uppercase">Glossary</h1>
                            <ViewGlossary title = {props.match.params.title} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>

    );
}

export default Glossary;
