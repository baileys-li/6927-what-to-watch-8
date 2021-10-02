import { Link, useLocation } from 'react-router-dom';
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
        (pathname === '/mylist' ? (
          <picture className={style.avatar}>{avatar}</picture>
        ) : (
          <Link to='/mylist' className={style.avatar}>
            {avatar}
          </Link>
        ))}

      {authenticated ? (
        <a className={style.link}>Sign out</a>
      ) : (
        <a href='sign-in.html' className={style.link}>
          Sign in
        </a>
      )}
    </div>
  );
}

export default UserBlock;
