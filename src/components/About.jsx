import "../assets/scss/about.scss";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p className="subtitle">Crafting Digital Experiences</p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="icon">🚀</div>
          <h3>Our Mission</h3>
          <p>To deliver innovative solutions that transform businesses and delight users.</p>
        </div>

        <div className="feature-card">
          <div className="icon">💡</div>
          <h3>Our Vision</h3>
          <p>Leading the digital revolution with cutting-edge technology and creative solutions.</p>
        </div>

        <div className="feature-card">
          <div className="icon">🤝</div>
          <h3>Our Values</h3>
          <p>Integrity, innovation, and dedication to client success drive everything we do.</p>
        </div>
      </div>

      <div className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-photo bg-gradient-1"></div>
            <h4>John Doe</h4>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <div className="member-photo bg-gradient-2"></div>
            <h4>Jane Smith</h4>
            <p>Lead Developer</p>
          </div>
          <div className="team-member">
            <div className="member-photo bg-gradient-3"></div>
            <h4>Mike Johnson</h4>
            <p>Design Director</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;