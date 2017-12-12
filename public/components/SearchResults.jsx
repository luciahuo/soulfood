import React from 'react';
import * as actions from '../actions';
import Popup from 'react-popup';
import ReactDom from 'react-dom';

export default class SearchResults extends React.Component {
  constructor (props) {
    super();
    this.addResto = this.addResto.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
    this.createRestoPopup = this.createRestoPopup.bind(this);
    ReactDom.render(
      <Popup
        className="mm-popup"/>,
        document.getElementById('popup')
    )
  }

  // add restaurant to calendar
  addResto(name, url) {
    var date = this.props.date;
    var event = {
      url: url,
      title: name,
      color: "black" //default color
    }
    var store = this.props.store;
    this.props.store.dispatch(actions.addEvent(date, event, store));
  }

  // add recipe to calendar
  addRecipe(name, url) {
    var date = this.props.date;
    var event = {
      url: url,
      title: name,
      color: "black" //default color
    }
    var store = this.props.store;
    this.props.store.dispatch(actions.addEvent(date, event, store));
  }

  createRestoPopup(item) {
    Popup.close();
    let content =
    'cuisine: ' + item.cuisines + '\n'+
    'name: ' + item.name + '\n'+
    'url: '+ item.url + '\n'+
    'average cost for two: ' + item.average_cost_for_two;
    Popup.create(
      { content: content,
        className: null
      }
    )
  }

  render() {
    var searchResults = this.props.searchResults;
    var searchType = this.props.searchType;
    var elts = undefined;
    var that = this;
    if (searchType == "restaurant") {
        elts = searchResults.map(function(item){
        return <li><a href={item.url}>{item.name}</a>
          <div className="addToCal">
            <button
              onClick={
                () => that.addResto(item.name, item.url)}
              className="btn"
              type="button">
              Add To Calendar
            </button>
            <button
              onClick={
                () => that.createRestoPopup(item)}
              className="btn"
              type="button">
              Get More Info
            </button>
          </div>
        </li>
        });
    }
    if (searchType == "recipe") {
      elts = searchResults.map(function(item){
        return <li><a href={item.recipe.url}>{item.recipe.label}</a>
          <div className="addToCal">
            <button
              onClick={
                () => that.addRecipe(item.recipe.label, item.recipe.url)}
              className="btn"
              type="button">
             Add To Calendar
            </button>
          </div>
        </li>
      });
    }
    return (
        <ul>
          {elts}
        </ul>
    )
  }
}
