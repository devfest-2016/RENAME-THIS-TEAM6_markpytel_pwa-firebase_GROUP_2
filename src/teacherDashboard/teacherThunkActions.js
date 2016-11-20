import firebase from 'firebase'
import {initFirebase} from '../firebase'

// var config = {
//   apiKey: "AIzaSyBM7YY691iJDj1xsoLBAGlw3nxSO2wmnII",
//   authDomain: "team-success-9ce1b.firebaseapp.com",
//   databaseURL: "https://team-success-9ce1b.firebaseio.com",
//   storageBucket: "team-success-9ce1b.appspot.com",
//   messagingSenderId: "35508077639"
// };
// firebase.initializeApp(config);

export const getTutor = tutor => ({
  type: 'ADD_TEACHER',
  payload: tutor
})

//get All blog post and send to store
export const getTutorDataAsync = () => (dispatch) => {
  console.log("async")
  initFirebase()
  const rootRef = firebase.database().ref().child('react')
  const speedRef = rootRef.child('speed')
  speedRef.on('value', snap => {
    console.log(snap.val())
    dispatch(getTutor(snap.val()))
  })
}