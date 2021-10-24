import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { checkAuthAction } from '../../store/actions/apiActions';
import { RootState } from '../../store/reducers';
import { UserFullState } from '../../types/userState';
import style from './user-block.module.scss';

type UserBlockProps = {
  className?: string;
};

function UserBlock({ className }: UserBlockProps): JSX.Element {
  const { pathname } = useLocation();

  const user = useSelector((state: RootState) => state.user as UserFullState);

  const authenticated = user.status === AuthorizationStatus.Auth;
  const dispatch = useDispatch();

  if (!authenticated) {
    dispatch(checkAuthAction());
  }

  const avatar = (
    <img src={user.avatarURL} alt='User avatar' width='63' height='63' />
  );

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
