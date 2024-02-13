import { StrictMode, Suspense, lazy } from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './app/app';
import { store } from './app/store';
import BaseLoader from './app/components/Base/BaseLoader';

const TransactionsPage = lazy(() => import('./app/pages/Transactions'));
const MainPage = lazy(() => import('./app/pages/Main'));

const router = createBrowserRouter([
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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
