import "./testimonial.css";
import Carousel from "react-bootstrap/Carousel";

export default function Testimonial() {
  return (
    <section id="testimonal" className="testimonial">
      <h5>Testimonal</h5>
      <div className="container">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <div className="anim">
              <img className="ic-1" src="/imgs/download (5).png" alt="" />
              <img
                className="ic-2"
                src="/imgs/data_image_png;base… (16).png"
                alt=""
              />
            </div>
            <div className="item">
              <img src="/imgs/austin-distel-7bMdiIqz_J4-unsplash.jpg" alt="" />
              <div className="text">
                <h4>Patients:</h4>
                <p className="p-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecena ssuspendisse ul
                </p>
                <p className="p-2">John Deo</p>
                <p className="p-3">PATIENT</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="anim">
              <img className="ic-1" src="/imgs/download (5).png" alt="" />
              <img
                className="ic-2"
                src="/imgs/data_image_png;base… (16).png"
                alt=""
              />
            </div>
            <div className="item">
              <img src="/imgs/eben-kassaye-ciJLkyRngAY-unsplash2.jpg" alt="" />
              <div className="text">
                <h4>Patients:</h4>
                <p className="p-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecena ssuspendisse ultrices gravida.
                </p>
                <p className="p-2">John Deo</p>
                <p className="p-3">PATIENT</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="anim">
              <img className="ic-1" src="/imgs/download (5).png" alt="" />
              <img
                className="ic-2"
                src="/imgs/data_image_png;base… (16).png"
                alt=""
              />
            </div>
            <div className="item">
              <img src="/imgs/usman-yousaf-PVjfLss3b-c-unsplash.jpg" alt="" />
              <div className="text">
                <h4>Patients:</h4>
                <p className="p-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecena ssuspendisse ultrices gravida.
                </p>
                <p className="p-2">John Deo</p>
                <p className="p-3">PATIENT</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}
