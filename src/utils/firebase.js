import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBEzjT_onWDcDoxG36u354dHfjuXjZVlvE',
  authDomain: 'rental-app-60a86.firebaseapp.com',
  projectId: 'rental-app-60a86',
  storageBucket: 'rental-app-60a86.appspot.com',
  messagingSenderId: '586832683856',
  appId: '1:586832683856:web:7c42c46222ceee4bac4255',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
