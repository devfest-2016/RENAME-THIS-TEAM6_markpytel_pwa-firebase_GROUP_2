export default function(state ={}, action) {
  switch(action.type){
    case 'ADD_TEACHER':
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}
