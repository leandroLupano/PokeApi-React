import style from './home.style.module.scss';

export default function Home() {
  return (
    <section className={style.home}>
      <h1 className={style.homeTitle}>
        <img src="./images/pokedex-logo.png" alt="PokeDex Logo" />
      </h1>

      <p className={style.homeSubTitle}>Welcome to React PokéDex!</p>
      <p className={style.homeMainText}>
        The ultimate resource for all things Pokemon. This website provides you
        with a comprehensive database of all Pokemon species, their moves,
        abilities, types, and more. Whether you're a seasoned trainer or a new
        fan, you'll find everything you need to know about the world of Pokemon
        right here on React PokéDex. Explore the website to discover fascinating
        facts and statistics about your favorite Pokemon. Get ready to catch 'em
        all with React PokéDex!
      </p>

      <p className={style.homePokeApiLink}>
        This website is built with the&nbsp;
        <a href="https://pokeapi.co/"> RESTful Pokémon API</a>
      </p>
      <img
        className={style.homePikachuImg}
        src="./images/pikachu.png"
        alt="Pikachu face"
      />
    </section>
  );
}
