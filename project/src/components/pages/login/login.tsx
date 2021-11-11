import Header from '../../header/header';
import Footer from '../../footer/footer';
import style from './login.module.scss';
import { FormEvent, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../../store/actions/authorizationActions';
import { useNavigate } from 'react-router';
import { AppRoute } from '../../../const';
import { RootState } from '../../../store/reducer';
import { setError } from '../../../store/slice/userStore';

function Login(): JSX.Element {
  const error = useSelector((state: RootState) => state.user.error);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const passwordRef = useRef<HTMLInputElement | null>(null);

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    dispatch(loginAction({ email, password }));
    !error && navigate(AppRoute.Main);
  }

  function handleEmailInput({ currentTarget }: FormEvent<HTMLInputElement>) {
    setEmail(currentTarget.value);

    currentTarget.checkValidity()
      ? dispatch(setError(undefined))
      : dispatch(setError('Please enter a valid email address'));
  }

  return (
    <div className='user-page'>
      <Header className='user-page__head' headline='Sign in' hideAuth />

      <div className={`${style.wrapper} user-page__content`}>
        <form action='' className={style.form} onSubmit={handleSubmit}>
          {error && <p className={style.message}>{error}</p>}
          <fieldset className={style.fields}>
            <legend className='visually-hidden'>Login Form</legend>
            <label>
              <span className='visually-hidden'>Email</span>
              <input
                onInput={handleEmailInput}
                className={style.input}
                type='email'
                placeholder='Email address'
                name='user-email'
                pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'
                required
                value={email}
              />
            </label>

            <label>
              <span className='visually-hidden'>Password</span>
              <input
                onInput={({ currentTarget }) => setPassword(currentTarget.value)}
                className={style.input}
                type='password'
                placeholder='Password'
                name='user-password'
                required
                ref={passwordRef}
                value={password}
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
