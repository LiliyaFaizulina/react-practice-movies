import styled from 'styled-components';

export const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;

export const GalleryItem = styled.li`
  padding: 10px;
  width: calc((100% - 100px) / 4);
  box-shadow: 0px 2px 5px 3px rgba(0, 0, 0, 0.75);
`;

export const MovieTitle = styled.h2`
  font-size: 20px;
  color: #d0d05c;
  text-align: center;
  margin-bottom: 10px;
`;

export const Votes = styled.p`
  font-size: 18px;
  color: #439943;
  text-align: center;
  margin-bottom: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Btn = styled.button`
  padding: 5px 10px;
  background-color: #439943;
  color: blue;
`;

export const DeleteBtn = styled.button`
  padding: 5px 10px;
  background-color: #1d307c;
  color: #439943;
`;
