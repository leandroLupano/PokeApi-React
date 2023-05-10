import { PokemonApiRepo } from '../../services/repository/pokemon.api.repo';
import { AppRouter } from '../app.router/app.router';
import Footer from '../footer/footer';
import Header from '../header/header';

function App() {
  const repo = new PokemonApiRepo();
  repo.loadAllPokemon();

  return (
    <div className="App">
      <Header></Header>
      <AppRouter></AppRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
