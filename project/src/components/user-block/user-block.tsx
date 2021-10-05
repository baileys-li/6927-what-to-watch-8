import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import style from './user-block.module.scss';

type UserBlockType = {
  authenticated?: boolean;
};

function UserBlock({ authenticated = false }: UserBlockType): JSX.Element {
  const avatar = (
    <img src='img/avatar.jpg' alt='User avatar' width='63' height='63' />
  );
  const { pathname } = useLocation();

  return (
    <div className={style.wrapper}>
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
