// list des cartes

import React from 'react';
import PropTypes from 'prop-types';

import './reposResults.scss';

const ReposResults = ({ repos }) => (

  <main className="repos">
    <h1 className="repos-title">La recherche a donné 1159901 résultats</h1>
    <div className="repos-list">
      {repos.map((item) => (
        <ReposResults
          key={item.id}
          name={item.name}
          href={item.html_url}
          description={item.description}
        />
      ))}
    </div>
  </main>
);

ReposResults.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReposResults;
