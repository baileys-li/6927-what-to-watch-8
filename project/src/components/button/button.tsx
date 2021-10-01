import style from './button.module.scss';

type ButtonType = {
  href?: string;
  className?: string;
  children: React.ReactNode;
};

function Button({ href, children, className }: ButtonType): JSX.Element {
  const classes = `${style.button} ${className}`;

  return href ? (
    <a href={href} className={classes}>
      {children}
    </a>
  ) : (
    <button className={classes} type='button'>
      {children}
    </button>
  );
}

export default Button;
