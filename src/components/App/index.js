// == Import npm
import React, { useState } from 'react';

// == Import
import SearchBar from 'src/components/SearchBar';
import ReposResults from 'src/components/ReposResults';
import Message from 'src/components/Message';

// import des données
import reposList from 'src/data/repos';

import './styles.scss';

// == Composant
const App = () => {
  const [inputReposLabel, setInputReposLabel] = useState([]);

  const addSearch = (newValue) => {
    setInputReposLabel(newValue);
  };
  return (

    <div className="app">
      <SearchBar
        manageSubmit={addSearch}
        value={inputReposLabel}
        setValue={setInputReposLabel}
      />
      <ReposResults repos={reposList} />
      <Message />
    </div>
  );
};

// == Export
export default App;
