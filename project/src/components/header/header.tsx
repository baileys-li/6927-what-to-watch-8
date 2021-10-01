import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';

import style from './header.module.scss';

type HeaderType = {
  className?: string;
  breadcrumbs?: boolean;
  headline: string;
  hiddenHeadline?: boolean;
};

function Header({
  className,
  breadcrumbs,
  headline,
  hiddenHeadline = false,
}: HeaderType): JSX.Element {
  const headlineClass = hiddenHeadline
    ? 'visually-hidden'
    : 'page-title user-page__title';
  return (
    <header className={`${style.wrapper} ${className}`}>
      <Logo />
      {breadcrumbs && <Breadcrumbs />}

      <h1 className={headlineClass}>{headline}</h1>
      <UserBlock authenticated />
    </header>
  );
}

export default Header;
