import React from 'react';
import PropTypes from 'prop-types'

//const mayorDeEdad = edad => edad > 18

// const persona = {'nombre' : 'Gustavo', 'apellido': 'Segovia', 'edad': 27}
// const curso = {
//       'title': 'Curso react',
//       'image': 'https://edteam-media.s3.amazonaws.com/courses/big/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg',
//       'price': '50usd'
// }

const Curso = ({title, image, price, profesor}) => (

<article className="card">

  <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <img src={image} alt={title} />
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
        <span className="small">{profesor}</span>
      </div>
    </div>
    <div className="s-main-center">
      <a className="button--ghost-alert button--tiny" href="...">{`$ ${price}`}</a>
    </div>
  </div>
</article>
)

Curso.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string
}

Curso.defaultProps={
  title: "no se encontro titulo",
  image: "no se encontro imagen",
  price: "--"
}

export default Curso