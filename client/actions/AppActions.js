import cuid from 'cuid';

import * as helpers from './ActionsHelpers';
import loadLocalJSON from '../api/loadLocalJSON';
import config from '../../server/config';

export const ADD_DATA = 'ADD_DATA';
export const SORT_DATA_STATUS = 'SORT_DATA_STATUS';
export const CHANGE_PAGE = 'CHANGE_PAGE';

export function addData(data) {
  return {
    type: ADD_DATA,
    data,
  };
}

export function sortDataStatus(sortStatus) {
  return {
    type: SORT_DATA_STATUS,
    sortStatus,
  };
}

export function changePage(activePage) {
  return {
    type: CHANGE_PAGE,
    activePage,
  };
}

export function sortData(data, property, sortStatus) {
  return (dispatch) => {
    sortStatus[property] = !sortStatus[property];
    const propertyType = typeof data[0][property];
    data.sort(helpers.comparisonSort(property, propertyType, sortStatus));
    dispatch(addData(data));
    dispatch(sortDataStatus(sortStatus));
    return;
  }
}

export function filterData(data, sortStatus, require) {
  return (dispatch) => {
    const filteredData = helpers.filter(data, require);
    dispatch(addData(filteredData));
    return;
  }
}

export function fetchData(property = config.defaultPropertyOrder, sortStatus = config.defaultSortStatus) {
  return (dispatch) => {
    return loadLocalJSON()
    .then(data => {
      // next line give unique identification ( cuid ) to each item.
      const dataCuid = data.map(item => Object.assign({}, item, { cuid: cuid() }));
      const propertyType = typeof dataCuid[0][property];
      dataCuid.sort(helpers.comparisonSort(property, propertyType, sortStatus));
      dispatch(addData(dataCuid));
      dispatch(sortDataStatus(sortStatus));
    });
  };
}
