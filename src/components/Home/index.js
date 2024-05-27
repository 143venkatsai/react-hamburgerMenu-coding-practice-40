import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        className="small-img"
        alt="home"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        className="large-img"
        alt="home"
      />
    </div>
  </div>
)

export default Home
