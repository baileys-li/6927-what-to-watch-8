import style from './logo.module.scss';

const LOGO_LETTERS: Array<string> = ['W', 'T', 'W'];

type LogoType = {
  isLight?: boolean;
};

function Logo({ isLight = false }: LogoType): JSX.Element {
  return (
    <a className={`${style.link} ${isLight && style.light} `}>
      {LOGO_LETTERS.map((letter) => (
        <span className={style.letter} key={letter}>
          {letter}
        </span>
      ))}
    </a>
  );
}

export default Logo;
