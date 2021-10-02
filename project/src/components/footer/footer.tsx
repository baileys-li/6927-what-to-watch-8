import Logo from '../logo/logo';
import style from './footer.module.scss';

function Footer(): JSX.Element {
  const currentYear: number = new Date().getFullYear();
  return (
    <footer className={style['page-footer']}>
      <Logo light />
      <p className={style.copyright}>
        <small>© {currentYear} What to watch Ltd.</small>
      </p>
    </footer>
  );
}

export default Footer;
