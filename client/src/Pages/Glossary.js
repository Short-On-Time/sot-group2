import React from 'react';
import '../App.css';
import NavBar from '../components/NavBar';
import ViewGlossary from '../components/ViewGlossary';
import Footer from '../components/Footer';
import Search from '../components/Search';

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

                <div className=" inner-page overlay" style={{backgroundImage: "url('images/Pictures/must-have-picture-2.jpg')", backgroundSize: "cover"}} data-aos="fade" data-stellar-background-ratio="0.5">
                    <div className="row align-items-center justify-content-center">
                        <div className="text-center shadow p-3 mb-5 bg-white rounded" data-aos="fade">
                            <br />
                            <br />
                            <br />
                            <br />
                            <h1 className="text-uppercase">Glossary</h1>
							<br />
							<Search />
							<br />
                            <ViewGlossary title = {props.match.params.title}/>
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

export default Glossary;
