import React from 'react';
import "../styles/style.scss"
import AppRoutes from './templates/AppRoutes'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { getCoursesList } from '../redux/actionsCreators';

store.dispatch(getCoursesList())

const App = () => (

  <Provider store={store}>
    <AppRoutes />
  </Provider>
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