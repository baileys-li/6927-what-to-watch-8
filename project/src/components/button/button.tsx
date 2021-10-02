import { Link } from 'react-router-dom';
import style from './button.module.scss';

type ButtonType = {
  href?: string;
  className?: string;
  children: React.ReactNode;
};

function Button({ href, children, className }: ButtonType): JSX.Element {
  const classes = `${style.button} ${className}`;

  return href ? (
    <Link to={href} className={classes}>
      {children}
    </Link>
  ) : (
    <button className={classes} type='button'>
      {children}
    </button>
  );
}

export default Button;
