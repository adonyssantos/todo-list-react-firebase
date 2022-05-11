import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC24vi_EccV77TfC2R4rUpu4dJIzyyTGwI',
  authDomain: 'cic-flask-oauth.firebaseapp.com',
  projectId: 'cic-flask-oauth',
  storageBucket: 'cic-flask-oauth.appspot.com',
  messagingSenderId: '762150487292',
  appId: '1:762150487292:web:9d730f52fdba537598c379',
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();
export const facebookAuthProvider = new FacebookAuthProvider();
export const githubAuthProvider = new GithubAuthProvider();
