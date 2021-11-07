import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import style from './button.module.scss';

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>
      & AnchorHTMLAttributes<HTMLAnchorElement>;

function Button({
  href,
  children,
  className,
  ...other
}: ButtonType): JSX.Element {
  const classes = `${style.button} ${className ? className : ''}`;

  return href ? (
    <Link to={href} className={classes} {...other}>
      {children}
    </Link>
  ) : (
    <button className={classes} type='button' {...other}>
      {children}
    </button>
  );
}

export default Button;
