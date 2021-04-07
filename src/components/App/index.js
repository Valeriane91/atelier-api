// == Import npm
import React from 'react';

// == Import
import SearchBar from 'src/components/SearchBar';
import ReposResults from 'src/components/ReposResults';
import Message from 'src/components/Message';

// import des données
import reposList from 'src/data/repos';

import './styles.scss';

// == Composant
class App extends React.Component {
  constructor(props) {
    // on appelle le constructeur de React.Component en fournissant les props
    super(props);

    // on crée le state du composant (objet)
    this.state = {
      // indique si les devises sont affichées
      items: reposList,
      // le contenu de l'input pour ajouter une tâche
      inputReposLabel: '',
    };
    // ajout du champs controlé

    this.setInputReposLabel = this.setInputReposLabel.bind(this);
    this.addSearch = this.addSearch.bind(this);
  }

  // modifier la valeur de inputTaskLabel dans le state
  setInputReposLabel(newValue) {
    this.setState({
      inputReposLabel: newValue,
    });
  }

  addSearch() {
    const { inputReposLabel } = this.state;
    console.log('on va ajouter une tâche, label= ', inputReposLabel);
  }

  render() {
    const { items, inputReposLabel } = this.state;

    return (

      <div className="app">
        <SearchBar
          manageSubmit={this.addSearch}
          value={inputReposLabel}
          setValue={this.setInputReposLabel}
        />
        <ReposResults items={items} />
        <Message />
      </div>
    );
  }
}

// == Export
export default App;
