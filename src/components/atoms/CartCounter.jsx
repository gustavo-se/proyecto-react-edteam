import React from 'react'
import { connect } from 'react-redux'

const CartCounter = ({cartLength}) => {
 return (
  <li>
    <button className="button tiny ghost">{`Carrito:${cartLength.length}`}</button>
  </li>
 )
}

const mapStateToProps = state => (
 {
  cartLength: state.rootReducer.cart
 }
)

const matDispatchToProps = () => ({

})

export default connect( mapStateToProps, matDispatchToProps )(CartCounter)
