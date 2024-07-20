import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="ani">
            <img
              className="x"
              src="/imgs/data_image_png;base… (16).png"
              alt=""
            />
            <img
              className="cr"
              src="/imgs/data_image_png;base… (2).png"
              alt=""
            />
          </div>
          <div className="left col-md-4 col-sm-6">
            <img className="logo-img" src="/imgs/logo.png" alt="" />
            <p className="m-p">
              Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore
              smod tempor incididunt ut labore et.
            </p>
            <div className="section d-flex gap-4">
              <div className="icon">
                <icon className="icon-phone"></icon>
              </div>
              <div className="footer-text">
                <h3>Contact Us</h3>
                <p>+01 123 456 7890</p>
              </div>
            </div>
          </div>
          <div className="center col-md-4 col-sm-6">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#up">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#testimonal">Testimonal</a>
              </li>
              <li>
                <a href="#contact">Contact-US</a>
              </li>
            </ul>
          </div>
          <div className="right col-md-4 col-sm-6">
            <h2>Subcribe</h2>
            <form action="">
              <input type="emil" placeholder="Emil Address" />
            </form>
            <button>Subcribe Now</button>
            <div className="social d-flex gap-3">
              <a href="">
                <img src="/imgs/data_image_png;base… (12).png" alt="" />
              </a>
              <a href="">
                <img src="/imgs/data_image_png;base… (13).png" alt="" />
              </a>
              <a href="">
                <img src="/imgs/data_image_png;base… (14).png" alt="" />
              </a>
              <a href="">
                <img src="/imgs/data_image_png;base… (15).png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
