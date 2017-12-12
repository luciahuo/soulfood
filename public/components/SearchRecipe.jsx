import React from 'react';
import querystring from 'querystring'
import SearchResults from './SearchResults';

export default class SearchRecipe extends React.Component {
  constructor(props) {
    super();
    var that = this;
    this.state = {
      searchQuery: '',
      maxNumIngredients: 8,
      diet: null,
      searchResults: []
    }
    $.get("/recipeKey", function (data) {
      that.recipeId = data.id;
      that.recipeKey = data.key
    });
    this.submitForm = this.submitForm.bind(this);
    this.cancel = this.cancel.bind(this);
  }
  submitForm(e) {
    e.preventDefault();
    var ingredients = $('#ingredients').val();
    var healthlabel = $('#diet').val();
    var q = '';
    if (!ingredients) {
      alert('please enter ingredients');
    } else {
      var that = this;
      ingredients = ingredients.split(" ");
      // construct the querystring
      q = buildQuery(ingredients);
      var data = {
        q: q,
        app_id: this.recipeId,
        app_key: this.recipeKey
      }
      if (healthlabel != "none") {
        data = {
          q: q,
          health: healthlabel,
          app_id: this.recipeId,
          app_key: this.recipeKey
        }
      }
      $.get(
        'https://api.edamam.com/search',
        data
      ).done(function (data) {
        that.setState({searchResults: data});
      });
    }
    ReactDom.render(
      <Popup
        className="mm-popup"/>,
        document.getElementById('popup')
    )
  }
  cancel() {

  }
  render() {
    var results = this.state.searchResults.hits;
    return (
      <div className="searchRecipes">
        <form className="search_recipe_form"
          onSubmit={this.submitForm}
          >
          <p className="form-title">
            Search Recipes For This Date:
          </p>
          <p className="form-title">
            {this.props.date.format('ddd D MMM YYYY')}
          </p>
          <label>
            Ingredients
            <input style={{fontSize: '18px', width: '100%', background: 'none'}} type="text" id="ingredients" placeholder="input list of ingredients separated by space"/>
          </label>
          <label>
            Diet
            <select id="diet">
              <option value="none">None</option>
              <option value="vegan">Vegan</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="pescatarian">Pescatarian</option>
              <option value="wheat-free">Wheat-Free</option>
              <option value="low-sugar">Low-Sugar</option>
              <option value="kosher">Kosher</option>
            </select>
          </label>
          <div className="form-controls">
            <button type="submit" id="submit">Search Recipes</button>
            <button onClick={this.cancel}>Cancel</button>
          </div>
        </form>
          {results && <SearchResults store={this.props.store} date={this.props.date} searchType="recipe" searchResults={results}/>}
      </div>
    )
  }
}

const buildQuery = (array) => {
  var index = array.length - 1;
  var string = array[index];
  if (array.length == 1) {
    return string;
  }
  while (index != 1) {
    index -= 1;
    string = string + '&' + array[index];
  }
  string = string + '&' + array[0];
  return string;
}
