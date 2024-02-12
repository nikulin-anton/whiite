import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';

import App from './app/app';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';

const router = createBrowserRouter([{ path: '/', element: <App /> }]);

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
