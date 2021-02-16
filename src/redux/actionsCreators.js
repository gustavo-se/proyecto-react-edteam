import { ADD_TO_CART, GET_COURSES_LIST, QUIT_FROM_CART } from './actions'
import axios from 'axios'

const addToCart = id => ({
 type: ADD_TO_CART,
 id
})

const quitFromCart = id => ({
 type: QUIT_FROM_CART,
 id
})

const getCoursesList = () => dispatch => {
  axios.get('https://my-json-server.typicode.com/gustavo-se/json-placeholder/conocimientos')
  .then(res => {
   return dispatch({
    type: GET_COURSES_LIST,
    courses: res.data
   })
  })
}
export { addToCart, quitFromCart, getCoursesList }
