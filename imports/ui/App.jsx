import React from 'react';
import { BodyHeader } from './BodyHeader.jsx';
import { BodyFooter } from './BodyFooter.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => (
  <div>
    <BodyHeader />
    <h1>Welcome to Bioconductor!</h1>
    <BodyFooter />
  </div>
);
