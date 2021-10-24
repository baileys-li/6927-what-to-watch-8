import { Token } from '../services/token';

type LoginResponse = {
  id: number,
  email: string,
  name:  string,
  'avatar_url': Token,
  token: string
}


export default LoginResponse;
