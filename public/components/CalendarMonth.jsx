import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import CalendarDay from './CalendarDay.jsx';
import * as u from './utils';

export default class CalendarMonth extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    var date = this.props.date;
    var events = this.props.events;
    var store = this.props.store;
    var today = this.props.today;
    // set start to the start of the current month
    var start = date.clone().startOf('month');
    // get the number of days in the month
    var monthDays = date.daysInMonth();
    // get the start of the month
    var daySkip = start.isoWeekday() - 1;
    // append table elements
    var days = [].concat(
      _.times(daySkip, function(n) {
        return <td key={-1 * n} />;
      }),
      _.times(monthDays, function(n) {
        var date = start.clone().add(n, 'days');
        var dayEvents = [].concat(
          events[date.format('YYYYMMDD')] || [],
        );
        return <CalendarDay
          store={store}
          today={today}
          key={n + 1}
          date={date}
          events={dayEvents}
        />;
      })
    );
    var weeks = u.chunk(7, days);
    var weekdays = [
      'Mon', 'Tue', 'Wed',
      'Thu', 'Fri', 'Sat', 'Sun'
    ];
    return (
      <tbody>
        <tr>
          {weekdays.map(function(d) {
            return <th key={d}>{d}</th>
          })}
        </tr>
        {weeks.map(function(week, i) {
          return <tr key={i}>{week}</tr>;
        })}
      </tbody>
    )
  }
}

CalendarMonth.propTypes = {
  // selected day
  date: u.propTypeMoment,
  events: PropTypes.array
};
