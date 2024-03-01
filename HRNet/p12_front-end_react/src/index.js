import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'; // Correction de l'import

import App from './app/App.js';

// Création de l'élément 'plugin-container' à l'intérieur de 'root'
const rootElement = document.getElementById('root');
const pluginContainerElement = document.createElement('div');
pluginContainerElement.id = 'plugin-container';
rootElement.appendChild(pluginContainerElement);

// Créez la racine de rendu pour votre application
const root = createRoot(pluginContainerElement);

// Rendu de l'application dans l'élément avec l'ID 'plugin-container'
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
