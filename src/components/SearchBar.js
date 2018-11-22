import React from 'react';

class SearchBar extends React.Component {

  state = { term: '' };

  handleChange = (event) => {
    this.setState({
      term: event.target.value
    })
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    // To do: make sure we call callback from parent component
    this.props.onFormSubmit(this.state.term);

  }

  render() {
    return <div className="search-bar ui segment">
      <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="field">
          <label> Video Label</label>
          <input type="text" value={this.state.term}
            onChange={this.handleChange}
            />
        </div>
      </form>
    </div>
  }
}

export default SearchBar;
