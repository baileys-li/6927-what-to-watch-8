import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { getMovieByID } from '../../../store/actions/filmsActions';
import { RootState } from '../../../store/reducer';
import { formatTime } from '../../../utils/utils';
import SpriteIcon from '../../sprite-icon/sprite-icon';

import style from './style/player.module.scss';

function Player(): JSX.Element {
  const movie = useSelector((state: RootState) => state.movies.selected);
  const { id } = useParams();
  const dispatch = useDispatch();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState<number>(70);
  const [timeLeft, setTimeLeft] = useState<number>(70);
  const [play, setPlay] = useState<boolean>(true);

  useEffect(() => {
    if (!movie || Number(id) !== movie.id) {
      id && dispatch(getMovieByID(id));
    }
  }, [movie, id, dispatch]);

  useEffect(() => {
    videoRef.current && setDuration(videoRef.current.duration);
  }, [videoRef.current?.duration]);

  useEffect(() => {
    videoRef.current && setTimeLeft(videoRef.current.duration - videoRef.current.currentTime);
  }, [videoRef.current?.currentTime]);

  const changePlaying = () => {
    if (play) {
      setPlay(false);
      videoRef.current?.pause();
    } else {
      setPlay(true);
      videoRef.current?.play();
    }
  };

  return (
    <div className={style.root}>
      <video
        className={style.video}
        src={movie?.videoLink} poster={movie?.backgroundImage}
        autoPlay
        ref={videoRef}
      />

      <Link to={AppRoute.Main} className={style.exit} style={{ textDecoration: 'none' }}>
        Exit
      </Link>

      <div className={style.controls}>
        <div className={style.controls__row}>
          <div className={style.time}>
            <progress className={style.progress} value='30' max='100' />
            <div className={style.toggler} style={{ left: '30%' }}>
              Toggler
            </div>
          </div>
          <div className={style.time__value}>
            -{formatTime(timeLeft)} / {formatTime(duration)}
          </div>
        </div>

        <div className={style.controls__row}>
          <button
            type='button'
            className={[style.control, style.play].join(' ')}
            aria-label={play ? 'Pause' : 'Play'}
            onClick={changePlaying}
          >
            <SpriteIcon id={play ? 'pause' : 'play-s'} width={19} />
          </button>
          <div className={style.name}>{movie?.name}</div>

          <button type='button' className={[style.control, style['full-screen']].join(' ')} aria-label='Full screen'>
            <SpriteIcon id='full-screen' width={27} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
