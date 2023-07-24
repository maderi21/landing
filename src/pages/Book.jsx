import Footer from "../components/Footer";
import res from "../images/reservation.jpg";

const Book = () => {
  return (
    <>
      <section className="container pt-5 mt-5 pb-5 mb-5 text-center">
        <div className="row">
          <div className="text-center py-4 my-4">
            <h1>Book Your Seat</h1>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <form className="pb-5">
                <div className="mb-3">
                  <label for="exampleForm" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleForm"
                    placeholder="Joe Doe"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Example textarea
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                  ></textarea>
                </div>
              </form>

              <div className="">
                <select name="days">
                  <option value="day-select">Select Day</option>
                  <option value="sunday">Sunday</option>
                  <option value="monday">Monday</option>
                  <option value="tuesday">Tuesday</option>
                  <option value="wednessday">Wednessday</option>
                  <option value="thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                </select>

                <select name="hours" className="m-3">
                  <option value="hour-select">Select Hour</option>
                  <option value="9">9:00</option>
                  <option value="10">10:00</option>
                  <option value="11">11:00</option>
                  <option value="13">13:00</option>
                  <option value="14">14:00</option>
                  <option value="15">15:00</option>
                </select>

                <select name="cut">
                  <option value="select cut">Select Cut</option>
                  <option value="long cut">Long Cut</option>
                  <option value="short cut">Short Cut</option>
                  <option value="perm">Perm</option>
                </select>

                <div className="text-center m-3">
                  <button className="btn bg-secondary">Book a Seat</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={res} alt="" className="img-fluid mt-2" />
      </section>
      <hr />
      <Footer />
    </>
  );
};

export default Book;
