import React from 'react';
import querystring from 'querystring'

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
    if (!ingredients) {
      alert('please enter ingredients');
    } else {
      ingredients = ingredients.split(" ");
      // construct the querystring
      var q = buildQuery(ingredients);
      var data = {
        q: q,
        app_id: this.recipeId,
        app_key: this.recipeKey
      }
      $.get(
        'https://api.edamam.com/search',
        data
      ).done(function (data) {
        console.log(data);
      });
    }
  }
  cancel() {

  }
  render() {
    var results = this.state.searchResults;
    return (
      <div className="searchRecipes">
        <form className="search_recipe_form"
          onSubmit={this.submitForm}
          >
          <p className="form-title">
            Search Recipes
          </p>
          <label>
            Ingredients
            <input type="text" id="ingredients"/>
          </label>
          <label>
            Max Number of Ingredients
            <input type="number" id="maxNumIngredients"/>
          </label>
          <label>
            Diet
            <select id="diet">
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
      </div>
    )
  }
}

const buildQuery = (array) => {
  var length = array.length;
  var string = array[0];
  while (length != 1) {
    string = string + '%26' + array[i];
    length -= 1;
  }
  if (array.length != 1) {
    // append the last character
    string = string + array[array.length - 1];
  }
  return string;
}
