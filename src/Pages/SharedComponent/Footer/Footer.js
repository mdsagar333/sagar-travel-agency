import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <Footer>
      <div className="container">
        <div className="row">
          <section className="col-12 col-md-6 col-lg-3">
            <h3>Logo</h3>
          </section>
          <section className="col-12 col-md-6 col-lg-3">
            <h3>address and contact info</h3>
            <article className="contact_info">
              <p>2000 jamalpur Sadar</p>
              <p>Jamalpur, Mymensingh, Bangladesh</p>
              <h5>phone: +8801712942637</h5>
            </article>
          </section>
          <section className="col-12 col-md-6 col-lg-3">
            <h3>support and help</h3>
            <div className="footer_nav">
              <nav className="nav flex-column">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                <a className="nav-link" href="#">
                  About us
                </a>
                <a className="nav-link" href="#">
                  Tours
                </a>
                <a className="nav-link" href="#">
                  Blogs
                </a>
              </nav>
            </div>
          </section>
          <section className="col-12 col-md-6 col-lg-3">
            <h3>follow with us</h3>
            <div className="follow_icons">
              <p>join our social media and explore all the amazing places</p>
              <section className="social_icons_wrapper">
                <a href="">
                  <BsFacebook></BsFacebook>
                </a>
                <a href="">
                  <BsInstagram></BsInstagram>{" "}
                </a>
                <a href="">
                  <BsTwitter></BsTwitter>
                </a>
              </section>
            </div>
          </section>
        </div>
      </div>
    </Footer>
  );
};

export default Footer;
