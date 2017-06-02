import React from 'react';
import PropTypes from 'prop-types';

import styles from '../assets/css/listItem.css';

const line = (index) => (index % 2) == 0 ? styles.evenLine : styles.oddLine;

export function ListItem(props) {
  return (
    <div className={`row rounded align-middle ${styles.onOverLine} ${line(props.index)}`}>
      <div className="col-md-1 align-middle">
        <p className="text-center">
          {props.item.id}
        </p>
      </div>
      <div className="col-md-4 align-middle">
        <p className="text-center">
          {props.item.name}
        </p>
      </div>
      <div className="col-md-3 align-middle">
        <p className="text-center">
          {props.item.city}
        </p>
      </div>
      <div className="col-md-2 align-middle">
        <p className="text-center">
          {props.item.gender}
        </p>
      </div>
      <div className="col-md-2 align-middle">
        <p className="text-center">
          {(props.item.atheist)?"Yes":"No"}
        </p>
      </div>
    </div>
  );
}

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    cuid: PropTypes.string,
    name: PropTypes.string,
    city: PropTypes.string,
    email: PropTypes.string,
    gender: PropTypes.string,
    atheist: PropTypes.bool,
  }).isRequired,
  index: PropTypes.number,
};

export default ListItem;
