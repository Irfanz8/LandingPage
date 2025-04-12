// filepath: d:\fungames\landing-page\src\pages\Home.jsx
import top from "../assets/pattern/top-wave.svg";
import bottom from "../assets/pattern/bottom-wave.svg";
import "../assets/scss/home.scss";
import Hero from "../components/Hero";
import About from "../components/About";
import ScrollToTop from "../components/ScrollToTop";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        <div className="top-wave">
          <img src={top} alt="wave-top" />
        </div>
        <div className="bottom-wave">
          <div>
            <img src={bottom} alt="wave-bottom" />
          </div>
        </div>
        <Hero />
      </div>
      <div id="about-section">
        <About />
      </div>
      <div id="pricing-section">
        <Pricing />
      </div>
      <div id="contact-section">
        <Contact />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Home;