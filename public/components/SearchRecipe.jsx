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
