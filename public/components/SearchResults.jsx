import React from 'react';

export default class SearchResults extends React.Component {
  constructor (props) {
    super();
  }
  render() {
    var searchResults = this.props.searchResults.restaurants;
    return (
      <ul>
        {searchResults && searchResults.map(function(item){
          return <li><a href={item.url}>{item.name}</a></li>
        })}
      </ul>
    )
  }
}
