import React from 'react';
import { BodyHeader } from './BodyHeader.jsx';
import { BodyFooter } from './BodyFooter.jsx';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';

export const App = () => (
  <div>
    <BodyHeader />
    <h1>Welcome to Bioconductor!</h1>
    <BodyFooter />
  </div>
);
