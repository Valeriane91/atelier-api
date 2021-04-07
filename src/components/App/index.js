// == Import npm
import React from 'react';

// == Import
import SearchBar from 'src/components/SearchBar';
import ReposeResults from 'src/components/ReposeResults';
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
      open: true,
    };
  }

  // indique si les devises sont affichées

  render() {
  /*
    if (a > 2 && b < 5) {
      faire quelque chose
    }
    Javascript sait que pour que la condition complète soit vraie, il faut que les
    deux sous-conditions soient vraies.
    Donc s'il voit que la première sous-condition est fausse il sait que la
    condition complète sera fausse, donc il s'arrête là, il n'évalue pas la
    deuxième sous-condition
  */

    /*
    Affichage conditionnel d'un composant en JSX :
    {open === true && <Currencies currencies={currenciesList} />}
       => si open est faux, la suite est ignorée, donc Currencies n'est pas affiché
       => si open est vrai, la suite est interprétée, donc Currencies se retrouve
      affiché
    Ici open est un booléen, on peut simplifier :
    {open && <Currencies currencies={currenciesList} />}
  */

    /** return (
    <div className="app">
      <Header />
      {open && <Currencies currencies={currenciesList} />}
      <Amount />
    </div>
  ); */

    return (

      <div className="app">
        <SearchBar />
        <ReposeResults />
        <Message />

      </div>
    );
  }
}

// == Export
export default App;
