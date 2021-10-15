import { useParams } from 'react-router';
import useData from '../../hooks/useData';

import Header from '../header/header';
import ReviewForm from '../review-form/review-form';
import Overview from './overview';
import MovieRating from './movie-rating/movie-rating';
import Tabs from '../tabs/tabs';
import MovieDescription from './movie-description/movie-description';
import MovieDetails from './movie-details/movie-details';
import MovieReviews from './movie-reviews/movie-reviews';

import style from './promo-film.module.scss';

import type LinkType from '../../types/link';
import type MovieType from '../../types/movie-type';
import type RouteParams from '../../types/route-params-type';

import { EndPoint } from '../../const';
import { adaptFromSnakeToCamel } from '../../utils/adapter';

type PromoFilmProps = {
  full?: boolean;
  review?: boolean;
};

const NAV_ITEMS = ['Overview', 'Details', 'Reviews'];

function PromoFilm({
  full = false,
  review = false,
}: PromoFilmProps): JSX.Element {
  const { id } = useParams<RouteParams>();

  const target = id === undefined ? EndPoint.Promo : `/films/${id}`;

  const { isLoaded, error, response } = useData<MovieType>(target);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    const movie = adaptFromSnakeToCamel(response);

    const breadcrumbs: Array<LinkType> = [
      { href: `/films/${movie.id}`, text: movie.name },
      { text: 'Add review' },
    ];
    const description = (
      <MovieDescription
        movie={movie}
        className={style['film-card__desc']}
        review={full}
      />
    );
    const poster = (
      <img
        src={movie.posterImage}
        alt='Poster'
        width='218'
        height='327'
        className={`${style.poster}
      ${full ? style['poster--big'] : ''}
      ${review ? style['poster--small'] : ''}
    `}
      />
    );

    return (
      <section
        className={`${style.wrapper} ${
          full || review ? style['wrapper--full'] : style.overlay
        }`}
        style={
          {
            '--back-image': `url(${movie.backgroundImage})`,
            '--back-color': `${movie.backgroundColor}`,
          } as React.CSSProperties
        }
      >
        {review && (
          <>
            <div className={style.overlay}>
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
            <div className={`${style.hero} ${style.overlay}`}>
              <Header
                headline='What to Watch'
                className={style.head}
                hiddenHeadline
              />
              <div className={style['film-card__wrap']}>{description}</div>
            </div>
            <div
              className={`${style['film-card__wrap']} ${style['film-card__wrap--full']}`}
            >
              {poster}

              <Tabs navigation={NAV_ITEMS}>
                <>
                  <MovieRating
                    rating={movie.rating}
                    scoresCount={movie.scoresCount}
                  />

                  <Overview
                    description={movie.description}
                    starring={movie.starring}
                    director={movie.director}
                  />
                </>
                <MovieDetails movie={movie} />

                <MovieReviews id={movie.id} />
              </Tabs>
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
              {poster}

              {description}
            </div>
          </>
        )}
      </section>
    );
  }
}

export default PromoFilm;
