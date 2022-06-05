import React from 'react';
import ReactDOM from 'react-dom/client';

import { TailwindLab } from './TailwindLab';

import './normalize.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TailwindLab />
  </React.StrictMode>
);

