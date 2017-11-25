import React from 'react';
import zomato from 'zomato.js';
import querystring from 'querystring';
import axios from 'axios'

export default class SearchYelp extends React.Component {
  constructor(props) {
    super();
    this.zomato = new zomato(process.env.APIKey);
    // get a token
    this.submitForm = this.submitForm.bind(this);
    this.cancel = this.cancel.bind(this);
    $('#submit').click(this.submitForm);
  }
  submitForm(e) {
    e.preventDefault();
    var keyword = $('#keyword').val();
    if (!keyword) {
      alert('keyword is required');
    } else {
      this.zomato
      .search({
        q: keyword,
        count: 10
      })
      .then(function(data) {
        console.log(data);
      })
      .catch(function(err) {
        console.error(err);
      });
    }
  }
  cancel() {

  }
  render() {
    const {handleSubmit} = this.props;
    return (
      <div className="searchResto">
        <form className="search_restaurant_form"
            id="mySearch"
            onSubmit={this.submitForm}
          >
          <p className="form-title">
            Search Restaurants
          </p>
          <label>
            Keyword
            <input type="text" id="keyword"/>
          </label>
          <div className="form-controls">
            <button type="submit" id="submit">Search Restaurants</button>
            <button onClick={this.cancel}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}
