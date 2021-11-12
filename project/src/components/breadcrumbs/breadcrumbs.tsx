import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
import style from './breadcrumbs.module.scss';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';

type BreadcrumbsType = {
  className?: string;
};

function Breadcrumbs({ className }: BreadcrumbsType): JSX.Element {
  const { list } = useSelector((state: RootState) => state.breadcrumbs);

  return (
    <nav className={`${style.nav} ${className}`}>
      <ul className={style.list}>
        <li className={style.logo}>
          <Logo />
        </li>
        {list && list.map((link) => (
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
