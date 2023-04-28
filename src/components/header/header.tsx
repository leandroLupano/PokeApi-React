import { Link } from 'react-router-dom';
import style from './header.style.module.scss';
import NavMenu from '../nav.menu/nav.menu';

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.headerLogo}>
        <Link to="/home">
          <img
            className={style.headerLogoImg}
            src="./images/pokeapi-logo.png"
            alt="poke-api-logo"
          />
        </Link>
      </div>

      <div className={style.headerNavMenu}>
        <NavMenu></NavMenu>
      </div>
    </header>
  );
}
