import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleAuthProvider } from '../services';

export const loginWithGoogle = () => {
  return signInWithPopup(auth, googleAuthProvider)
    .then(result => result.user)
    .catch(error => console.log(error));
};

export const loginWithFacebook = () => null;

export const loginWithGithub = () => null;

export const logout = () => {
  return signOut(auth)
    .then(() => null)
    .catch(error => console.log(error));
};
