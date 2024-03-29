import React from 'react';
import  { createRoot } from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.scss';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

const rootElement = document.querySelector('#root');

if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/lottery-react">
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
