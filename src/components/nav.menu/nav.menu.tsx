import { Link } from 'react-router-dom';
import { navMenuOptions } from '../app.router/nav.menu.options';
import style from './nav.menu.style.module.scss';
import { useState } from 'react';

export default function NavMenu() {
  const navMenuOptionsArray = navMenuOptions;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={style.navMenu}>
      <div className={style.navMenuBurgerMenu} onClick={handlerClick}>
        <img src="./images/burger-menu-black.png" alt="Burger menu" />
      </div>

      <div
        className={
          isMenuOpen ? style.navMenuOptionsOpen : style.navMenuOptionsClose
        }
      >
        <ul className={style.navMenuOptionsList}>
          {navMenuOptionsArray.map((item) => (
            <li key={item.label} onClick={handlerClick}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
