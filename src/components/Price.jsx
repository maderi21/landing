import p1 from "../images/p1.png";
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";

const Price = () => {
  return (
    <div className="container">
      <h1 className="display-5 p-5 d-flex justify-content-end">
        Affordable new look will cost you only...
      </h1>
      <div class="row row-cols-1 row-cols-md-3 g-4 text-center">
        <div class="col">
          <div class="card h-100 border-0">
            <img src={p1} class="card-img-top p-5" alt="offer" />
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0">
            <img src={p2} class="card-img-top p-5" alt="offer" />
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0">
            <img src={p3} class="card-img-top p-5" alt="offer" />
          </div>
        </div>
        <div className="container d-flex justify-content-center my-5">
          <button className="btn btn-dark p-3">Book now</button>
        </div>
      </div>
    </div>
  );
};

export default Price;
