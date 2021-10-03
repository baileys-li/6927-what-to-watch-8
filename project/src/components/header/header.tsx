import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';

import style from './header.module.scss';

type HeaderType = {
  className?: string;
  breadcrumbs?: boolean;
  headline: string;
  hiddenHeadline?: boolean;
  authenticated?: boolean;
  hideAuth?: boolean;
};

function Header({
  className,
  breadcrumbs,
  headline,
  hiddenHeadline = false,
  authenticated = true,
  hideAuth = false,
}: HeaderType): JSX.Element {
  const headlineClass = hiddenHeadline ? 'visually-hidden' : style['title'];
  return (
    <header className={`${style.wrapper} ${className}`}>
      {breadcrumbs ? <Breadcrumbs /> : <Logo />}

      <h1 className={headlineClass}>{headline}</h1>

      {!hideAuth && <UserBlock authenticated={authenticated} />}
    </header>
  );
}

export default Header;
