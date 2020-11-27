import React from 'react'
import Curso from './Curso'

const cursos = [
    {   'id': 1,
        'titulo': 'React desde 0',
        'image': 'https://edteam-media.s3.amazonaws.com/courses/small/8b7ef439-b9bc-485f-9608-d82d0d1a7a2b.png',
        'price': '40',
        'profesor': 'Gustavo'
    },
    {   'id': 2,
        'titulo': 'Vue desde 0',
        'image': 'https://edteam-media.s3.amazonaws.com/courses/small/b393cce0-3ec8-4c61-877d-92e2e04f9120.png',
        'price': '30',
        'profesor': 'Kevin'
    },
    {   'id': 3,
        'titulo': 'JS desde 0',
        'image': 'https://edteam-media.s3.amazonaws.com/courses/small/61e5a210-8dab-412e-a6dc-802c070cc18c.jpg',
        'price': '50',
        'profesor': 'Bruno'
    },
    {   'id': 4,
        'titulo': 'Python desde 0',
        'image': 'https://edteam-media.s3.amazonaws.com/courses/small/c708c2f9-2710-42bc-944b-bfad23b498cf.png',
        'price': '20',
        'profesor': 'Demian'
    }
]

const CourseGrid = () => (
    <div className='ed-grid m-grid-4'>
        {cursos.map(c => (
        
        <Curso 
            key={c.id} 
            id={c.id}
            title={c.titulo}
            image={c.image}
            price={c.price}
            profesor={c.profesor}
            
            />))}
    </div>
)
export default CourseGrid