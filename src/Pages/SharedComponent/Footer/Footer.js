import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsFillTelephoneForwardFill,
  BsMailbox,
} from "react-icons/bs";
import { VscArrowSmallRight } from "react-icons/vsc";

const Footer = () => {
  return (
    <footer className="bg_black pt-4">
      <div className="container text-light">
        <div className="row g-4 my-2">
          <section className="col-12 col-md-6 col-lg-2 mb-3">
            <h3>Logo</h3>
          </section>
          <section className="col-12 col-md-6 col-lg-4 mb-3">
            <h5 className="text-uppercase mb-3">address and contact info</h5>
            <article className="contact_info">
              <p className="text-capitalize mb-1">2000 jamalpur Sadar</p>
              <p className="text-capitalize">
                Jamalpur, Mymensingh, Bangladesh
              </p>
              <h6 className="text-capitalize mt-4 mb-1">
                <BsFillTelephoneForwardFill className="me-3 custom_icon" />
                +8801712942637
              </h6>
              <h6 className="">
                <BsMailbox className="me-3 custom_icon" />
                mdsagar333@gmail.com
              </h6>
            </article>
          </section>
          <section className="col-12 col-md-6 col-lg-3 mb-3">
            <h5 className="text-uppercase mb-3">support and help</h5>
            <div className="footer_nav">
              <nav className="nav flex-column">
                <a
                  className="nav-link ps-0 text-white"
                  aria-current="page"
                  href="#"
                >
                  <VscArrowSmallRight className="me-1 custom_icon" />
                  Home
                </a>
                <a className="nav-link ps-0 text-white" href="#">
                  <VscArrowSmallRight className="me-1 custom_icon" />
                  About us
                </a>
                <a className="nav-link ps-0 text-white" href="#">
                  <VscArrowSmallRight className="me-1 custom_icon" />
                  Tours
                </a>
                <a className="nav-link ps-0 text-white" href="#">
                  <VscArrowSmallRight className="me-1 custom_icon" />
                  Blogs
                </a>
              </nav>
            </div>
          </section>
          <section className="col-12 col-md-6 col-lg-3 mb-3">
            <h5 className="text-uppercase mb-3">follow with us</h5>
            <div className="follow_icons">
              <p className="text-capitalize">
                join our social media and explore all the amazing places
              </p>
              <section className="social_icons_wrapper mt-4">
                <a href="https://www.facebook.com/t" className="">
                  <BsFacebook className="mx-2 custom_icon"></BsFacebook>
                </a>
                <a href="https://www.instagram.com">
                  <BsInstagram className="mx-2 custom_icon"></BsInstagram>
                </a>
                <a href="https://twitter.com/">
                  <BsTwitter className="mx-2 custom_icon"></BsTwitter>
                </a>
              </section>
            </div>
          </section>
        </div>
      </div>
      <div className="footer_bottom_container bg-light p-2 fw-bold">
        <p className="text-center mb-0 f-small">
          Copyrights &copy; Mohammed Sagar Ali. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
