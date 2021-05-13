import { Component } from 'react';
import { fetchImages } from './services/api';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import './App.css';
import Button from './components/Button/Button';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    modalIsOpen: false,
    searchQuery: '',
    images: [],
    nextPage: 1,
    isLoading: false,
    page: 1
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) this.loadPage();
  }

  loadPage = () => {
    this.setState({ isLoading: true });
    fetchImages(this.state.searchQuery, this.state.nextPage)
      .then(newArray => this.setState(prevState => {
        return ({
          images: [...prevState.images, ...newArray],
          nextPage: prevState.nextPage + 1,
        })
      }))
      .catch(error => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
        if (this.state.nextPage > 2)
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
      })
  }

  onSubmit = (query) => {
    if (this.state.searchQuery === query) return;
    this.setState({
      searchQuery: query,
      images: [],
      largeImageURL: '',
    });
  };

  onThumbClick = (event) => {
    this.setState({
      modalIsOpen: true,
      largeImageURL: event.target.dataset.largeimageurl
    });
  }

  onModalClick = (event) => {
    if (event.target === event.currentTarget)
      this.setState({ modalIsOpen: false });
  }

  onEscClick = (event) => {
    if (event.code === 'Escape')
      this.setState({ modalIsOpen: false });
  }

  render() {
    const { modalIsOpen, largeImageURL, images, isLoading } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={images} onClick={this.onThumbClick} isLoading={isLoading} />
        {isLoading && (
          <div className="loader">
            <Loader
              type="Circles" color="#00BFFF" height={80} width={80}
            />
          </div>
        )}
        {images.length > 0 && <Button onClick={this.loadPage} />}
        {modalIsOpen && <Modal imageUrl={largeImageURL} onModalClick={this.onModalClick} onEscClick={this.onEscClick} />}
      </div>
    );
  };
}

export default App;
