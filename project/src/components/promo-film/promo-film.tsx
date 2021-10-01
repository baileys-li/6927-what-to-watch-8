import Button from '../button/button';
import SpriteIcon from '../sprite-icon/sprite-icon';
import Header from '../header/header';
import style from './promo-film.module.scss';

import type PromoFilmType from '../../types/promo-film-type';

type PromoFilmProps = {
  movie: PromoFilmType;
};

function PromoFilm({ movie }: PromoFilmProps): JSX.Element {
  return (
    <section
      className={style.wrapper}
      style={{
        backgroundImage: `url(${movie.background})`,
      }}
    >
      <Header headline='What to Watch' className={style.head} hiddenHeadline />
      <div className={style['film-card__wrap']}>
        <div className={style['film-card__info']}>
          <div className={style['film-card__poster']}>
            <img src={movie.poster} alt='Poster' width='218' height='327' />
          </div>

          <div className={style['film-card__desc']}>
            <h2 className={style['film-card__title']}>{movie.title}</h2>
            <p className={style['film-card__meta']}>
              <span className={style['film-card__genre']}>{movie.genre}</span>
              <span className={style['film-card__year']}>{movie.year}</span>
            </p>

            <div className={style.buttons}>
              <Button>
                <SpriteIcon id='play-s' width={19} />
                Play
              </Button>
              <Button>
                <SpriteIcon id='add' width='19' height='20' />
                My list
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoFilm;
