import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { mainReducer as reducers } from './reducers';
import Calendar from './components/Calendar';
import * as initialState from './initialState';
import * as actions from './actions/index';

const store = createStore(reducers, initialState);

const calendar = <Calendar store={store}/>;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    calendar,
    document.getElementById('container')
  );
});
