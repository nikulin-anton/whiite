import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../app';
import BaseLoader from '../components/Base/BaseLoader';

const TransactionsPage = lazy(() => import('../pages/Transactions'));
const MainPage = lazy(() => import('../pages/Main'));

export default createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: (
          <Suspense fallback={<BaseLoader />}>
            <MainPage />
          </Suspense>
        ),
        index: true,
      },
      {
        path: '/transactions',
        element: (
          <Suspense fallback={<BaseLoader />}>
            <TransactionsPage />
          </Suspense>
        ),
      },
    ],
  },
]);
