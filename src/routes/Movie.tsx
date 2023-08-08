import styled from '@emotion/styled';
import { useLoaderData } from 'react-router-dom';
import starLogo from '../assets/star.svg';

const Movie = () => {
  type MovieType = {
    popularity: number;
    posterAsset: string;
    releaseDate: string;
    title: string;
    overview: string;
    castMembers: Array<{
      characterName: string;
      realName: string;
      imageUrl: string;
    }>;
    crewMembers: Array<{
      job: string;
      name: string;
    }>;
  };
  const movie: MovieType = (useLoaderData() as Array<MovieType>)[0];

  const Container = styled.div`
    margin: 30px 100px;
    @media (min-width: 1180px) {
      margin: 50px 200px;
    }
  `;
  const MovieName = styled.h1`
    text-decoration: underline;
    text-align: center;
    max-width: 600px;
    @media (max-width: 1000px) {
      margin: 40px auto;
    }
    @media (min-width: 1000px) {
      text-align: left;
    }
  `;
  const MovieInfo = styled.div`
    display: grid;
    gap: 30px;
    justify-content: center;
    @media (min-width: 1000px) {
      grid-template-columns: 1fr 2fr;
    }
  `;
  const PosterContainer = styled.div`
    width: 500px;
    display: flex;
    justify-content: center;
  `;
  const Poster = styled.img`
    width: 400px;
  `;

  const DetailContainer = styled.div`
    @media (max-width: 1000px) {
      max-width: 500px;
    }
  `;
  const Popularity = styled.h3`
    display: flex;
    gap: 10px;
    align-items: center;
  `;

  return (
    <Container>
      <MovieName>{movie.title}</MovieName>
      <MovieInfo>
        <PosterContainer>
          <Poster src={movie.posterAsset} alt={movie.title} />
        </PosterContainer>
        <DetailContainer>
          <Popularity>
            <img src={starLogo} alt="star" width={25} height={25} />
            {movie.popularity.toFixed(2)}
          </Popularity>
          <div>
            <p style={{ fontWeight: 'bold' }}>Overview</p>
            <p>{movie.overview}</p>
          </div>
        </DetailContainer>
      </MovieInfo>
    </Container>
  );
};

export default Movie;
