import React from 'react';
import CalendarMonth from './CalendarMonth';
import * as initialState from '../initialState';
import * as PropTypes from 'prop-types';
import * as u from './utils.js'

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  componentDidMount() {
    this.props.store.subscribe(function () {
      this.setState(this.props.store.getState());
    }.bind(this));
  }
  // allows user to jump to today
  jumpToToday() {

  }
  // allows jumping to prev month
  prevMonth() {

  }
  // allows jumping to next month
  nextMonth() {

  }
  // allows users to zoom in certain day
  selectDay() {

  }
  render() {
    return (
      <div className="container">
        <table className="table">
          <caption>
            <button className="left"
              onClick={this.prevMonth}>prev</button>
            <button className="right"
              onClick={this.nextMonth}>next</button>
            <span className="clickable"
              onClick={this.jumpToToday}>
              {this.props.date.format("MMMM YYYY")}
            </span>
          </caption>
          <CalendarMonth
            date={this.props.date}
            events={this.state.events}
            selectDay={this.props.selectDay}
            />
        </table>
      </div>
    )
  }
}

// proptype checker
Calendar.propTypes = {
  date: u.propTypeMoment,
  events: PropTypes.object
};
