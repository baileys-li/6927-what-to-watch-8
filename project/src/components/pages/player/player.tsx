import { CSSProperties, FormEvent, SyntheticEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { AppRoute } from '../../../const';
import { getMovieByID } from '../../../store/actions/promoMovieActions';
import { RootState } from '../../../store/reducer';
import { formatTime } from '../../../utils/utils';
import SpriteIcon from '../../sprite-icon/sprite-icon';

import style from './style/player.module.scss';

function Player(): JSX.Element {
  const movie = useSelector((state: RootState) => state.promo.movie);
  const { id } = useParams();
  const dispatch = useDispatch();
  const videoRef = useRef<HTMLVideoElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState<number | undefined>(undefined);
  const [currentTime, setCurrentTime] = useState<number | undefined>(undefined);
  const [play, setPlay] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (!movie || Number(id) !== movie.id) {
      id && dispatch(getMovieByID(id));
    }
  }, [movie, id, dispatch]);

  const handlePlayChange = () => {
    if (play) {
      setPlay(false);
      videoRef.current?.pause();
    } else {
      setPlay(true);
      videoRef.current?.play();
    }
  };

  const calcPercent = () => (currentTime && duration) ?
    (currentTime * 100) / duration : 0;

  const handleTimeUpdate = ({ currentTarget }: SyntheticEvent<HTMLVideoElement>) =>
    setCurrentTime(currentTarget.currentTime);

  const handleDurationChange = ({
    currentTarget,
  }: SyntheticEvent<HTMLVideoElement>) => setDuration(currentTarget.duration);

  const handleTimelineChange = ({ currentTarget }: FormEvent<HTMLInputElement>) => {
    if (duration && videoRef.current) {
      const newCurrentTime = Number(currentTarget.value) * duration / 100;
      setCurrentTime(newCurrentTime);
      videoRef.current.currentTime = newCurrentTime;
    }
  };

  return (
    <article className={style.root} ref={rootRef}>
      <video
        className={style.video}
        src={movie?.videoLink}
        poster={movie?.backgroundImage}
        autoPlay
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
        onDurationChange={handleDurationChange}
      />

      <button
        onClick={() => window.history.length === 1 ? navigate(AppRoute.Main) : navigate(-1)}
        className={style.exit}
        style={{ textDecoration: 'none' }}
      >
        Exit
      </button>

      <div className={style.controls}>

        <input
          className={style.timeline}
          type='range'
          name='time'
          value={calcPercent()}
          min={0}
          max={100}
          style={{ '--time': `${calcPercent()}%` } as CSSProperties}
          onInput={handleTimelineChange}
        />

        <div className={style.time__value}>
          {duration && currentTime && (
            `-${formatTime(duration - currentTime)} / ${formatTime(duration)}`
          )}
        </div>


        <button
          type='button'
          className={[style.control, style.play].join(' ')}
          aria-label={play ? 'Pause' : 'Play'}
          onClick={handlePlayChange}
        >
          <SpriteIcon id={play ? 'pause' : 'play-s'} width={19} />
        </button>
        <div className={style.name}>{movie?.name}</div>

        <button
          type='button'
          className={[style.control, style['full-screen']].join(' ')}
          aria-label='Full screen'
          onClick={() => {
            document.fullscreenElement === rootRef.current
              ? document.exitFullscreen()
              : rootRef.current?.requestFullscreen();
          }}
        >
          <SpriteIcon id='full-screen' width={27} />
        </button>

      </div>
    </article >
  );
}
export default Player;
