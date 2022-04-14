import { Component } from 'react';
import "./styles.css";
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Loader from './Loader';

export class App extends Component {
  state = {
    searchName: "",
    gallery: [],
    page: 1,
    totalItems: 0,
    isLoading: false
}
    
componentDidMount() {

}
componentDidUpdate(_, prevState) {
  if (prevState.searchName !== this.state.searchName || prevState.page !== this.state.page) {
    console.log("Новый запрос");
    this.handleQuery();
  }
}
handleQuery() {
  const URL = "https://pixabay.com/api/";
  const key = "25089539-92235f01f3468a6ac8c56a646";
  const { page, searchName } = this.state;
  this.setState({ isLoading: true });
  fetch(`${URL}?q=${searchName}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(resp => resp.json())
    .then(gallery => {
      this.state.gallery.length === 0 ?
      this.setState({ gallery: gallery.hits, totalItems: gallery.totalHits, isLoading: false }) :
      this.setState(prev => ({ gallery: [...prev.gallery, ...gallery.hits], isLoading: false }));
    })
}
  onSubmit = (evt) => {
    evt.preventDefault();
    this.setState({ searchName: evt.target.elements.searchName.value, page: 1, gallery: [] });
  }
  loadMore = () => { 
    this.setState(prev => ({page: prev.page+=1}))
  }
  render() {
    console.log("Рендер");
      return (
    <div>
      <Searchbar onSubmit={this.onSubmit} />
      {this.state.isLoading && <Loader/>}
      {this.state.gallery.length !== 0 ?
            <ImageGallery gallery={this.state.gallery} page={this.state.page} totalItems={ this.state.totalItems} loadMore={this.loadMore} /> :
        <p>Input search name in the field above</p>
      }

    </div>
  );
  }
}