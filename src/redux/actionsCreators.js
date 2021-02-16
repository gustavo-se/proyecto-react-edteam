import { ADD_TO_CART, QUIT_FROM_CART } from './actions'

const addToCart = id => ({
 type: ADD_TO_CART,
 id
})

const quitFromCart = id => ({
 type: QUIT_FROM_CART,
 id
})

export { addToCart, quitFromCart }
