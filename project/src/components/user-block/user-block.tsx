import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import useUserData from '../../hooks/useUserData';
import { logoutAction } from '../../store/actions/authorization-actions';
import style from './user-block.module.scss';

type UserBlockProps = {
  className?: string;
};

function UserBlock({ className }: UserBlockProps): JSX.Element {
  const { pathname } = useLocation();
  const { status, avatarURL } = useUserData();
  const dispatch = useDispatch();

  if (status === AuthorizationStatus.Auth) {
    const handleLogOut = (evt: MouseEvent<HTMLButtonElement>) => {
      evt.preventDefault();
      dispatch(logoutAction());
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
