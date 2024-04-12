import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { ServerContext } from './services/serverContext';

const serverData = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <ServerContext.Provider value={serverData}>
        <App />
      </ServerContext.Provider >
    </BrowserRouter >
  </React.StrictMode>,
  document.getElementById('root')
);







