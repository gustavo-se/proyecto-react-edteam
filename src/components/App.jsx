import React from "react";
import "../styles/style.scss";
import AppRoutes from "./AppRoutes";
import CartProvider from "./Context/Cart/CartProvider";
import CoursesProvider from "./Context/CoursesProvider";

const App = () => (
 <CoursesProvider>
  <CartProvider>
   <AppRoutes />
  </CartProvider>
 </CoursesProvider>
);

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
