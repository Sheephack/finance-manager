import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { firebaseApp } from '../config/firebase';

const auth = getAuth(firebaseApp);

export const registerUser = (email: string, password: string) => 
    createUserWithEmailAndPassword(auth, email, password);

export const loginUser = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);

export const logoutUser = () => signOut(auth);