import { Component } from "react";
import { ToastContainer } from "react-toastify";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Searchbar from "./components/Searchbar/Searchbar";
import { MainContainer } from "./App.styled";

export default class App extends Component {
  state = {
    currentSearch: "",
  };

  onSubmit = (event) => {
    this.setState({ currentSearch: event });
    console.log(event);
  };

  render() {
    return (
      <MainContainer>
        <Searchbar onSubmit={this.onSubmit} />

        <ImageGallery query={this.state.currentSearch} />

        <ToastContainer />
      </MainContainer>
    );
  }
}
