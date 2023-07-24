import { BsFillPinMapFill, BsPhoneVibrate } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-dark py-5 mt-5">
      <div className="container">
        <div className="row text-white g-4">
          <div className="col-md-6 col-lg-3">
            <a href="index.html" className="text-decoration-none text-white">
              Gabriela
            </a>
            <p className="text-white mt-3">
              Unlocking the Beauty Within: Experience the Magic of Our
              Hairstylists' Expert Hands! From Classic Cuts to Trendsetting
              Transformations, We Craft Hair Masterpieces Tailored Just for You.
              Step into a World of Innovation and Imagination
            </p>
          </div>

          <div className="col-md-6 col-lg-6">
            <h5 className="fw-light mb-3">Contact Us</h5>
            <div className="d-flex justify-content-start align-items-start my-2">
              <span className="me-3">
                <BsFillPinMapFill />
              </span>
              <span className="fw-light">Kuchynska 506, 906 38 Rohoznik</span>
            </div>
            <div className="d-flex justify-content-start align-items-start my-2 ">
              <span className="me-3">
                <MdOutlineAlternateEmail />
              </span>
              <span className="fw-light">gabriela@gmail.com</span>
            </div>
            <div className="d-flex justify-content-start align-items-start my-2 ">
              <span className="me-3">
                <BsPhoneVibrate />
              </span>
              <span className="fw-light">+421 917 425 220</span>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <h5 className="fw-light mb-3">Follow Us</h5>
            <div className="d-flex">
              <ul className="list-unstyled d-flex">
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/profile.php?id=1617340063"
                    className=" fs-4 me-4 text-white text-decoration-none"
                  >
                    <BsFacebook />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/"
                    className="fs-4 me-4 text-white text-decoration-none"
                  >
                    <BsInstagram />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin"
                    className=" fs-4 me-4 text-white text-decoration-none"
                  >
                    <BsTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
