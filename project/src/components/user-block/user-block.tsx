import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { RootState } from '../../store/reducers';
import style from './user-block.module.scss';

type UserBlockProps = {
  className?: string;
};

function UserBlock({ className }: UserBlockProps): JSX.Element {
  const avatar = (
    <img src='img/avatar.jpg' alt='User avatar' width='63' height='63' />
  );
  const { pathname } = useLocation();

  const { status } = useSelector((state: RootState) => state.user);

  const authenticated = status === AuthorizationStatus.Auth;

  return (
    <div className={[style.wrapper, className].join(' ')}>
      {authenticated &&
        (pathname === AppRoute.MyList ? (
          <picture className={style.avatar}>{avatar}</picture>
        ) : (
          <Link to={AppRoute.MyList} className={style.avatar}>
            {avatar}
          </Link>
        ))}

      {authenticated ? (
        <Link to={AppRoute.SignIn} className={style.link}>
          Sign out
        </Link>
      ) : (
        <Link to={AppRoute.SignIn} className={style.link}>
          Sign in
        </Link>
      )}
    </div>
  );
}

export default UserBlock;
