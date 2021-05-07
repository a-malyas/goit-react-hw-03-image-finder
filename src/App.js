import { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    isLoading: false,
    page: 1
  };

  componentDidMount() {
    const API_KEY = '20657531-55ab2713c33e5dcd49ca55cc6';
    const BASE_URL = 'https://pixabay.com/api/';
    this.setState({ isLoading: true });
    axios
    .get(`${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&page=${this.page}&per_page=12&image_type=photo&pretty=true`)
    .then(({data}) => this.setState({ images: data, isLoading: false, }))
    .catch (error => console.log(error));
    // .then(data => {
    //   this.page += 1;

    //   return data.hits;
    // });
  }

  onSubmit = (query) => {
    if (this.state.searchQuery === query) return;
    this.setState({
      searchQuery: query,
      images: [],
    });
  }

  render() {
    const { images, isLoading } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={images} isLoading={isLoading}/>;
      </div>
    );
  };
}

export default App;
