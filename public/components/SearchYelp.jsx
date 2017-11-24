import React from 'react';

export default class SearchYelp extends React.Component {
  constructor(props) {
    super();
    this.search = this.search.bind(this);
  }

  search() {

  }

  render() {
    return (
      <div className="yelp">
        <form className="search_restaurant_form"
          onSubmit={this.search}
          >
          <p className="form-title">
            Search Restaurants
          </p>
        </form>
      </div>
    );
  }
}
