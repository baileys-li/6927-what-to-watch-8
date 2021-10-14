import usePromo from '../../hooks/usePromo';
import Header from '../header/header';
import ReviewForm from '../review-form/review-form';
import Overview from './overview';
import MovieRating from './movie-rating/movie-rating';
import Tabs from '../tabs/tabs';
import Review from '../review/review';
import MovieDescription from './movie-description/movie-description';

import style from './promo-film.module.scss';

import type MovieType from '../../types/movie-type';
import type LinkType from '../../types/link';

type PromoFilmProps = {
  full?: boolean;
  review?: boolean;
};

const NAV_ITEMS = ['Overview', 'Details', 'Reviews'];

function PromoFilm({
  full = false,
  review = false,
}: PromoFilmProps): JSX.Element {
  const [isLoaded, error, promo] = usePromo();

  console.log(isLoaded, error, promo);


  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const breadcrumbs: Array<LinkType> = [
    { href: '/films', text: promo.name },
    { text: 'Add review' },
  ];
  const description = (
    <MovieDescription
      movie={promo}
      className={style['film-card__desc']}
      review={full}
    />
  );

  const poster = (
    <div
      className={`${style['film-card__poster']}
        ${full && style['film-card__poster--big']}
        ${review && style['film-card__poster--small']}
      }`}
    >
      <img
        src={promo.posterImage.replace('7.', '8.')}
        alt='Poster'
        width='218'
        height='327'
      />
    </div>
  );

  return (
    <section
      className={`${style.wrapper} ${style.overlay} ${
        (full || review) && style['wrapper--full']
      }`}
      style={
        full || review
          ? {}
          : {
            backgroundImage: `url(${promo?.backgroundImage?.replace(
              '7.',
              '8.',
            )})`,
          }
      }
    >
      {review && (
        <>
          <div
            className={style.overlay}
            style={{
              backgroundImage: `url(${promo?.backgroundImage?.replace(
                '7.',
                '8.',
              )})`,
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
              backgroundImage: `url(${promo?.backgroundImage?.replace(
                '7.',
                '8.',
              )})`,
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
                <Tabs
                  navigation={NAV_ITEMS}
                  className={style['film-card__nav']}
                >
                  <>
                    <MovieRating
                      rating={promo.rating}
                      scoresCount={promo.scoresCount}
                    />

                    <Overview
                      description={promo.description}
                      starring={promo.starring}
                      director={promo.director}
                    />
                  </>
                  <div
                    className={`${style['film-card__text']} ${style['film-card__row']}`}
                  >
                    <div className={style['film-card__text-col']}>
                      <p className={style['film-card__details-item']}>
                        <strong className={style['film-card__details-name']}>
                          Director
                        </strong>
                        <span className={style['film-card__details-value']}>
                          {promo.director}
                        </span>
                      </p>
                      <p className={style['film-card__details-item']}>
                        <strong className={style['film-card__details-name']}>
                          Starring
                        </strong>
                        <span className={style['film-card__details-value']}>
                          {promo.starring.map((actor, index) => (
                            <>
                              {actor} <br />
                            </>
                          ))}
                        </span>
                      </p>
                    </div>

                    <div className={style['film-card__text-col']}>
                      <p className={style['film-card__details-item']}>
                        <strong className={style['film-card__details-name']}>
                          Run Time
                        </strong>
                        <span className={style['film-card__details-value']}>
                          {promo.runTime}m
                        </span>
                      </p>
                      <p className={style['film-card__details-item']}>
                        <strong className={style['film-card__details-name']}>
                          Genre
                        </strong>
                        <span className={style['film-card__details-value']}>
                          {promo.genre}
                        </span>
                      </p>
                      <p className={style['film-card__details-item']}>
                        <strong className={style['film-card__details-name']}>
                          Released
                        </strong>
                        <span className={style['film-card__details-value']}>
                          {promo.released}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div
                    className={`${style['film-card__reviews']} ${style['film-card__row']}`}
                  >
                    <div className={style['film-card__reviews-col']}>
                      <Review
                        author='Kate Muir'
                        text={`Discerning travellers and Wes Anderson fans will
                            luxuriate in the glorious Mittel-European kitsch of
                            one of the director's funniest and most exquisitely
                            designed films in years.`}
                        date='2016-12-24'
                        rating={8.9}
                      />
                      <Review
                        author='Bill Goodykoontz'
                        text={`Anderson's films are too precious for some, but for
                        those of us willing to lose ourselves in them,
                        they're a delight. "The Grand Budapest Hotel" is no
                        different, except that he has added a hint of
                        gravitas to the mix, improving the recipe.`}
                        date='2015-11-18'
                        rating={8.0}
                      />
                      <Review
                        author='Amanda Greever'
                        text={`I didn't find it amusing, and while I can appreciate
                        the creativity, it's an hour and 40 minutes I wish I
                        could take back.`}
                        date='2015-11-18'
                        rating={8.0}
                      />
                    </div>
                    <div className={style['film-card__reviews-col']}>
                      <Review
                        author='Matthew Lickona'
                        text={`The mannered, madcap proceedings are often
                        delightful, occasionally silly, and here and there,
                        gruesome and/or heartbreaking.`}
                        date='2016-12-20'
                        rating={7.2}
                      />

                      <Review
                        author='Paula Fleri-Soler'
                        text={`It is certainly a magical and childlike way of
                        storytelling, even if the content is a little more
                        adult.`}
                        date='2016-12-20'
                        rating={7.6}
                      />

                      <Review
                        author='Paula Fleri-Soler'
                        text={`It is certainly a magical and childlike way of
                        storytelling, even if the content is a little more
                        adult.`}
                        date='2016-12-20'
                        rating={7.6}
                      />
                    </div>
                  </div>
                </Tabs>
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
