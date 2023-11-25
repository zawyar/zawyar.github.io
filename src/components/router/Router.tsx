import {  Suspense,lazy } from 'react';
import {  RouteObject, useRoutes, BrowserRouter } from 'react-router-dom';
import DefaultLayout from '../Layouts/DefaultLayout';
import LoadingSpinner from '../misc/LoadingSpinner';
import About from '../screens/About/About';
import TabbedLayout from '../Layouts/TabbedLayout';
const IndexScreen = lazy(() => import('~/components/screens/Home/Index'));
const Page404Screen = lazy(() => import('~/components/screens/404'));

export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
};

const InnerRouter = () => {
  const routes: RouteObject[] = [
    {
      path: `/`,
      element: <DefaultLayout />,
      children: [
        {
          index: true,
          element: <IndexScreen />,
        },
        {
          path: '*',
          element: <Page404Screen />,
        },
      ],
    },
    {
      path: `/about`,
      element: <TabbedLayout />,
      children: [
        {
          index: true,
          element: <About />,
        },
      ],
    },
  ];
  const element = useRoutes(routes);
  return (
      <Suspense fallback={<LoadingSpinner />}>{element}</Suspense>
  );
};
