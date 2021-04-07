// le search bar pour afficher les repos correspondant à la recherche

import React from 'react';
import PropTypes from 'prop-types';
import './searchBar.scss';

const SearchBar = ({ manageSubmit, value, setValue}) => (
  <form
    className="search"
    onSubmit={(event) => {
      event.preventDefault();

      manageSubmit();
    }}
  >
    <input
      type="text"
      placeholder="react"
      className="input-addSearch"
      value={value}
      onChange={(event) => {
        // console.log(event.target.value);
        setValue(event.target.value);
      }}
    />
  </form>
);

SearchBar.propTypes = {
  manageSubmit: PropTypes.func.isRequired,
  value: PropTypes.func.isRequired,
  // paramètre : nouvelle valeur
  setValue: PropTypes.func.isRequired,
};

export default SearchBar;
