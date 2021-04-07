// list des cartes

import React from 'react';
import PropTypes from 'prop-types';


import './reposResults.scss';

const ReposResults = ({items}) => (

  <ul className="article">
    {item.map((item) => (
   <img src="jzejcd" alt="Image de repos" className="article__figure__image">
    <caption className="article__figure__caption">
    <h4 className="article__caption">
      {item.name}
    </h4>
    <h3 className="article__lien">
      {item.html_url}
    </h3>
    <p className="article__desc">
      {item.description}
    </p>
   </caption>
      ))}

  </ul> 

);

ReposResults.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};


export default ReposResults;
