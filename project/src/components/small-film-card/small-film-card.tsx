import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import s from './small-film-card.module.scss';

import type MovieType from '../../types/movie-type';

type SmallFilmCardProps = {
  movie: Pick<MovieType, 'name' | 'id' | 'previewImage' | 'previewVideoLink'>;
  className?: string;
};

function SmallFilmCard({ movie, className }: SmallFilmCardProps): JSX.Element {
  const { id, name, previewImage, previewVideoLink } = movie;

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setPlaying] = useState<boolean>(false);

  useEffect(() => {
    const timer = isPlaying && setTimeout(() => videoRef.current?.play(), 1000);

    !isPlaying && videoRef.current?.load();

    return () => {
      timer && clearTimeout(timer);
    };
  }, [isPlaying]);

  function handlePlayVideo() {
    setPlaying(true);
  }

  function handleStopVideo() {
    setPlaying(false);
  }

  return (
    <article
      className={[s.wrapper, className].join(' ')}
      onMouseEnter={handlePlayVideo}
      onMouseLeave={handleStopVideo}
      onFocus={handlePlayVideo}
      onBlur={handleStopVideo}
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
