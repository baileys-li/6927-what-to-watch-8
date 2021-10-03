import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
import style from './breadcrumbs.module.scss';

import type LinkType from '../../types/link';

type BreadcrumbsType = {
  links: Array<LinkType>;
};

function Breadcrumbs({ links }: BreadcrumbsType): JSX.Element {
  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        <li className={style.logo}>
          <Logo />
        </li>
        {links.map((link) => (
          <li className={style.item} key={link.text}>
            {link.href ? (
              <Link to={link.href} className={style.link}>
                {link.text}
              </Link>
            ) : (
              <span className={style.link}>{link.text}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
