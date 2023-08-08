import { useEffect, useState } from 'react';
import { client } from '../lib/sanity.query';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState([]);

  type Movie = {
    releaseDate: string;
    title: string;
    slug: {
      current: 'string';
    };
    poster: {
      asset: {
        url: 'string';
      };
    };
  };

  const getMovies = async () => {
    const data = await client.fetch(`*[_type == "movie"] {
      releaseDate,
      title,
      slug {
        current
      },
      poster {
        asset-> {
          url
        }
      }
  }`);
    setMovies(data);
  };

  useEffect(() => {
    getMovies().catch(console.error);
  }, []);

  const Header = styled.h1`
    margin: 20px auto;
    padding: 0 40px;
    text-align: center;
    max-width: 1480px;
    @media (min-width: 930px) {
      text-align: left;
    }
  `;
  const List = styled.div`
    margin: 20px auto;
    margin-bottom: 50px;
    padding: 0 40px;
    display: grid;
    gap: 20px;
    max-width: 1480px;
    @media (max-width: 680px) {
      align-items: center;
      justify-content: center;
    }
    @media (min-width: 680px) {
      grid-template-columns: auto auto;
    }
    @media (min-width: 930px) {
      grid-template-columns: auto auto auto;
    }
    @media (min-width: 1250px) {
      grid-template-columns: auto auto auto auto;
    }
  `;
  const Card = styled.div`
    border: 2px solid white;
    border-radius: 10px;
    padding: 25px 20px;
    text-align: center;
    cursor: pointer;
    max-width: 300px;
    @media (max-width: 680px) {
      width: 100vw;
    }
  `;
  const Image = styled.img`
    max-height: 40vh;
    margin: auto;
  `;
  const Title = styled.div`
    font-weight: bold;
    font-size: 18px;
    margin: 10px 0;
  `;
  const ReleaseDate = styled.div``;

  return (
    <>
      <Header>Movie List</Header>

      <List>
        {movies.length == 0 && <div>Loading...</div>}
        {movies.length != 0 &&
          movies.map((movie: Movie) => {
            const d = new Date(movie.releaseDate);
            return (
              <Link key={movie.slug.current} to={`/movie/${movie.slug.current}`}>
                <Card>
                  <Image alt={movie.slug.current} src={movie.poster.asset.url} />
                  <Title>{movie.title} </Title>
                  <ReleaseDate>{d.getFullYear()}</ReleaseDate>
                </Card>
              </Link>
            );
          })}
      </List>
    </>
  );
}

export default App;
