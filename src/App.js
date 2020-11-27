import React from 'react';
import "./styles/style.scss"
import Banner from './Banner'
import CourseGrid from './CourseGrid'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Course from './Course';

const App = () => (

<Router>
  <Switch>
      <Route path='/' exact component={Banner} />
      <Route path='/cursos/:id' component={Course} />
      <Route path='/cursos'  component={CourseGrid} />
      <Route component={()=>(
        <div className='ed-grid' >
          <h1>Error 404</h1>
        </div>
      )
      }  
      />  
    </Switch> 
  </Router>
)


export default App;

//Restricciones JSX
// 1) toda etiqueta debe cerrarse
// 2) los componentes deben devolver un solo elemento padre
// 3) apoyarse de los Fragment cuando necesito devolcer 2 elementos
// 4) Fragment => <> </>
// 5) img siempre se cierra
// 6) class => className
// 7) for => htmlFor
// 8) no se puede usar if, else o while en JSX