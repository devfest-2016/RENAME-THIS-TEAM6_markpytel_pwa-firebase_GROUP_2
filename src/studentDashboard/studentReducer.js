const INTIAL_STATE = {

}

export default function(state = INTIAL_STATE, action) {
  switch(action.type){
    case 'ADD_USER':
      return Object.assign({}, state, action.payload)
    default: 
      return state
  }
}