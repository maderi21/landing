const Map = () => {
  return (
    <section className="p-5">
      <div className="container p-5">
        <div className="row align-middle">
          <div className="col-md align-middle">
            <h1 className="display-5">You can also always find us at..</h1>
            <p>
              The easiet it is to go over the bridge and then first to the left,
              then right and you will find blue windowed house called Gabriela
            </p>
          </div>
          <div className="col-md">
            <iframe
              className="img-fluid"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2646.0702611377224!2d17.165622077459023!3d48.45518142899556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476cc09e062a3d0b%3A0x4fadf4c0f2e18957!2sKadern%C3%ADctvo%20Gabriela!5e0!3m2!1sen!2ssk!4v1690213015461!5m2!1sen!2ssk"
              width="500"
              height="350"
              style={{ border: "0" }}
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
