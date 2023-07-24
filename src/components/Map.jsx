const Map = () => {
  return (
    <section className="p-5">
      <div className="container text-center">
        <div className="row p-5">
          <div className="col-md">
            <h1 className="display-5">You can also always find us at..</h1>
            <p>
              The easiet it is to go over the bridge and then first to the left,
              then right and you will find blue windowed house called Gabriela
            </p>
          </div>
          <div className="col-md p-4 mx-5 text-center">
            <iframe
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA9dcVW6Y1KaJWBgshFZe7tsvpsbIntnMk 
    &q=Kadernictvo Gabriela+Rohoznik"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
