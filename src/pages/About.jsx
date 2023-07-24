import pic from "../images/pic.png";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md">
            <h1 className="text-info fw-bold mb-4">About Me</h1>
            <p className="lead mb-4">
              In the heart of our bustling city, there exists a beacon of
              creativity and style - a sanctuary for those seeking a
              transformative experience like no other. Meet Gabriela, the
              virtuoso of hair design, who gracefully wields her scissors like
              an artist's brush, painting masterpieces upon every canvas of hair
              that comes her way.
            </p>
            <p className="lead mb-4">
              With an infectious passion for her craft and an eye for detail
              that rivals the most skilled artisans, Grace has honed her
              expertise over years of dedication and learning. Her journey began
              as a young girl, mesmerized by the magic of hairdressing and the
              ability to weave strands of hair into expressions of beauty.
              Little did she know that her fascination would grow into an
              unyielding passion that would shape her life's purpose.
            </p>
            <p className="lead mb-4">
              Stepping into my salon is like entering a realm of boundless
              imagination and inspiration. The soft hum of hairdryers, the
              gentle chatter of clients, and the aroma of premium hair products
              create an ambiance of comfort and relaxation. Each client is
              greeted with a warm smile and made to feel at home, as Grace
              believes that creating a strong connection is the key to
              understanding their unique visions
            </p>
          </div>
          <div className="col-md py-3">
            <img src={pic} alt="About Us" className="img-fluid" />
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </>
  );
};

export default About;
