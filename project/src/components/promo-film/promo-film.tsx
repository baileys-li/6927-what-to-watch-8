import ReviewForm from '../review-form/review-form';
import Overview from './overview';
import MovieRating from './movie-rating/movie-rating';
import Tabs from '../tabs/tabs';
import MovieDescription from './movie-description/movie-description';
import MovieDetails from './movie-details/movie-details';
import MovieReviews from './movie-reviews/movie-reviews';

import style from './promo-film.module.scss';

import type LinkType from '../../types/link';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import { rewriteAll } from '../../store/slice/breadcrumbsStore';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

type PromoFilmProps = {
  full?: boolean;
  review?: boolean;
};

const NAV_ITEMS = ['Overview', 'Details', 'Reviews'];

function PromoFilm({
  full = false,
  review = false,
}: PromoFilmProps): JSX.Element {
  const { movie, error, isLoading } = useSelector(
    (state: RootState) => state.promo,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (movie && review) {
      const breadcrumbs: Array<LinkType> = [
        { href: `/films/${movie.id}`, text: movie.name },
        { text: 'Add review' },
      ];
      dispatch(rewriteAll(breadcrumbs));
    }
  }, [dispatch, movie, review]);

  if (error) {
    return <Navigate to='/404' />;
  }

  if (isLoading || movie === null) {
    return <div>Loading...</div>;
  } else {
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
        className={`${style.wrapper} ${full || review ? style['wrapper--full'] : style.overlay}`}
        style={
          {
            '--back-image': `url(${movie.backgroundImage})`,
            '--back-color': `${movie.backgroundColor}`,
          } as React.CSSProperties
        }
      >
        {review && (
          <>
            <div className={[style.overlay, style.review].join(' ')}>
              {poster}
            </div>
            <ReviewForm />
          </>
        )}
        {full && (
          <>
            <div className={`${style.hero} ${style.overlay}`}>
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

                <MovieReviews />
              </Tabs>
            </div>
          </>
        )}

        {!(full || review) && (
          <div className={style['film-card__wrap']}>
            {poster}

            {description}
          </div>
        )}
      </section>
    );
  }
}

export default PromoFilm;
