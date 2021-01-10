import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const Config = {
    apiKey: "AIzaSyC02sxiMQwQoAhGbBBuEqMzkQ9nN5A6NzA",
    authDomain: "myntra-db-22d17.firebaseapp.com",
    projectId: "myntra-db-22d17",
    storageBucket: "myntra-db-22d17.appspot.com",
    messagingSenderId: "531793286560",
    appId: "1:531793286560:web:2d2108a9fc2379be3180c5",
    measurementId: "G-FE9LL8NDEV"
  };


  export  const createUserProfile = async(userAuth,additionalData) => {
      if(!userAuth){
          return;
      }
       const userRef = firestore.doc(`users/${userAuth.uid}`);

       const snapshot = await userRef.get();
     
       if(!snapshot.exists){
           const {displayName,email} = userAuth;
           const createAt = new Date();

           try{
             await userRef.set({
                 displayName, 
                 email,
                 createAt,
                 ...additionalData,
             })
           }
           catch(err){
               console.log("error creating object ",err.message);
           }
       }

       return userRef;
  }


  firebase.initializeApp(Config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;