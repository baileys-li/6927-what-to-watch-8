import { Link, useLocation } from 'react-router-dom';

import style from './logo.module.scss';
const linkTitle = 'Go to Main Page';

type LogoType = {
  light?: boolean;
};

function Logo({ light = false }: LogoType): JSX.Element {
  const classes = `${style.link} ${light && style['link--light']}`;

  const lettersMarkup = [0,1,2].map((index) => (
    <span className={style.letter} key={index}>
      {index === 1 ? 'T' : 'W'}
    </span>
  ));
  const { pathname } = useLocation();

  return pathname === '/' ? (
    <abbr
      className={classes}
      role='img'
      aria-label='Logotype'
      title='What to Watch'
    >
      {lettersMarkup}
    </abbr>
  ) : (
    <Link to='/' className={classes} aria-label={linkTitle} title={linkTitle}>
      {lettersMarkup}
    </Link>
  );
}

export default Logo;
