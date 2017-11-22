import React from 'react';
import u from './utils';
import PropTypes from 'prop-types';

// proptype checker
Calendar.propTypes = {
  today: u.propTypeMoment,
  date: u.propTypeMoment,
  events: PropTypes.object
};

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {adding: false};
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
            today={this.props.today}
            date={this.props.date}
            events={this.props.events}
            recurring={this.props.recurring}
            selectDay={this.props.selectDay}
            />
        </table>
      </div>
    )
  }
}
