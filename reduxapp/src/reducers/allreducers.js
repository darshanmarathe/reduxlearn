import {
  UPDATE_USER
} from '../actions/actions.js'

export function Todoreducer(state = [] , {type , payload}) {
  return state;
}

export function UserReducer(state ='', {type , payload}){
  switch (type) {
    case UPDATE_USER:
      return payload.user;
      break;

    default:
      return state;
      break;
  }
}
