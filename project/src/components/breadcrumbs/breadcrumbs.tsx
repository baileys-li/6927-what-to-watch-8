import Logo from '../logo/logo';
import style from './breadcrumbs.module.scss';

function Breadcrumbs(): JSX.Element {
  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        <li className={style.logo}>
          <Logo />
        </li>
        <li className={style.item}>
          <a href='/films' className={style.link}>
            The Grand Budapest Hotel
          </a>
        </li>
        <li className={style.item}>
          <a className={style.link}>Add review</a>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
