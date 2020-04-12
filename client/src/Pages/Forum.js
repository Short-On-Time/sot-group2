import React from 'react';
import '../App.css';
import NavBar from '../components/NavBar';
import ViewGlossary from '../components/ViewGlossary';
import Footer from '../components/Footer';
import ViewForum from '../components/ViewForum';

const Forum = (props) => {
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

                <NavBar page="Forum"/>

                <div className=" inner-page overlay" style={{backgroundImage: "url('images/hero_2.jpg')"}} data-aos="fade" data-stellar-background-ratio="0.5">
                    <div className="row align-items-center justify-content-center">
                        <div className="text-center shadow p-3 mb-5 bg-white rounded" data-aos="fade">
                            <br />
                            <br />
                            <br />
                            <br />
                            <h1 className="text-uppercase">Forum</h1>
                            <ViewForum title = {props.match.params.title}/>
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

export default Forum;
