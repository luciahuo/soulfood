import React from 'react';

export default class SearchResults extends React.Component {
  constructor (props) {
    super();
    this.addResto = this.addResto.bind(this);
  }

  // add restaurant to calendar
  addResto() {
    this.props.store.dispatch(actions.addEvent(date, event, store));
  }

  render() {
    var searchResults = this.props.searchResults;
    var searchType = this.props.searchType;
    let elts = searchResults.map(function(item){
      return <li><a href={item.url}>{item.name}</a>
        <div className="addToCal">
          <button restaurantInfo={item} onClick={this.addResto} className="btn" type="button">
           Add To Calendar
          </button>
        </div>
      </li>
      });
    if (searchType == "recipe") {
      elts = searchResults.map(function(item){
        return <li><a href={item.recipe.url}>{item.recipe.label}</a>
          <div className="addToCal">
            <button
              ref={(button) => { this.button = button; }}
              onClick={this.addResto}
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
