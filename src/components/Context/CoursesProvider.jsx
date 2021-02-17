import axios from "axios";
import React, { Component } from "react";
import CoursesContext from "./CoursesContext";

export default class CoursesProvider extends Component {
 constructor(props) {
  super(props);

  this.state = {
   courses: [],
  };
 }

 componentDidMount() {
  axios
   .get(
    "https://my-json-server.typicode.com/gustavo-se/json-placeholder/conocimientos"
   )
   .then(res =>
    this.setState({
     courses: res.data,
    })
   );
 }

 render() {
  return (
   <CoursesContext.Provider value={this.state}>
    {this.props.children}
   </CoursesContext.Provider>
  );
 }
}
