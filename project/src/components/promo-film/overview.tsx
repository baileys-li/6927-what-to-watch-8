import style from './promo-film.module.scss';

type OverviewProps = {
  description: string | Array<string>;
  director: string;
  starring: Array<string>;
};

function Overview({
  description,
  starring,
  director,
}: OverviewProps): JSX.Element {
  return (
    <div className={style['film-card__text']}>
      {typeof description === 'string' ? (
        <p>{description}</p>
      ) : (
        description.map((text) => <p key={text}>{text}</p>)
      )}

      <p className={style['film-card__director']}>
        <strong>Director: {director}</strong>
      </p>

      <p className={style['film-card__starring']}>
        <strong>
          Starring: {starring.slice(0, 4).join(', ')}
          {starring.length > 4 && ' and other'}
        </strong>
      </p>
    </div>
  );
}

export default Overview;