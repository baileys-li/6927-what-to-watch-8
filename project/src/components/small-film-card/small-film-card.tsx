import s from './small-film-card.module.scss';

type SmallFilmCardProps = {
  title: string;
  imageSource: string;
};

function SmallFilmCard({
  title,
  imageSource,
}: SmallFilmCardProps): JSX.Element {
  return (
    <article className={`${s.card} catalog__films-card`}>
      <div className={s.card__image}>
        <img src={imageSource} alt='Poster of movie' width='280' height='175' />
      </div>
      <h3 className={s.card__title}>
        <a className={s.card__link} href='film-page.html'>
          {title}
        </a>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
