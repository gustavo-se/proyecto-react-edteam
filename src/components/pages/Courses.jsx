import React, { useContext } from "react";
import CoursesContext from "../Context/CoursesContext";
import CourseGrid from "../organisms/CourseGrid";

const Courses = () => {
 const { courses } = useContext(CoursesContext);

 return <CourseGrid courses={courses} />;
};

export default Courses;
