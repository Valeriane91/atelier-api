// le search bar pour afficher les repos correspondant à la recherche

import React from 'react';
import PropTypes from 'prop-types';
import './searchBar.scss';

const SearchBar = () => (
  <search className="searchBar">
    <h1 className="header-title">Converter</h1>
    <p className="header-amount">1 euro</p>
  </search>
);


SearchBar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      xxx: PropTypes.string.isRequired,
      // facultatif de valider les propriétés qu'on n'utilise
    }).isRequired,
  ).isRequired,

export default SearchBar;
