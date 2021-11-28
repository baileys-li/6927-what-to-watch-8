import style from './promo-film.module.scss';

type OverviewProps = {
  description: string;
  director: string;
  starring: string[];
};

const enum Actor {
  MaxCount = 4
}
function Overview({
  description,
  starring,
  director,
}: OverviewProps): JSX.Element {
  return (
    <div className={style['film-card__text']}>
      <p>{description}</p>
      <p className={style['film-card__director']}>
        <strong>Director: {director}</strong>
      </p>
      <p className={style['film-card__starring']}>
        <strong>
          Starring: {starring.slice(0, Actor.MaxCount).join(', ')}
          {starring.length > Actor.MaxCount && ' and other'}
        </strong>
      </p>
    </div>
  );
}

export default Overview;
