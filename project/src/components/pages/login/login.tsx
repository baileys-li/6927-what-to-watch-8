import Header from '../../header/header';
import Footer from '../../footer/footer';
import style from './login.module.scss';

function Login(): JSX.Element {
  const message = 'Please enter a valid email address';
  return (
    <div className='user-page'>
      <Header className='user-page__head' headline='Sign in' hideAuth />

      <div className={`${style.wrapper} user-page__content`}>
        <form action='#' className={style.form}>
          {message && <p className={style.message}>{message}</p>}
          <fieldset className={style.fields}>
            <legend className='visually-hidden'>Login Form</legend>
            <label>
              <span className='visually-hidden'>Email</span>
              <input
                className={style.input}
                type='email'
                placeholder='Email address'
                name='user-email'
                required
              />
            </label>

            <label>
              <span className='visually-hidden'>Password</span>
              <input
                className={style.input}
                type='password'
                placeholder='Password'
                name='user-password'
                required
              />
            </label>
          </fieldset>
          <button className={style.submit} type='submit'>
              Sign in
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
