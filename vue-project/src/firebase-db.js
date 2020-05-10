import firebase from 'firebase/app'
import 'firebase/firestore'

export const db = firebase
    .initializeApp({
    apiKey: "AIzaSyBVXb6Q-rfeRIcQFsS2znURYB6_MhAxJIc",
    authDomain: "music-app-a371c.firebaseapp.com",
    databaseURL: "https://music-app-a371c.firebaseio.com",
    projectId: "music-app-a371c",
    storageBucket: "music-app-a371c.appspot.com",
    messagingSenderId: "673762623452",
    appId: "1:673762623452:web:faf1fef8433b028a2b1919",
    measurementId: "G-S1023TDGRX"
  })
  .firestore()

export const albumRef = db.collection('albums')

  