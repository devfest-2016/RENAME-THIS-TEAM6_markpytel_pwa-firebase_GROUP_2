import firebase from 'firebase';

export const getTutor = tutor => ({
  type: 'ADD_TUTOR',
  payload: tutor
})

//get All blog post and send to store
export const getTutorDataAsync = () => (dispatch) => {
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD5LG0tGT5ViExMwYkyDiRjvFqv1dIMnWI",
    authDomain: "team-success.firebaseapp.com",
    databaseURL: "https://team-success.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "702172172434"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  console.log(database)
  dispatch(getTutor())

}