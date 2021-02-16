import React from 'react'
import CourseCard from '../molecules/CourseCard'
import whithLoader from '../HOC/withLoader'

const CourseGrid = ({courses}) => {
  return(
    <div className='ed-grid m-grid-4'>
    {
      courses.map(c => (
    
        <CourseCard
            key={c.id} 
            id={c.id}
            title={c.titulo}
            image={c.image}
            price={c.price}
            professor={c.professor}
            
            />))}
    </div>
    )}

export default  CourseGrid