import { Token } from '../services/token';

type LoginResponse = {
  id: number,
  email: string,
  name:  string,
  'avatar_url': string,
  token: Token
}

export default LoginResponse;
