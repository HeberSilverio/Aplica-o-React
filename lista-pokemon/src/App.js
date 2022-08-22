import './components/ListaPokemons'
import './scss/main.scss';


function App() {

    return (
      <div className="container">
         <h1>Lista Pokemon</h1>
         <ul data-js="pokedex" className="pokedex"></ul>
      </div>
      
  );
}


export default App;

