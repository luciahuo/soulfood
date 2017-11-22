import React from 'react';
window.React = React;
import moment from 'moment';
import _ from 'lodash';
import * as initialState from '../initialState.js';

const mainReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGEDATE': {
      var m = moment(action.date);
      window.location.hash = '#' + m.format('YYYYMM');
    }

    case 'SELECTDAY': {

    }

    case 'REMOVEEVENT': {

    }

    case 'CANCELFORM': {

    }

    case 'CHANGEFORM': {

    }

    case 'ADDRESTAURANT': {

    }
  }
  return state;
};

export { mainReducer };
