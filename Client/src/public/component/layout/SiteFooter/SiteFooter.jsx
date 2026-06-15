import "./SiteFooter.css";
import { Link } from "react-router";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { IoLogoYoutube } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";

const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* LEFT */}
          <div className="footer-brand">
            <h3>MGTM Consultancy LLP</h3>

            <p>Research driven. Not sales driven.</p>
          </div>

          <div>
            <nav className="footer-nav">
              <Link to="/about">About</Link>

              <Link to="/terms-condition">Terms and Condition</Link>

              <Link to="/privacy-policy ">Privacy Policy</Link>

              <Link to="/refund-policy ">Refund Policy</Link>

              <Link to="/contact">Contact</Link>
            </nav>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <div className="footer-bottom-container">
            <p>
              © {new Date().getFullYear()} MGTM Consultancy LLP. All rights
              reserved.
            </p>
            <div className="social-links">
              <a
                href="https://www.instagram.com/mgtmconsultancyllp?igsh=NWFrMThveGNhbXZn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram size={37} color="white" />
              </a>

              <a
                href="https://www.youtube.com/@mgtmconsultancyllp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoYoutube size={36} color="white"/>
              </a>

              <a
                href="https://www.linkedin.com/company/mgtm-consultancy-llp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandLinkedinFilled size={35} color="white" />
              </a>

              <a
                href="https://x.com/MgtmConsultancy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareXTwitter size={30} color="white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
