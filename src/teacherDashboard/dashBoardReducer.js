export default function(state =[], action) {
  switch(action.type){
    case 'ADD_TEACHER':
      return action.payload
    default: 
      return state
  }
}