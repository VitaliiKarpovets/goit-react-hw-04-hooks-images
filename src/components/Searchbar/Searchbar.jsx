import { Component } from "react";
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import { SearchbarContainer, SearchBarForm, SearchBarFormButton, SearchBarFormInput } from "./Searchbar.styled";

export default class Searchbar extends Component {
  state = {
      query: '',
  };

  handleQueryChange = event => {
      this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.query.trim() === '') {
      toast.error('Please, enter a query.');
      return;
    }
      
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <SearchbarContainer>
        <SearchBarForm className="form" onSubmit={this.handleSubmit}>
          <SearchBarFormButton type="submit">
            <ImSearch/>
          </SearchBarFormButton>

          <SearchBarFormInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.query}
            onChange={this.handleQueryChange}
            placeholder="Search images and photos"
          />
        </SearchBarForm>
      </SearchbarContainer>
    )
  }
}
