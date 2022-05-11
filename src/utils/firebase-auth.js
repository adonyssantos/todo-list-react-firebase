import { signInWithPopup, signOut } from 'firebase/auth';
import {
  auth,
  googleAuthProvider,
  facebookAuthProvider,
  githubAuthProvider,
} from '../services';

export const loginWithGoogle = () => {
  return signInWithPopup(auth, googleAuthProvider)
    .then(result => result.user)
    .catch(error => console.log(error));
};

export const loginWithFacebook = () => {
  return signInWithPopup(auth, facebookAuthProvider)
    .then(result => result.user)
    .catch(error => console.log(error));
};

export const loginWithGithub = () => {
  return signInWithPopup(auth, githubAuthProvider)
    .then(result => result.user)
    .catch(error => console.log(error));
};

export const logout = () => {
  return signOut(auth)
    .then(() => null)
    .catch(error => console.log(error));
};
