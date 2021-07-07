// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDulYGRchZ2AABVLpcCE0_8zaQ2oSq0Yjg",
    authDomain: "discord-clone-85f09.firebaseapp.com",
    projectId: "discord-clone-85f09",
    storageBucket: "discord-clone-85f09.appspot.com",
    messagingSenderId: "217675570528",
    appId: "1:217675570528:web:02b6f1a977fd706ca09205",
    measurementId: "G-VKNHE0JK7H"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
const auth=firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth,provider}
export default db