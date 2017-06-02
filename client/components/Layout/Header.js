import { Link } from 'react-router-dom';
import React, { Component } from 'react';

// Import Style
import styles from '../../assets/css/header.css';

export default class Header extends Component {
  render() {
    return (
          <nav className={`navbar fixed-top navbar-toggleable-sm navbar-light bg-faded ${styles.navbarHeader}`}>
              <button
                  className="navbar-toggler navbar-toggler-right"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
              >
                  <span className="navbar-toggler-icon" />
              </button>
              <Link className={`navbar-brand rounded ${styles.navbarBrandHeader}`} to="/">

              </Link>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                          <div className={`${styles.navbarTitle}`}>Junior</div>
                      </li>
                  </ul>
              </div>
          </nav>
    );
  }
}
