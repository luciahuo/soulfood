import React from 'react';
import CalendarMonth from './CalendarMonth';
import AddEventForm from './AddEventForm';
import * as actions from '../actions/index.js';
import * as initialState from '../initialState';
import * as PropTypes from 'prop-types';
import * as u from './utils.js'
import querystring from 'query-string';
import SearchYelp from './SearchYelp';
import SearchRecipe from './SearchRecipe';

export default class Calendar extends React.Component {
  constructor(props) {
    super();
    this.state = initialState;
    this.jumpToToday = this.jumpToToday.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.searchRestaurants = this.searchRestaurants.bind(this);
    this.searchRecipes = this.searchRecipes.bind(this);
    this.addEventForm = this.addEventForm.bind(this);
  }
  componentDidMount() {
    // rerender the component whenever there is a change to the state of the page
    this.props.store.subscribe(function () {
      this.setState(this.props.store.getState());
    }.bind(this));
  }
  // allows user to jump to today
  jumpToToday() {
    var today = this.props.today;
    var store = this.props.store;
    this.props.store.dispatch(actions.changeDate(today, store));
  }
  // allows jumping to prev month
  prevMonth() {
    var lastMonth = this.props.date.clone().subtract(1, 'month');
    // pass in the store
    var store = this.props.store;
    this.props.store.dispatch(actions.changeDate(lastMonth, store));
  }
  // allows jumping to next month
  nextMonth() {
    var nextMonth = this.props.date.clone().add(1, 'month');
    // pass in the store
    var store = this.props.store;
    this.props.store.dispatch(actions.changeDate(nextMonth, store));
  }
  addEventForm() {
    this.props.store.dispatch(actions.addEventForm(this.props.date));
  }
  searchRestaurants() {
    this.props.store.dispatch(actions.searchRestaurants(this.props.date));
  }
  searchRecipes() {
    this.props.store.dispatch(actions.searchRecipes(this.props.date));
  }
  render() {
    var store = this.props.store;
    var today = this.props.today;
    var events = this.state.events;
    var date = this.props.date;
    return (
      <div className="container">
        <h2 className="title"> Welcome To SoulFood</h2>
        <table className="table">
          <caption>
            <button className="button left"
              onClick={this.prevMonth}>prev</button>
            <button className="button right"
              onClick={this.nextMonth}>next</button>
            <span className="clickable"
              onClick={this.jumpToToday}>
              {date.format("MMMM YYYY")}
            </span>
          </caption>
          <CalendarMonth
            store={store}
            today={today}
            date={date}
            events={events}
            />
        </table>
        <button className="button search left"
          onClick={this.searchRestaurants}>Search Restaurants</button>
        <button className="button search mid"
          onClick={this.addEventForm}>Add Event</button>
        <button className="button search right"
          onClick={this.searchRecipes}>Search Recipes</button>
        {this.state.form &&
          <AddEventForm
            store={store}
            date={this.state.adding}
          />
        }
        {this.state.restoSearch &&
          <SearchYelp
            date={this.state.adding}
          />
        }
        {this.state.recipeSearch &&
          <SearchRecipe
            date={this.state.adding}
          />
        }
      </div>
    )
  }
}

// proptype checker
Calendar.propTypes = {
  today: u.propTypeMoment,
  date: u.propTypeMoment,
  events: PropTypes.array
};
