import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div id="footerbody" className="d-flex flex-column">
      <div className="container-fluid flex-grow-1 flex-shrink-0">
        <div className="px-lg-5">
          <div className="row py-5">
            <div className="col-lg-12 mx-auto text-white text-center">
              <h4 className="display-4">Jewells </h4>
              <p className="lead mb-0">
              Adorn Yourself with Timeless Beauty
              </p>
              <p className="lead">
                Products of{" "}
                <a href="https://bootstrapious.com/snippets" className="text-white">
                  <u>jewellsFashion</u>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-white">
        <div className="container py-5">
          <div className="row py-4">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <p className="font-italic text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <ul className="list-inline mt-4">
                <li className="list-inline-item">
                   <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
                </li>
                <li className="list-inline-item">
                   <a href="#" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="social-icon">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="social-icon">
                    <i className="fab fa-google"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">Shop</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    For Women
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    For Men
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    Stores
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    Our Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    Login
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    Register
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    Wishlist
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    Our Products
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">Newsletter</h6>
              <p className="text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                itaque temporibus.
              </p>
              <div className="p-1 rounded border">
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    aria-describedby="button-addon1"
                    className="form-control border-0 shadow-0"
                  />
                  <div className="input-group-append">
                    <button
                      id="button-addon1"
                      type="submit"
                      className="btn btn-link"
                    >
                      <i className="fa fa-paper-plane" style={{color:"white"}}></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4" id="copyrightfooter">
          <div className="container text-center">
            <p className="text-muted mb-0 py-2">
              © 2023 Jewells All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
