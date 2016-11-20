import * as firebase from 'firebase'
import $ from 'jquery'

export const getTutor = tutor => ({
  type: 'ADD_TEACHER',
  payload: tutor
})

//get All blog post and send to store
export const getTutorDataAsync = () => (dispatch) => {
  console.log("async")
  $.ajax({
    url: "https://team-success.firebaseio.com/react.json"
  })
  .done(data => {
    console.log(data)
  })
  // const rootRef = firebase.database().ref().child('react')
  // console.log(rootRef)
  // const speedRef = rootRef.child('speed')
  // speedRef.on('value', snap => {
  //   console.log(snap.val())
  //   dispatch(getTutor(snap.val()))
  // })
}
