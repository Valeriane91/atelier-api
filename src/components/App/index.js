// == Import npm
import React from 'react';

// == Import
import SearchBar from 'src/components/SearchBar';
import ReposResults from 'src/components/ReposeResults';
import Message from 'src/components/Message';

// import des données
import reposList from 'src/data/repos';

import './styles.css';

// == Composant
class App extends React.Component {

  constructor(props) {
    // on appelle le constructeur de React.Component en fournissant les props
    super(props);

    // on crée le state du composant (objet)
    this.state = {
      // indique si les devises sont affichées
      items: reposList,
    };
  }


  render() {
    
    const { items } = this.state;


    return (

      <div className="app">
        <SearchBar />
        <ReposResults items={items} />
        <Message />

      </div>
    );
  }
}

// == Export
export default App;
