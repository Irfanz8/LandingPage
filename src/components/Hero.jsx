import "../assets/scss/home.scss";

const Hero = () => {
  return (
    <div style={{ width: "100%" }}>
      <main className="hero-section">
        <div className="hero-content">
          <p className="hero-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <blockquote className="quote">
            "Excepteur sint occaecat cupidatat non proident"
          </blockquote>
        </div>
      </main>
    </div>
  );
};

export default Hero;