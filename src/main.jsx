import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/app.scss';
import App from './App.jsx';
import store from './store/index.js';
import {RootStoreContext} from "./store/RootStoreContext.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RootStoreContext.Provider value={store}>
          <App />
      </RootStoreContext.Provider>
  </StrictMode>,
)
