import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Courses from "./pages/Courses";
import Course from "./pages/Course";
import Form from "./pages/Form";
import Home from "./pages/Home";
import MainMenu from "./organisms/MainMenu";
import Users from "./pages/Users";

const AppRoutes = () => {
 return (
  <Router>
   <MainMenu />
   <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/cursos/:id" component={Course} />
    <Route path="/cursos" component={Courses} />
    <Route path="/usuarios" component={Users} />
    <Route path="/formulario" component={Form} />
    <Route
     component={() => (
      <div className="ed-grid">
       <h1>Error 404</h1>
      </div>
     )}
    />
   </Switch>
  </Router>
 );
};

export default AppRoutes;
