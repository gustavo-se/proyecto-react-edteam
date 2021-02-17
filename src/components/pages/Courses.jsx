import React from "react";
import CoursesContext from "../Context/CoursesContext";
import CourseGrid from "../organisms/CourseGrid";

const Courses = () => {
 return (
  <CoursesContext.Consumer>
   {context => <CourseGrid courses={context.courses} />}
  </CoursesContext.Consumer>
 );
};

export default Courses;
