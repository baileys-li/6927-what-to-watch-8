import Button from '../button/button';
import SpriteIcon from '../sprite-icon/sprite-icon';
import Header from '../header/header';
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
      <Header headline='What to Watch' className={style.head} hiddenHeadline />
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
