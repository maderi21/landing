import care1 from "../images/offer1.png";
import care2 from "../images/offer2.png";
import care3 from "../images/offer3.png";

const Offer = () => {
  return (
    <div className="container">
      <h1 className="display-5 p-5">What do we offer?</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4 text-center">
        <div class="col">
          <div class="card h-100 border-0">
            <img src={care1} class="card-img-top p-5" alt="offer" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title mt-auto">Complete hair care</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0">
            <img src={care2} class="card-img-top p-5" alt="offer" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title mt-auto">Personal attitude</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0">
            <img src={care3} class="card-img-top p-5" alt="offer" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title mt-auto">Long history</h5>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center my-5">
          <button className="btn btn-secondary p-3">Reserve your seat</button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
