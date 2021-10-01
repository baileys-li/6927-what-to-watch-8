import style from './logo.module.scss';

const LOGO_LETTERS: Array<string> = ['W', 'T', 'W'];

type LogoType = {
  light?: boolean;
};

function Logo({ light = false }: LogoType): JSX.Element {
  return (
    <a className={`${style.link} ${light && style['link--light']} `}>
      {LOGO_LETTERS.map((letter) => (
        <span className={style.letter} key={letter}>
          {letter}
        </span>
      ))}
    </a>
  );
}

export default Logo;
