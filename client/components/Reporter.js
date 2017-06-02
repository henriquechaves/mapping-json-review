import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchData, sortData, filterData, changePage } from '../actions/AppActions';
import { getData, getSortStatus, getActivePage } from '../reducers/AppReducer';

import Pagination from './Pagination/Pagination';
import Sorting from './Sorting';
import Filters from './Filters';
import List from './List';

import config from '../../server/config';

import styles from '../assets/css/reporter.css';

export class Reporter extends Component {
  componentDidMount() {
    this.props.dispatch(fetchData());
  }

  handleChangePage = (activePage) => {
    this.props.dispatch(changePage(activePage));
  }

  handleFilter = (require) => {
    this.props.dispatch(filterData(this.props.data, this.props.sortStatus, require));
  }

  handleClearFilter = () => {
    this.props.dispatch(fetchData());
  }

  handleToogleOrder = (e, property) => {
    e.preventDefault();
    let data = this.props.data.map(item => item);
    let sortStatus = this.props.sortStatus;
    this.props.dispatch(sortData(data, property, sortStatus));
  }

  render() {

    let inicio_janela = (this.props.activePage-1) * config.ITEMS_PER_PAGE;
    let fim_janela = inicio_janela + config.ITEMS_PER_PAGE;
    let paginatedData = this.props.data.slice(inicio_janela, fim_janela);
    let total = this.props.data.length;

    return (
      <div className={`container ${styles.reporter}`}>
        <div className="container text-center">
          <Filters
            handleFilter={this.handleFilter}
            handleClearFilter={this.handleClearFilter}
          />
        </div>
        <div className={`container rounded ${styles.reporterBackground} ${styles.reporter}`}>
          <Sorting
            handleToogleOrder={this.handleToogleOrder}
          />
        {paginatedData.length && <List data={paginatedData} />}
        </div>
        <div className="container">
          <Pagination
            itemsCountPerPage={config.ITEMS_PER_PAGE}
            totalItemsCount={total}
            activePage={this.props.activePage}
            onChange={this.handleChangePage}
            activeClass="active"
            />
        </div>
      </div>
    );
  }
}

Reporter.need = [() => {
  return fetchData();
}];

function mapStateToProps(state) {
  return {
    activePage: getActivePage(state),
    data: getData(state),
    sortStatus: getSortStatus(state),
  };
}

Reporter.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    city: PropTypes.string,
    email: PropTypes.string,
    gender: PropTypes.string,
    atheist: PropTypes.bool,
  })).isRequired,
  activePage: PropTypes.number.isRequired,
  sortStatus: PropTypes.shape({
    id: PropTypes.bool,
    name: PropTypes.bool,
    city: PropTypes.bool,
    gender: PropTypes.bool,
    atheist: PropTypes.bool,
  }).isRequired,
};

export default connect(mapStateToProps)(Reporter);
