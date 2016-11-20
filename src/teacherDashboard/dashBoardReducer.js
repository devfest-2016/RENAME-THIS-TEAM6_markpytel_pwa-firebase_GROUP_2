export default function(state ={}, action) {
  switch(action.type){
    case 'ADD_TEACHER':
    console.log(action.payload, 'this is the payload')
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}
