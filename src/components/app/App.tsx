import { PokemonApiRepo } from '../../services/repository/pokemon.api.repo';

function App() {
  const repo = new PokemonApiRepo();
  repo.loadPokemon();

  return (
    <div className="App">
      <header className="App-header">
        <h1>In progress...</h1>
      </header>
    </div>
  );
}

export default App;
