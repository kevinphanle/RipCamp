import React from "react";
import SuggestionDropdown from "./suggestion_dropdown";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      city: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.suggestionDropdown = this.suggestionDropdown.bind(this);
    this.updateCity = this.updateCity.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.search === "") {
      const selectedCity = document.getElementById("city-search").value;
      this.setState({ city: selectedCity });
      this.props.updateFilter("search", this.state.city);
    } else {
      this.props.updateFilter("search", this.state.search);
    }
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value }, () => {
        const search_obj = { search: this.state.search };
        this.props.getSearchSuggestions(search_obj);
      });
    };
  }

  // updateCity(e) {
  //   this.setState({
  //     city: e.target.value
  //   });
  // }

  render() {
    return (
      <div className="searchbar-container">
        <form onSubmit={this.handleSubmit}>
          <div className="tb">
            <div className="td">
              <input
                type="text"
                placeholder="Find your favorite surf spot"
                onChange={this.update("search")}
                className="searchbar"
                value={this.state.search}
                id="search"
              />
            </div>

            <div className="td" id="city-drop">
              <select
                name="city"
                id="city-search"
                onChange={this.updateCity}
                defaultValue="City"
              >
                <option value="City" disabled>
                  City
                </option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Oahu">Oahu</option>
                <option value="Bay Area">Bay Area</option>
                <option value="Florida">Florida</option>
                <option value="Portugal">Portugal</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Australia">Australia</option>
              </select>
            </div>

            <div className="td" id="s-cover">
              <button
                type="submit"
                value="Find a spot"
                className="searchbar-btn"
              >
                <div id="s-circle" />
                <span />
              </button>
            </div>
          </div>
        </form>
        {this.suggestionDropdown()}
      </div>
    );
  }

  suggestionDropdown() {
    return this.state.search ? (
      <SuggestionDropdown suggestions={this.props.suggestions} />
    ) : null;
  }
}

export default SearchBar;
