import { Component } from 'react';

import { MoviesGallery } from './MoviesGallery/MoviesGallery';
import { mapper } from 'utils/mapper';
import { Modal } from './Modal/Modal';
import { fetchApi } from 'api/api';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Notification } from './Notification/Notification';
import { Container, Image } from './App.styled';

export class App extends Component {
  state = {
    movies: [],
    currentImage: null,
    page: 1,
    isLoading: false,
    error: null,
    isShown: false,
  };

  componentDidUpdate(_, prevState) {
    const { isShown, page } = this.state;
    if ((prevState.isShown !== isShown && isShown) || prevState.page !== page) {
      this.fetchMovies();
    }
  }

  deleteMovie = idMovie => {
    const updateMovies = this.state.movies.filter(({ id }) => id !== idMovie);
    this.setState({ movies: updateMovies });
  };

  updateCurrentImage = data => {
    this.setState({ currentImage: data });
  };

  closeModal = () => {
    this.setState({ currentImage: null });
  };

  showFilms = () => {
    if (this.state.isShown) {
      this.setState({ movies: [] });
    }
    this.setState(prevState => ({ isShown: !prevState.isShown }));
  };

  fetchMovies = () => {
    const { page } = this.state;
    this.setState({ isLoading: true });
    fetchApi(page)
      .then(response => {
        this.setState(prevState => ({
          movies: [...prevState.movies, ...mapper(response.data.results)],
        }));
      })
      .catch(error => {
        this.setState({ error: error.message });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { movies, currentImage, isShown, isLoading, error } = this.state;
    return (
      <>
        <Container>
          <Image
            src="https://observer.com/wp-content/uploads/sites/2/2021/05/summer-movies-2021-new-e1620919489437.jpg?quality=80"
            alt="Image"
          />
        </Container>

        <Button
          text={!isShown ? 'Show movies' : 'Hide movies'}
          handlerClick={this.showFilms}
        />
        {isShown && (
          <>
            <MoviesGallery
              movies={movies}
              deleteMovie={this.deleteMovie}
              openModal={this.updateCurrentImage}
            />
            {!isLoading && !error && (
              <Button text="Load more" handlerClick={this.loadMore} />
            )}
            {isLoading && <Loader />}
            {error && <Notification message={error} />}
          </>
        )}
        {currentImage && (
          <Modal image={currentImage} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}
