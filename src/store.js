// src/store.js
import { createStore } from 'redux';

const initialState = {
  searchQuery: '',
  filteredStocks: [],
  stockData: [], 
  currentPage: 1,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    case 'SET_FILTERED_STOCKS':
      return { ...state, filteredStocks: action.payload };
    case 'SET_STOCK_DATA':
      return { ...state, stockData: action.payload };
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
