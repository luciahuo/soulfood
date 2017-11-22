import React from 'react';
import CalendarMonth from './CalendarMonth';
import * as actions from '../actions/index.js';
import * as initialState from '../initialState';
import * as PropTypes from 'prop-types';
import * as u from './utils.js'

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.jumpToToday = this.jumpToToday.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
  }
  componentDidMount() {
    this.props.store.subscribe(function () {
      this.setState(this.props.store.getState());
    }.bind(this));
  }
  // allows user to jump to today
  jumpToToday() {
    var today = this.props.date;
    this.props.store.dispatch(actions.changeDate(today));
  }
  // allows jumping to prev month
  prevMonth() {
    var lastMonth = this.props.date.clone().subtract(1, 'month');
    this.props.store.dispatch(actions.changeDate(lastMonth));
  }
  // allows jumping to next month
  nextMonth() {
    var nextMonth = this.props.date.clone().add(1, 'month');
    this.props.store.dispatch(actions.changeDate(nextMonth));
  }
  render() {
    var store = this.props.store;
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
            store = {store}
            date={this.props.date}
            events={this.state.events}
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
