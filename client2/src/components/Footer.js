import React from 'react';

const Footer = () => {
  return(
    <footer className="site-footer bg-dark">
      <div className="container">



        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h3 className="footer-heading mb-4 text-white">About</h3>
            <p>Disclaimer: The information presented herein by Consider Herbs is intended for educational purposes only.
            These statements have not been evaluated by the FDA and are not intended to diagnose, cure, treat or prevent disease.
            Individual results may vary, and before using any supplements, it is always advisable to consult with your own healthcare provider.</p>
            <p><a href="/abour" className="btn btn-primary text-white px-4">Read More</a></p>
          </div>
          <div className="col-md-5 mb-4 mb-md-0 ml-auto">
            <div className="row mb-4">
              <div className="col-md-6">
                <h3 className="footer-heading mb-4 text-white">Quick Menu</h3>

                <ul className="list-unstyled">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/blog">Blog</a></li>
                  <li><a href="/contacts">Contacts</a></li>
                  <li><a href="/privacy">Privacy</a></li>
                </ul>
              </div>
              <div className="col-md-6">
                <h3 className="footer-heading mb-4 text-white">Free Templates</h3>
                <ul className="list-unstyled">
                  <li><a href="/">HTML5 / CSS3</a></li>
                  <li><a href="/">Clean Design</a></li>
                  <li><a href="/">Responsive</a></li>
                  <li><a href="/">Multi Purpose Template</a></li>
                </ul>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-md-12">
                <h3 className="footer-heading mb-4 text-white">Stay up to date</h3>
                <form action="#" className="d-flex footer-subscribe">
                  <input type="text" className="form-control rounded-0" placeholder="Enter your email"/>
                  <input type="submit" className="btn btn-primary rounded-0" value="Subscribe"/>
                </form>
              </div>
            </div>
          </div>


          <div className="col-md-2">


          <div className="row">
          <div className="col-md-12"><h3 className="footer-heading mb-4 text-white">Social Icons</h3></div>
            <div className="col-md-12">
              <p>
                <a href="https://www.facebook.com/pages/category/Health---Wellness-Website/Consider-Herbs-276933896476422/" className="pb-2 pr-2 pl-0"><span className="icon-facebook"></span></a>
                <a href="twitter.com" className="p-2"><span className="icon-twitter"></span></a>
                <a href="instagram.com" className="p-2"><span className="icon-instagram"></span></a>
                <a href="youtube.com" className="p-2"><span className="icon-youtube"></span></a>

                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5 mt-5 text-center">
          <div className="col-md-12">
            <p>
              Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Project made with <i className="icon-heart text-danger" aria-hidden="true"></i> by Short On Time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
