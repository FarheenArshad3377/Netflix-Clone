import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-light pt-5 pb-3">
      <div className="container">
        {/* Social Icons */}
        <div className="d-flex justify-content-center mb-4">
          <a href="#" className="text-light mx-3 fs-4"><FaFacebookF /></a>
          <a href="#" className="text-light mx-3 fs-4"><FaInstagram /></a>
          <a href="#" className="text-light mx-3 fs-4"><FaYoutube /></a>
        </div>

        {/* Footer Links */}
        <div className="row text-center text-md-start">
          <div className="col-6 col-md-3 mb-3">
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Audio Description</a></li>
              <li><a href="#" className="text-light text-decoration-none">Investor Relations</a></li>
              <li><a href="#" className="text-light text-decoration-none">Legal Notices</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Help Center</a></li>
              <li><a href="#" className="text-light text-decoration-none">Jobs</a></li>
              <li><a href="#" className="text-light text-decoration-none">Cookie Preferences</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Gift Cards</a></li>
              <li><a href="#" className="text-light text-decoration-none">Terms of Use</a></li>
              <li><a href="#" className="text-light text-decoration-none">Corporate Information</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Media Center</a></li>
              <li><a href="#" className="text-light text-decoration-none">Privacy</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4">
          <small>© 1997-2026 Netflix, Inc.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
