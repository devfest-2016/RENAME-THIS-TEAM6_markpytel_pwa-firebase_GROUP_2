export const getTutor = tutor => ({
  type: 'ADD_TUTOR',
  payload: tutor
})

//get All blog post and send to store
export const getTutorDataAsync = () => (dispatch) => {
  dispatch(getTutor())

  
}
