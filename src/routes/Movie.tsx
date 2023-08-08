import { useLoaderData } from 'react-router-dom';

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

  return (
    <div>
      <div></div>
    </div>
  );
};

export default Movie;
