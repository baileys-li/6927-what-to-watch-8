import { Link, useLocation } from 'react-router-dom';

import style from './logo.module.scss';

const LOGO_LETTERS: Array<string> = ['W', 'T', 'W'];
const linkTitle = 'Go to Main Page';

type LogoType = {
  light?: boolean;
};

function Logo({ light = false }: LogoType): JSX.Element {
  const classes = `${style.link} ${light && style['link--light']}`;

  const lettersMarkup = LOGO_LETTERS.map((letter) => (
    <span className={style.letter} key={letter}>
      {letter}
    </span>
  ));
  const { pathname } = useLocation();

  return pathname === '/' ? (
    <abbr
      className={classes}
      role='img'
      aria-label='Logotype'
      title='What to Watchs'
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
