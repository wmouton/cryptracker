import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import firebaseConfig from './config/firebaseConfig';

const firebaseApp = initializeApp(firebaseConfig);

const aut = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
