import Logo from '../logo/logo';
import PromoFilm from '../promo-film/promo-film';

import SmallFilmCard from '../small-film-card/small-film-card';
import type SmallFilmCardType from '../../types/small-fim-card-type';

type MainPageType = {
  list: Array<SmallFilmCardType>;
};

function MainPage({ list }: MainPageType): JSX.Element {
  return (
    <>
      <PromoFilm
        title='The Grand Budapest Hotel'
        poster='img/the-grand-budapest-hotel-poster.jpg'
        background='img/bg-the-grand-budapest-hotel.jpg'
        genre='Drama'
        year='2014'
      />
      <div className='page-content'>
        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>

          <ul className='catalog__genres-list'>
            <li className='catalog__genres-item catalog__genres-item--active'>
              <a href='#' className='catalog__genres-link'>
                All genres
              </a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>
                Comedies
              </a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>
                Crime
              </a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>
                Documentary
              </a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>
                Dramas
              </a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>
                Horror
              </a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>
                Kids & Family
              </a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>
                Romance
              </a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>
                Sci-Fi
              </a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>
                Thrillers
              </a>
            </li>
          </ul>

          <div className='catalog__films-list'>
            {list.map((movie) => (
              <SmallFilmCard
                title={movie.title}
                imageSource={movie.imageSource}
                key={movie.title}
              />
            ))}
          </div>

          <div className='catalog__more'>
            <button className='catalog__button' type='button'>
              Show more
            </button>
          </div>
        </section>

        <footer className='page-footer'>
          <Logo isLight />

          <div className='copyright'>
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainPage;
