import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './routes/App.tsx';
import './index.css';
import ErrorPage from './error-page.tsx';
import Movie from './routes/Movie.tsx';
import { client } from './lib/sanity.query.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/movie/:movieSlug',
    element: <Movie />,
    loader: async ({ params }) => {
      return await client.fetch(`*[_type=='movie' && slug.current=='${params.movieSlug}' && !(_id match "drafts*")] {
        castMembers[]{ characterName, 'realName': person->name, "imageUrl": person->image.asset->url },
        crewMembers[]{ job, 'name': person->name },
        'overview': overview[0].children[0].text,
        popularity,
        'posterAsset': poster.asset->url,
        releaseDate,
        title,
      }`);
    },
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
