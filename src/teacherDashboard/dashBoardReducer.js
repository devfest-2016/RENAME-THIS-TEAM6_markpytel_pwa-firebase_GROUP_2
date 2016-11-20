const INTIAL_STATE = {
  teacher: []
}

export default function(state = INTIAL_STATE, action) {
  switch(action.type){
    case 'ADD_TUTOR':
      return Object.assign({}, state, action.payload)
    default: 
      return state
  }
}