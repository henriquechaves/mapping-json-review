import React from 'react';
import PropTypes from 'prop-types';

import styles from '../assets/css/sorting.css';

export function Sorting(props) {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-1 text-center">
        <button
          onClick={(e) => props.handleToogleOrder(e, "id")}
          className={`btn ${styles.btnToogle}`}
        >
          ID
        </button>
      </div>
      <div className="col-md-4 text-center">
        <button
          onClick={(e) => props.handleToogleOrder(e, "name")}
          className={`btn ${styles.btnToogle}`}
        >
          Name
        </button>
      </div>
      <div className="col-md-3 text-center">
        <button
          onClick={(e) => props.handleToogleOrder(e, "city")}
          className={`btn ${styles.btnToogle}`}
        >
          City
        </button>
      </div>
      <div className="col-md-2 text-center">
        <button
          onClick={(e) => props.handleToogleOrder(e, "gender")}
          className={`btn ${styles.btnToogle}`}
        >
          Gender
        </button>
      </div>
      <div className="col-md-2 text-center">
        <button
          onClick={(e) => props.handleToogleOrder(e, "atheist")}
          className={`btn ${styles.btnToogle}`}
        >
          Atheist
        </button>
      </div>
    </div>
  </div>
  );
}

Sorting.propTypes = {
  handleToogleOrder: PropTypes.func.isRequired,
};

export default Sorting;
