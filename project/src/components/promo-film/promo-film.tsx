import Button from '../button/button';
import SpriteIcon from '../sprite-icon/sprite-icon';
import Header from '../header/header';
import ReviewForm from '../review-form/review-form';
import Overview from './overview';
import MovieRating from './movie-rating/movie-rating';
import style from './promo-film.module.scss';

import type MovieType from '../../types/movie-type';
import type LinkType from '../../types/link';

type PromoFilmProps = {
  movie: MovieType;
  full?: boolean;
  review?: boolean;
};

const NAV_ITEMS = ['Overview', 'Details', 'Reviews'];

function PromoFilm({
  movie,
  full = false,
  review = false,
}: PromoFilmProps): JSX.Element {
  const breadcrumbs: Array<LinkType> = [
    { href: '/films', text: movie.name },
    { text: 'Add review' },
  ];
  const description = (
    <div className={style['film-card__desc']}>
      <h2 className={style['film-card__title']}>{movie.name}</h2>
      <p className={style['film-card__meta']}>
        <span className={style['film-card__genre']}>{movie.genre}</span>
        <span className={style['film-card__year']}>{movie.released}</span>
      </p>

      <div className={style.buttons}>
        <Button href='/player'>
          <SpriteIcon id='play-s' width={19} />
          Play
        </Button>
        <Button>
          <SpriteIcon id='add' width='19' height='20' />
          My list
        </Button>
        {full && <Button href='/review'>Add review</Button>}
      </div>
    </div>
  );

  const poster = (
    <div
      className={`${style['film-card__poster']}
        ${full && style['film-card__poster--big']}
        ${review && style['film-card__poster--small']}
      }`}
    >
      <img src={movie.poster} alt='Poster' width='218' height='327' />
    </div>
  );

  return (
    <section
      className={`${style.wrapper} ${style.overlay} ${
        (full || review) && style['wrapper--full']
      }`}
      style={
        full || review ? {} : { backgroundImage: `url(${movie.background})` }
      }
    >
      {review && (
        <>
          <div
            className={style.overlay}
            style={{
              backgroundImage: `url(${movie.background})`,
            }}
          >
            <Header
              headline='What to Watch'
              className={style.head}
              breadcrumbs={breadcrumbs}
              hiddenHeadline
            />
            {poster}
          </div>
          <ReviewForm />
        </>
      )}
      {full && (
        <>
          <div
            className={`${style.hero} ${style.overlay}`}
            style={{
              backgroundImage: `url(${movie.background})`,
            }}
          >
            <Header
              headline='What to Watch'
              className={style.head}
              hiddenHeadline
            />
            <div className={style['film-card__wrap']}>{description}</div>
          </div>
          <div
            className={`${style['film-card__wrap']} ${style['film-card__translate-top']}`}
          >
            <div className={style['film-card__info']}>
              {poster}
              <div className={style['film-card__desc']}>
                <nav className={`film-nav ${style['film-card__nav']}`}>
                  <ul className='film-nav__list'>
                    {NAV_ITEMS.map((nav, index) => (
                      <li
                        className={`film-nav__item ${
                          index === 0 && 'film-nav__item--active'
                        } `}
                        key={nav}
                      >
                        <a href='#' className='film-nav__link'>
                          {nav}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <MovieRating
                  rating={movie.rating}
                  scoresCount={movie.scoresCount}
                />

                <Overview
                  description={movie.description}
                  starring={movie.starring}
                  director={movie.director}
                />
              </div>
            </div>
          </div>
        </>
      )}

      {!(full || review) && (
        <>
          <Header
            headline='What to Watch'
            className={style.head}
            hiddenHeadline
          />
          <div className={style['film-card__wrap']}>
            <div className={style['film-card__info']}>
              {poster}

              {description}
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default PromoFilm;
