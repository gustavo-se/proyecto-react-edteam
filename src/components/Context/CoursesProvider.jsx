import React, { Component } from "react";
import CoursesContext from "./CoursesContext";

export default class CoursesProvider extends Component {
 constructor(props) {
  super(props);

  this.state = {};
 }

 render() {
  return (
   <CoursesContext.Provider value={this.state}>
    {this.props.children}
   </CoursesContext.Provider>
  );
 }
}
