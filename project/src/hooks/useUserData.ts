import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import { UserFullState } from '../types/userState';

export default function useUserData() : UserFullState {
  return useSelector((state: RootState) => state.user as UserFullState);
}
