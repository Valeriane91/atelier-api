// list des cartes

import React from 'react';

import './reposeResults.scss';

const ReposeResults = () => (
  <div className="reposeresults">
    <div className="reposeresults-title">La recherche a donné 1159901 résultats</div>
    <ul>
      <li className="currency">
        freeCodeCamp
      </li>
      <li className="currency">
        react
      </li>
      <li className="currency">
        react-native
      </li>
    </ul>
  </div>
);

export default ReposeResults;
