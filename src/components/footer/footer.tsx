import style from './footer.style.module.scss';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerCopyright}>
        <p>Copyright © Leandro Lupano - All rights reserved</p>
      </div>

      <div className={style.footerFollowUs}>
        <a href="https://www.linkedin.com/in/leandrolupano/">
          <img src="./images/linkedin.png" alt="linkedin logo" />
        </a>
        <a href="https://github.com/leandroLupano/">
          <img src="./images/github.png" alt="github logo" />
        </a>
      </div>
    </footer>
  );
}
