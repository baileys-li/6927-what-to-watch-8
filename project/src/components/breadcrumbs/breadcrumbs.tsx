import style from './breadcrumbs.module.scss';

function Breadcrumbs(): JSX.Element {
  return (
    <nav className={style.breadcrumbs}>
      <ul className={style.breadcrumbs__list}>
        <li className={style.breadcrumbs__item}>
          <a href='film-page.html' className={style.breadcrumbs__link}>
            The Grand Budapest Hotel
          </a>
        </li>
        <li className={style.breadcrumbs__item}>
          <a className={style.breadcrumbs__link}>Add review</a>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
