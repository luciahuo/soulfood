import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import CalendarDay from './CalendarDay.jsx';
import u from './utils';

CalendarMonth.propTypes = {
  // selected day
  date: u.propTypeMoment,
  // what the day is today
  today: u.propTypeMoment,
  events: PropTypes.array
};

export default class CalendarMonth extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    var today = this.props.today;
    var date = this.props.date;
    var events = this.props.events;

    // set start to the start of the current month
    var start = date.clone().startOf('month');
    // set get all the days in the month
    var monthDays = date.daysInMonth();
  }
}
