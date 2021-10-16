import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { adaptFromSnakeToCamel } from '../../utils/adapter';

import s from './small-film-card.module.scss';

import type MovieType from '../../types/movie-type';

type SmallFilmCardProps = {
  movie: Pick<MovieType, 'name' | 'id' | 'previewImage' | 'previewVideoLink'>;
  className?: string;
};

function SmallFilmCard({ movie, className }: SmallFilmCardProps): JSX.Element {
  const { id, name, previewImage, previewVideoLink }: MovieType =
    adaptFromSnakeToCamel(movie);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setPlaying] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(playVideo, 1000);

    if (!isPlaying) {
      stopVideo();
      clearTimeout(timer);
    }
  }, [isPlaying]);

  function changeState() {
    setPlaying((currentState) => !currentState);
  }
  function playVideo() {
    videoRef.current?.play();
  }

  function stopVideo() {
    videoRef.current?.load();
  }

  return (
    <article
      className={`${s.wrapper} ${className}`}
      onMouseEnter={changeState}
      onMouseLeave={changeState}
      onFocus={changeState}
      onBlur={changeState}
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
