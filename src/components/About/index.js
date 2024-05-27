import Header from '../Header'

import './index.css'

const About = () => (
  <div className="about-container">
    <Header />
    <div className="image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        className="mobile-img"
        alt="about"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        className="desktop-img"
        alt="about"
      />
    </div>
  </div>
)

export default About
