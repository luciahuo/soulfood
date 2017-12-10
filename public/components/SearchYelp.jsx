import React from 'react';
import zomato from 'zomato.js';
import querystring from 'querystring';
import SearchResults from './SearchResults';

export default class SearchYelp extends React.Component {
  constructor(props) {
    super();
    // state for keeping track of search results
    this.state = {
      searchText: '',
      searchResults: []
    }
    $.get('/restaurantKey', (function (data) {
      this.zomato = new zomato(data.key.trim());
    }).bind(this));
    this.submitForm = this.submitForm.bind(this);
    this.cancel = this.cancel.bind(this);
  }
  submitForm(e) {
    // prevent the browser from reloading
    e.preventDefault();
    var keyword = $('#keyword').val();
    if (!keyword) {
      alert('keyword is required');
    } else {
      var that = this
      this.setState({searchText: $('#keyword').val()});
      // zomato search
      var cb = (data) => {
        if (data) {
          that.setState({searchResults: data});
        } else {
          alert('there are no results for your query')
        }
      }
      this.zomato
      .search({
        q: keyword,
        count: 10
      })
      .then(function(data) {
        cb(data);
      })
      .catch(function(err) {
        console.error(err);
      });
    }
  }
  cancel() {

  }
  render() {
    var results = this.state.searchResults.restaurants;
    return (
      <div className="searchResto">
        <form className="search_restaurant_form"
            onSubmit={this.submitForm}
          >
          <p className="form-title">
            Search Restaurants Near You For This Date:
          </p>
          <p className="form-title">
            {this.props.date.format('ddd D MMM YYYY')}
          </p>
          <label>
            Keyword
            <input style={{fontSize: '18px', width: '100%', background: 'none'}} type="text" id="keyword"/>
          </label>
          <div className="form-controls">
            <button type="submit" id="submit">Search Restaurants</button>
            <button onClick={this.cancel}>Cancel</button>
          </div>
        </form>
        {
          results && <SearchResults searchType="restaurant" searchResults={results}/>
        }
      </div>
    );
  }
}
