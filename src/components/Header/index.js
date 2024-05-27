import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="nav-header-container">
    <div className="nav-content-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          className="website-logo"
          alt="website logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            className="menu-icon"
            type="button"
            data-testid="hamburgerIconButton"
            aria-label="hambuer-menu"
          >
            <GiHamburgerMenu size="30" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              className="close-button"
              type="button"
              data-testid="closeButton"
              aria-label="close-button"
              onClick={() => close()}
            >
              <IoMdClose size="30" color="#616e7c" />
            </button>
            <ul className="nav-list">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={() => close()}>
                  <AiFillHome size="30" />
                  <p className="nav-content">Home</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={() => close()}>
                  <BsInfoCircleFill size="30" />
                  <p className="nav-content">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
