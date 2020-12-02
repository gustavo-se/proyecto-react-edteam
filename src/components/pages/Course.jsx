import React, {useState, useEffect} from 'react'
import axios from 'axios'
import useCourse from '../CustomHooks/useCourse'

const Course = ({match})=>{

    const [comment, setComment] = useState('Escribe tu comentario')
    const course = useCourse(match.params.id)

   
const myComment =e => {
    setComment(e.target.value)
}

    return(
        course ? (
            <div className='ed-grid'>
        <div className='l-block'>
            <h1 className='m-cols-3'>{course.titulo}</h1>
            <img className='m-cols-1' src={course.image} alt={course.titulo}/>
            <p className='m-cols-2'>Profesor : {course.profesor}</p>
        </div>
        <div className='ed-grid'>
            <h2>Escribe tu Comentario</h2>
            <input type="text" placeholder='Escribe...' onChange={myComment.bind(this)}/>
            <p>{comment}</p>
        </div>
        </div>
    ) : (
        <div className='ed-grid'>
            <h1>El curso no existe</h1>
        </div>
    )
    )
}
export default Course