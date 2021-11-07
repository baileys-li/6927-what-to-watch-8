import Header from '../../header/header';
import Footer from '../../footer/footer';
import style from './login.module.scss';
import { FormEvent, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../../store/actions/authorizationActions';
import { useNavigate } from 'react-router';
import { AppRoute } from '../../../const';

function Login(): JSX.Element {
  const message = '';

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const authData = {
      login: loginRef.current?.value as string,
      password: passwordRef.current?.value as string,
    };

    dispatch(loginAction(authData));

    navigate(AppRoute.Main);
  };
  return (
    <div className='user-page'>
      <Header className='user-page__head' headline='Sign in' hideAuth />

      <div className={`${style.wrapper} user-page__content`}>
        <form action='' className={style.form} onSubmit={handleSubmit}>
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
                ref={loginRef}
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
                ref={passwordRef}
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
