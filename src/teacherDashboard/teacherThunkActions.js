import * as firebase from 'firebase'
import $ from 'jquery'

export const getTutor = teacher => ({
  type: 'ADD_TEACHER',
  payload: teacher
})

//get All blog post and send to store
export const getTutorDataAsync = () => (dispatch) => {
  console.log("async")
  $.ajax({
    url: "https://team-success-9ce1b.firebaseio.com/users/user1.json"
  })
  .done(data => {
    dispatch(getTutor(data))
  })
  // const rootRef = firebase.database().ref().child('react')
  // console.log(rootRef)
  // const speedRef = rootRef.child('speed')
  // speedRef.on('value', snap => {
  //   console.log(snap.val())
  //   dispatch(getTutor(snap.val()))
  // })
}
