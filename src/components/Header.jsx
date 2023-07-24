import hero from "../images/hero-image.png";

const Header = () => {
  return (
    <section className="p-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md">
            <h1 className="display-5">
              One haircut will not suit to everyone.
            </h1>
            <p>
              Get your hair done by professional and experience something new
              and exciting
            </p>
            <button className="btn btn bg-secondary mx-2 p-3">
              Book a date
            </button>
            <button className="btn btn bg-dark mx-2 p-3">Explore more</button>
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
