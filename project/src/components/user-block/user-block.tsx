import style from './user-block.module.scss';

type UserBlockType = {
  authenticated?: boolean;
};

function UserBlock({ authenticated = false }: UserBlockType): JSX.Element {
  return (
    <div className={style.wrapper}>
      {authenticated && (
        <div className={style.avatar}>
          <img src='img/avatar.jpg' alt='User avatar' width='63' height='63' />
        </div>
      )}

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
