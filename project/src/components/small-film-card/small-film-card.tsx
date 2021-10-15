import { Link } from 'react-router-dom';
import s from './small-film-card.module.scss';
import { adaptFromSnakeToCamel } from '../../utils/adapter';
import type MovieType from '../../types/movie-type';
import { createRef } from 'react';

type SmallFilmCardProps = {
  movie: Pick<MovieType, 'name' | 'id' | 'previewImage' | 'previewVideoLink'>;
  className?: string;
};

function SmallFilmCard({ movie, className }: SmallFilmCardProps): JSX.Element {
  const { id, name, previewImage, previewVideoLink }: MovieType =
    adaptFromSnakeToCamel(movie);

  const videoRef = createRef<HTMLVideoElement>();

  function playVideo() {
    videoRef.current?.play();
  }

  function stopVideo() {
    videoRef.current?.load();
  }

  return (
    <article
      className={`${s.wrapper} ${className}`}
      onMouseEnter={playVideo}
      onMouseLeave={stopVideo}
      onFocus={playVideo}
      onBlur={stopVideo}
    >
      <video
        className={s.image}
        src={previewVideoLink}
        width={250}
        height={175}
        muted
        playsInline
        poster={previewImage}
        preload='metadata'
        loop
        ref={videoRef}
      />
      <Link to={`/films/${id}`} className={s.link}>
        <h3 className={s.title}>{name}</h3>
      </Link>
    </article>
  );
}

export default SmallFilmCard;
