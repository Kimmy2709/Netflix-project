import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCVUMR2kO8yYK-uXV5H_p3JxpFHItb-V78",
    authDomain: "netflix-project-cce0b.firebaseapp.com",
    projectId: "netflix-project-cce0b",
    storageBucket: "netflix-project-cce0b.appspot.com",
    messagingSenderId: "655813986314",
    appId: "1:655813986314:web:86437063877499f3d677f3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
 export  const db=firebaseApp.firestore();
 export const auth = firebase.auth();

