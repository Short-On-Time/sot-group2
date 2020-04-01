import React, {useState, useEffect} from 'react';
import LoginButton from '../components/LoginButton';
import Search from '../components/Search';
import Logout from '../components/Logout';
import Contact from '../components/ContactButton';
import Services from '../components/ServicesButton';
//import logo from '../logo.svg';
import logo from '../resources/logo.jpg';
import UserButton from './User';

const NavBar = (props) => {
    //menuItem should be the string of a navbar item
    const setActivePageHighlight = (menuItem) => {
        if (menuItem === props.page) {
            return "active"
        } else {
            return
        }
    }
    const [token, setToken] = useState(localStorage.getItem("user_logged"));
    const logout_user = () => setToken('true');
    let ulogged = localStorage.getItem("user_logged")

    const logged = () => {
      if (token) {
        return <Logout loginData={logout_user} />
      } else {
        return <LoginButton />
      }
    }
    // console.log("==> user_logged: " + token);

    return(
      <div className="site-navbar-wrap js-site-navbar bg-white" style={{position: "fixed", boxShadow: "0 5px 5px rgba(0,0,0,0.2)"}}>
        <div className="container">
          <div className="site-navbar bg-light">
            <div className="row align-items-center">
              <div className="col-2">
                <h2 className="mb-0 site-logo">
                  <a href="/"><img src={logo} alt="logo" width="250" height="55"/></a>
                </h2>
              </div>
              <div className="col-10">
                <nav className="site-navigation text-right" role="navigation">
                  <div className="container">
                    <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                      <a href="/" className="site-menu-toggle js-menu-toggle text-black">
                        <span className="icon-menu h3"></span>
                      </a>
                    </div>

                    <ul className="site-menu js-clone-nav d-none d-lg-block">
                      <li className={setActivePageHighlight("Home")}><a href="/">Home</a></li>
                      <li className={"has-children " + setActivePageHighlight("About")}>
                        <a href="about">About</a>
                        <ul className="dropdown arrow-top">
                          <li><a href="testimonials.html">Testimonials</a></li>
                          <li><a href="products" className={setActivePageHighlight("Products")}>Products</a></li>
                          <li><a href="gallery.html">Gallery</a></li>
                          <li><a href="faq.html">Forum</a></li>
                          <li><a href="why-choose-us.html">Why Choose Us</a></li>
                        </ul>
                      </li>
                      <li className={setActivePageHighlight("Glossary")}><a href="glossary">Glossary</a></li>
                      <li className={setActivePageHighlight("Services")}><Services/></li>
                      <li className={setActivePageHighlight("Contact")}><Contact /></li>
                      <li>{ logged() }</li>
                      <li><Search /></li>
                      <li className={setActivePageHighlight("User")}><UserButton /></li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default NavBar;
