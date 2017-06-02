import { ADD_DATA, SORT_DATA_STATUS, CHANGE_PAGE } from '../actions/AppActions';
import config from '../../server/config';

export const initialState = {
  activePage: 1,
  data: [],
  sortStatus: {
    id: false,
    name: false,
    city: false,
    gender: false,
    atheist: false,
  },
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_DATA :
      return Object.assign({}, state, { data: action.data, activePage: 1 });

    case SORT_DATA_STATUS :
      return Object.assign({}, state, { sortStatus: action.sortStatus });

    case CHANGE_PAGE :
      return Object.assign({}, state, { activePage: action.activePage });

    default:
      return state;
  }
};

/* Selectors */

// Get active page
export const getActivePage = state => state.app.activePage;

// Get Data
export const getData = state => state.app.data;

// Get Data
export const getSortStatus = state => state.app.sortStatus;

// Export Reducer
export default AppReducer;
