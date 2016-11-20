import * as firebase from 'firebase'
import $ from 'jquery'

export const getTutor = teacher => ({
  type: 'ADD_TEACHER',
  payload: teacher
})

//get All blog post and send to store
export const getTutorDataAsync = () => (dispatch) => {
  const rootRef = firebase.database().ref().child('users')
  const user1Ref = rootRef.child('user1')
  user1Ref.on('value', snap => {
    console.log(snap.val())
    dispatch(getTutor(snap.val()))
  })
}
