import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from '../assets/css/filters.css';

const initialState = {
  id: '',
  name: '',
  city: '',
  gender: '',
  atheist: '',
}

export class Filters extends Component {

  constructor(props) {
      super(props);
      this.state = initialState;
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleClear = this.handleClear.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    if(name === 'id') {
      const val = parseInt(value, 10);
      value = isNaN(val)?'':val;
    }
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleFilter(this.state);
  }

  handleClear(event) {
    this.setState(initialState);
    this.props.handleClearFilter();
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit} className={`form-inline text-center ${styles.filtersForm}`}>

          <label className="sr-only" htmlFor="inlineFormInput0">Id</label>
          <input name="id" value={this.state.id} onChange={this.handleInputChange} type="text" className="form-control" id="inlineFormInput1" placeholder="Id" />

          <label className="sr-only" htmlFor="inlineFormInput1">Name</label>
          <input name="name" value={this.state.name} onChange={this.handleInputChange} type="text" className="form-control" id="inlineFormInput1" placeholder="Name" />

          <label className="sr-only" htmlFor="inlineFormInput2">City</label>
          <input name="city" value={this.state.city} onChange={this.handleInputChange} type="text" className="form-control" id="inlineFormInput2" placeholder="City" />

          <label className={`${styles.filtersLabel}`}>
            Gender:
            <select name="gender" value={this.state.gender} onChange={this.handleInputChange} className={` ${styles.filtersSelect}`}>
              <option value=''>Select</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </label>

          <button type="submit" className="btn btn-primary">Filter</button>
          <button type="button" className={`btn btn-primary ${styles.filtersBtnClear}`} onClick={this.handleClear}>Clear Filters</button>

        </form>
    );
  }
}

Filters.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  handleClearFilter: PropTypes.func.isRequired,
};

export default Filters;
