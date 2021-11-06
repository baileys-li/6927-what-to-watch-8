import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';

import style from './header.module.scss';

import type LinkType from '../../types/link';

type HeaderType = {
  className?: string;
  breadcrumbs?: Array<LinkType>;
  headline: string;
  hiddenHeadline?: boolean;
  hideAuth?: boolean;
};

function Header({
  className,
  breadcrumbs,
  headline,
  hiddenHeadline = false,
  hideAuth = false,
}: HeaderType): JSX.Element {
  return (
    <header
      className={`${style.wrapper} ${className}
    ${hideAuth && style['wrapper--full']}`}
    >
      {breadcrumbs ? (
        <Breadcrumbs links={breadcrumbs} className={style.breadcrumbs} />
      ) : (
        <Logo />
      )}

      <h1 className={hiddenHeadline ? 'visually-hidden' : style['title']}>
        {headline}
      </h1>

      {!hideAuth && <UserBlock className={style.user} />}
    </header>
  );
}

export default Header;
