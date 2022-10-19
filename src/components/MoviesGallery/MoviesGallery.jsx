import {
  Gallery,
  GalleryItem,
  MovieTitle,
  Votes,
  Btn,
  DeleteBtn,
  Wrapper,
} from './MoviesGallery.styled';
export const MoviesGallery = ({ movies, deleteMovie, openModal }) => {
  return (
    <Gallery>
      {movies.map(({ id, title, votes, image }) => {
        return (
          <GalleryItem key={id}>
            <MovieTitle>{title}</MovieTitle>
            <Votes>Votes: {votes}</Votes>
            <Wrapper>
              <Btn
                type="button"
                onClick={() => {
                  openModal({ src: image, alt: title });
                }}
              >
                Open poster
              </Btn>
              <DeleteBtn
                type="button"
                onClick={() => {
                  deleteMovie(id);
                }}
              >
                Delete
              </DeleteBtn>
            </Wrapper>
          </GalleryItem>
        );
      })}
    </Gallery>
  );
};
