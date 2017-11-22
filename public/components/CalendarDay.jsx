import React from 'react';
import * as actions from '../actions/index.js';
import * as PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';
import * as u from './utils'

export default class CalendarDay extends React.Component {
  constructor (props) {
    super();
    // set initial state as events empty
    this.onDayClick = this.onDayClick.bind(this);
  }

  onDayClick() {
    // pass in the current date
    this.props.store.dispatch(actions.selectDay(this.props.date));
  }

  render() {
    var today = this.props.today;
    var date = this.props.date;
    var events = this.props.events || [];
    return (
      <td onClick={this.onDayClick}
          className='CalendarDay'>
          {date.format('D')}
          {events.map(function(event, i) {
            var style = {color: event.color};
            return (
              <div className="event"
                key={i} style={style}
              >
              {event.title}
              </div>
            );
          })}
      </td>
    )
  }
};

// proptype checker
CalendarDay.propTypes = {
  date: u.propTypeMoment,
  // events array is a property of the calendar
  events: PropTypes.array
};
