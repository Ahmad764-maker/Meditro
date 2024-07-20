import "bootstrap/dist/css/bootstrap.min.css";
import Navs from "./components/nav/Nav";
import { useEffect, useState } from "react";
import Footer from "./components/footer/Footer";
import AboutUs from "./components/about-us/AboutUs";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";

function App() {
  const [showScrollBTN, setshowScrollBTN] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBTN(true);
      } else {
        setshowScrollBTN(false);
      }
    });
  }, []);
  return (
    <div id="up">
      <Navs />
      <Home />
      <AboutUs />
      <Testimonial />
      <Contact />
      <Footer />
      <a
        style={{ opacity: showScrollBTN ? 1 : 0, transition: "0.7s" }}
        href="#up"
      >
        <button className="icon-chevron-thin-up scroll2Top"></button>
      </a>
    </div>
  );
}
export default App;
