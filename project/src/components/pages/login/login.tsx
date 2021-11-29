import Header from '../../header/header';
import Footer from '../../footer/footer';
import style from './login.module.scss';
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../../store/actions/authorization-actions';
import { useNavigate } from 'react-router';
import { RootState } from '../../../store/reducer';
import { setError } from '../../../store/slice/user-store';
import useUserData from '../../../hooks/useUserData';
import { AppRoute, AuthorizationStatus, LoginFormRegExps } from '../../../const';

function Login(): JSX.Element {
  const error = useSelector((state: RootState) => state.user.error);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status } = useUserData();

  const passwordRef = useRef<HTMLInputElement | null>(null);

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    dispatch(loginAction({ email, password }));
  }

  function handleInput(
    input: HTMLInputElement,
    setter: Dispatch<SetStateAction<string>>,
    message: string,
  ) {
    setter(input.value);
    input.checkValidity()
      ? dispatch(setError(undefined))
      : dispatch(setError(message));
  }

  const handleEmailInput = ({ currentTarget }: FormEvent<HTMLInputElement>) =>
    handleInput(currentTarget, setEmail, 'Please enter a valid email address');

  const handlePasswordInput = ({
    currentTarget,
  }: FormEvent<HTMLInputElement>) =>
    handleInput(
      currentTarget,
      setPassword,
      'Password must contain at least 1 letter and 1 number',
    );

  useEffect(() => {
    status === AuthorizationStatus.Auth && navigate(AppRoute.Main);
  }, [status, navigate]);

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
                pattern={LoginFormRegExps.Email}
                required
                value={email}
              />
            </label>

            <label>
              <span className='visually-hidden'>Password</span>
              <input
                onInput={handlePasswordInput}
                className={style.input}
                type='password'
                placeholder='Password'
                name='user-password'
                pattern={LoginFormRegExps.Password}
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
