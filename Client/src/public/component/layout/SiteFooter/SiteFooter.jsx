import "./SiteFooter.css";

import { Link } from "react-router";

const SiteFooter = () => {
  return (
    <footer className="site-footer">

      <div className="container">

        <div className="footer-top">

          {/* LEFT */}
          <div className="footer-brand">

            <h3>
              MGTM Consultancy LLP
            </h3>

            <p>
              Research driven. Not sales driven.
            </p>

          </div>

          {/* RIGHT */}
          <nav className="footer-nav">

            <Link to="/about">
              About
            </Link>

            {/* <Link to="/services">
              Services
            </Link> */}

            {/* <Link to="/partnerships">
              Partnerships
            </Link> */}

            {/* <Link to="/faq">
              FAQ
            </Link> */}

            {/* <Link to="/blog">
              Blogs
            </Link> */}

            <Link to="/terms-condition">
              Terms and Condition
            </Link>

             <Link to="/privacy-policy ">
              Privacy Policy
            </Link>

            <Link to="/refund-policy ">
              Refund Policy
            </Link>

            <Link to="/contact">
              Contact
            </Link>

          </nav>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} MGTM Consultancy LLP.
            All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default SiteFooter;