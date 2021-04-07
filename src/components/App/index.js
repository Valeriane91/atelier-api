// == Import npm
import React, { useState } from 'react';

// == Import
import SearchBar from 'src/components/SearchBar';
import ReposResults from 'src/components/ReposResults';
import Message from 'src/components/Message';

import axios from 'axios';
// import des données
import reposData from 'src/data/repos';

import './styles.scss';

// == Composant
const App = () => {
// chargement de la liste des repos git
  const [repos, setRepos] = useState(reposData);

  const [inputReposLabel, setInputReposLabel] = useState([]);

  const addSearch = (newValue) => {
    setInputReposLabel(newValue);
  };

  axios.get('https://api.github.com/search/repositories?q=REPOACHERCHER')
    .then((response) => {
      // exécuté quand la réponse arrive, si la réponse est un succès
      console.log(response);

      // on stocke dans le state (dans la case pour les articles) les articles récupérés
      setRepos(response.data);
    })
    .catch((error) => {
      // exécuté quand la réponse arrive, si la réponse est un échec
      console.log(error);

      // TODO il faudrait afficher l'information à l'utilisateur
    })
    // on peut utiliser finally ou un deuxième then
    .finally(() => {
      // exécuté après traitement de la réponse (après then ou catch)
      console.log('finally');
    });

  console.log('On vient d\'envoyer la requête, on attend la réponse');
  };

  return (

    <div className="app">
      <SearchBar
        manageSubmit={addSearch}
        value={inputReposLabel}
        setValue={setInputReposLabel}
      />
      <ReposResults items={reposData} />
      <Message />
    </div>
  );

};

// == Export
export default App;
