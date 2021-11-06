import s from './small-film-card.module.scss';

type Props = {
  className?: string;
}

function SmallFilmCardSkeleton({ className }: Props): JSX.Element {

  return (
    <div
      className={[s.wrapper, s.skeleton, className].join(' ')}
      aria-hidden='true'
    >
    </div>
  );
}

export default SmallFilmCardSkeleton;
