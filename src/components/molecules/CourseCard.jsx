import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { addToCart, quitFromCart  } from '../../redux/actionsCreators';

//const mayorDeEdad = edad => edad > 18

// const persona = {'nombre' : 'Gustavo', 'apellido': 'Segovia', 'edad': 27}
// const curso = {
//       'title': 'Curso react',
//       'image': 'https://edteam-media.s3.amazonaws.com/courses/big/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg',
//       'price': '50usd'
// }

const CourseCard= ({title, image, price, professor, id, addCourseCart, cart, quitCourseFromCart}) => (

<article className="card">
  <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
  <Link to={`/cursos/${id}`}>
    <img src={image} alt={title} />
  </Link>
  </div>
  <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <h3 className="t5 s-mb-2 s-center">
      {/* {persona.nombre} */}
      {/* {`Hola me llamo ${persona.nombre} y mi apellido es ${persona.apellido}`} */}
      {/* { mayorDeEdad(persona.edad) ? "soy mayor de edad" : "no soy mayor"} */}
      {/* { mayorDeEdad(persona.edad) ? <h3> soy mayor </h3> : <p>no soy mayor</p>} */}
      {title}
    </h3>
    <div className="s-mb-2 s-main-center">
      <div className="card__teacher s-cross-center">
        <span className="small">{professor}</span>
      </div>
    </div>
    <div className="s-main-center">

      { cart.find(a => a === id)
        ? 
        <button className="button--ghost-alert button--tiny"
        onClick={() => quitCourseFromCart(id)}>
          Remover del carrito
        </button>
        :
        <button className="button--ghost-alert button--tiny"
          onClick={() => addCourseCart(id)}>
          {`$ ${price}`}
        </button>
      }

    </div>
  </div>
</article>
)

CourseCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string
}

CourseCard.defaultProps={
  title: "no se encontro titulo",
  image: "no se encontro imagen",
  price: "--"
}

const mapStateToProps = state => (
  {
    cart: state.rootReducer.cart
  }
)

const mapDispatchToProps = dispatch => ({ 
  addCourseCart(id){
    dispatch(addToCart(id))
  },
  quitCourseFromCart(id){
    dispatch(quitFromCart(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CourseCard)