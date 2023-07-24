import hero from "../images/hero-image.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="p-5">
      <div className="container">
        <div className="row align-items-center justify-content-between g-4">
          <div className="col-md">
            <h1 className="display-2">
              One haircut will not suit to everyone.
            </h1>
            <p>
              Get your hair done by professional and experience something new
              and exciting
            </p>
            <Link className="btn btn bg-secondary mx-2 p-3" to="/book">
              Book a date
            </Link>
            <Link to="/about" className="btn btn bg-dark mx-2 p-3">
              Explore more
            </Link>
          </div>
          <div className="col-md">
            <img className="img-fluid p-5" src={hero} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
