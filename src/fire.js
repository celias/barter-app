import { default as fb } from 'firebase';

const config = {
    apiKey: "AIzaSyBMJrabb-XEpOk4DxZjmeiu5X1AJmq4LSg",
    authDomain: "personal-dm11.firebaseapp.com",
    databaseURL: "https://personal-dm11.firebaseio.com",
    projectId: "personal-dm11",
    storageBucket: "personal-dm11.appspot.com",
    messagingSenderId: "377788954214"
  };

const firebase = fb.initializeApp(config);

export default firebase;