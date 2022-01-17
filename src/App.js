import { useState } from "react";
import { ToastContainer } from "react-toastify";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Searchbar from "./components/Searchbar/Searchbar";
import { MainContainer } from "./App.styled";

export default function App() {
  const [currentSearch, setCurrentSearch] = useState('');
  const [page, setPage] = useState(1);

  const onSubmit = (event) => {
    setCurrentSearch(event);
    setPage(1);
  };

   const setNextPage = nextPage => {
    setPage(page => page + nextPage);
  };

  return (
    <MainContainer>
      <Searchbar onSubmit={onSubmit} />

      <ImageGallery
        query={currentSearch}
        page={page}
        setPage={setNextPage}
      />

      <ToastContainer />
    </MainContainer>
  );
}

// export default class App extends Component {
//   state = {
//     currentSearch: "",
//   };

//   onSubmit = (event) => {
//     this.setState({ currentSearch: event });
//     console.log(event);
//   };

//   render() {
//     return (
//       <MainContainer>
//         <Searchbar onSubmit={this.onSubmit} />

//         <ImageGallery query={this.state.currentSearch} />

//         <ToastContainer />
//       </MainContainer>
//     );
//   }
// }
