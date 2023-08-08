import { useLoaderData } from 'react-router-dom';

const Movie = () => {
  const movie = useLoaderData() as Array<{
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
  }>;

  console.log(movie);

  return (
    <div>
      <div></div>
    </div>
  );
};

export default Movie;
