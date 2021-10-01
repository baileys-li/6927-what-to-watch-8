import Logo from '../logo/logo';
import style from './promo-film.module.scss';

type PromoFilmType = {
  title: string;
  background: string;
  poster: string;
  genre: string;
  year: number | string;
};

function PromoFilm({
  title,
  background,
  poster,
  genre,
  year,
}: PromoFilmType): JSX.Element {
  return (
    <section
      className={style.wrapper}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <h1 className='visually-hidden'>What to Watch</h1>

      <header className={`page-header ${style.head}`}>
        <Logo />

        <ul className='user-block'>
          <li className='user-block__item'>
            <div className='user-block__avatar'>
              <img
                src='img/avatar.jpg'
                alt='User avatar'
                width='63'
                height='63'
              />
            </div>
          </li>
          <li className='user-block__item'>
            <a className='user-block__link'>Sign out</a>
          </li>
        </ul>
      </header>

      <div className={style['film-card__wrap']}>
        <div className={style['film-card__info']}>
          <div className={style['film-card__poster']}>
            <img src={poster} alt='Poster' width='218' height='327' />
          </div>

          <div className={style['film-card__desc']}>
            <h2 className={style['film-card__title']}>{title}</h2>
            <p className={style['film-card__meta']}>
              <span className={style['film-card__genre']}>{genre}</span>
              <span className={style['film-card__year']}>{year}</span>
            </p>

            <div className={style['film-card__buttons']}>
              <button className='btn btn--play film-card__button' type='button'>
                <svg viewBox='0 0 19 19' width='19' height='19'>
                  <use href='sprite.svg#play-s'></use>
                </svg>
                <span>Play</span>
              </button>
              <button className='btn btn--list film-card__button' type='button'>
                <svg viewBox='0 0 19 20' width='19' height='20'>
                  <use href='sprite.svg#add'></use>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoFilm;
