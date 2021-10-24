import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { checkAuthAction, logoutAction } from '../../store/actions/apiActions';
import { RootState } from '../../store/reducers';
import { UserFullState } from '../../types/userState';
import style from './user-block.module.scss';

type UserBlockProps = {
  className?: string;
};

function UserBlock({ className }: UserBlockProps): JSX.Element {
  const { pathname } = useLocation();
  const history = useHistory();
  const { status, avatarURL } = useSelector(
    (state: RootState) => state.user as UserFullState,
  );
  const dispatch = useDispatch();

  if (status === AuthorizationStatus.Unknown) {
    dispatch(checkAuthAction());
  }

  if (status === AuthorizationStatus.Auth) {
    const handleLogOut = (evt: MouseEvent<HTMLButtonElement>) => {
      evt.preventDefault();
      dispatch(logoutAction());

      history.push(AppRoute.Main);
    };
    const avatarMarkUp = avatarURL && (
      <img src={avatarURL} alt='User avatar' width='63' height='63' />
    );

    return (
      <div className={[style.wrapper, className].join(' ')}>
        {pathname === AppRoute.MyList ? (
          <picture className={style.avatar}>{avatarMarkUp}</picture>
        ) : (
          <Link to={AppRoute.MyList} className={style.avatar}>
            {avatarMarkUp}
          </Link>
        )}
        <button className={style.link} onClick={handleLogOut} type='button'>
          Sign out
        </button>
      </div>
    );
  } else {
    return (
      <Link to={AppRoute.SignIn} className={[style.link, className].join(' ')}>
        Sign in
      </Link>
    );
  }
}

export default UserBlock;
