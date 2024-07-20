import "./aboutUs.css";

export default function AboutUs() {
  return (
    <div id="about" className="about container">
      <h5>About Us</h5>
      <div className="row">
        <div className="left col-lg-6 col-md-12 col-sm-12">
          <div className="sq"></div>
          <img className="photo-1" src="/imgs/1.jpg" alt="" />
          <img className="photo-2" src="/imgs/2.jpg" alt="" />
          <img className="photo-3" src="/imgs/3.jpg" alt="" />
          <img className="photo-4" src="/imgs/4.jpg" alt="" />
        </div>
        <div className="right col-lg-6 col-md-12 col-sm-12">
          <img className="squ" src="/imgs/download (3).png" alt="" />
          <h4>Services</h4>
          <h2>The Great Place Of Medical Hospital Center</h2>
          <p className="p-1">
            We are a comprehensive healthcare center committed to providing
            high-quality and comprehensive healthcare to all members of the
            community. Our qualified and specialized medical team has extensive
            experience in various medical specialties to ensure that each
            patient receives the best possible care.
          </p>
          <div className="list d-flex">
            <div className="box-1 d-flex">
              <icon className="icon-pil"></icon>
              <p>Emergency Help</p>
            </div>
            <div className="box-2 d-flex">
              <icon className="icon-injection"></icon>
              <p>Medical Treatment</p>
            </div>
            <div className="box-3 d-flex">
              <icon className="icon-thermometer"></icon>
              <p>Qualified Doctors</p>
            </div>
            <div className="box-4 d-flex">
              <icon className="icon-heart"></icon>
              <p>Best Professionals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
