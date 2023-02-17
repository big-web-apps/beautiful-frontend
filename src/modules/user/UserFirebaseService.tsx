//Example
import { useWatchedObject } from '../../base/firebase/FirebaseService';
import { UserModel } from './types/UserTypes';

export function useUser(userId: string | null) {
  return useWatchedObject<UserModel>(`/users/${userId}`);
}

export function useUserList() {
  return useWatchedObject<Array<UserModel | null>>(`/users`);
}
