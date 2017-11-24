import React from 'react';
window.React = React;

import ReactDOM from 'react-dom';
import moment from 'moment';
import { createStore } from 'redux';
import { mainReducer as reducers } from './reducers';
import Calendar from './components/Calendar';
import * as initialState from './initialState';
import * as actions from './actions/index';

const store = createStore(reducers, initialState);

// get the current time;
var time = moment();

const calendar = <Calendar store={store} date={time} today={moment()} events={initialState.events}/>;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    calendar,
    document.getElementById('container')
  );
});
