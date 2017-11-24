import React from 'react';
window.React = React;
import ReactDOM from 'react-dom';
import moment from 'moment';
import _ from 'lodash';
import Calendar from '../components/Calendar'

var date = moment();

const mainReducer = (state, action) => {
  switch (action.type) {
    // change the date of the month that is being rendered
    case 'CHANGEDATE': {
      // set the hash value
      var m = moment(action.date);
      var store = action.store;
      window.location.hash = '#' + m.format('YYYYMM');
      readDate(state, store);
    }

    // change the date to add events to
    case 'SELECTDAY': {
      // change the adding property of the state
      let date = action.date;
      return _.assign({}, state, {adding: date});
    }

    // add an event
    case 'ADDEVENT': {

    }

    // remove an event
    case 'REMOVEEVENT': {

    }

    // cancel a from submission
    case 'CLOSEFORM': {

    }

    // change a form
    case 'CHANGEFORM': {

    }

    // add a restaurant to the calendar
    case 'ADDRESTAURANT': {

    }

    // add a new recipe
    case 'ADDRECIPE': {

    }
  }
  return state;
};


const readDate = (state, store) => {
  var ymd = window.location.hash.substring(1);
  var m = moment(ymd, 'YYYYMM');
  if (m.isValid()) {
      // assign the time to the
      date = m;
  }
  redraw(state, store);
}

// helper for rerendering the calendar
const redraw = (state, store) => {
  var calendarel = <Calendar
    store={store}
    date={date}
    today={moment()}
    events={state.events}
    />
  ReactDOM.render(
    calendarel,
    document.getElementById('container')
  );
}

export { mainReducer };
