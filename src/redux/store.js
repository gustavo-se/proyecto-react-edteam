import { combineReducers, createStore } from 'redux'
import { ADD_TO_CART, QUIT_FROM_CART } from './actions'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialStore = {
 cart: [],
}
const initialCourses = {
 courses : []
}

const rootReducer = (state = initialStore , {type, id}) =>{

 if(type === ADD_TO_CART){

  if(state.cart.find(a => a === id)) return state
  return {
   ...state,
   cart: state.cart.concat(id)
  }
 }
 
 if(type === QUIT_FROM_CART){
  return {
   ...state,
   cart: state.cart.filter(c => c !== id)
  }
 }
 return state
}

const coursesReducer = (state = initialCourses, action) => {
 return state
}

export default createStore(combineReducers({rootReducer, coursesReducer}), composeWithDevTools())
