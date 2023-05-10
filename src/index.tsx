import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app/App';

import './index.scss';
import { PokemonContextProvider } from './context/pokemon.context.provider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PokemonContextProvider>
      <Router>
        <App />
      </Router>
    </PokemonContextProvider>
  </React.StrictMode>
);
