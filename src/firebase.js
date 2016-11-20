import firebase from 'firebase';

export const initFirebase = () => {
    var config = {
      apiKey: "AIzaSyBM7YY691iJDj1xsoLBAGlw3nxSO2wmnII",
      authDomain: "team-success-9ce1b.firebaseapp.com",
      databaseURL: "https://team-success-9ce1b.firebaseio.com",
      storageBucket: "team-success-9ce1b.appspot.com",
      messagingSenderId: "35508077639"
    }
    firebase.initializeApp(config)
}

