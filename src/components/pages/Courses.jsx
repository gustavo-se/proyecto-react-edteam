import React from 'react'
import CourseGrid from '../organisms/CourseGrid'
import { connect } from 'react-redux'

const Courses = ({courses}) => <CourseGrid courses = { courses } />


const mapStateToProps = state => ({
    courses: state.coursesReducer.courses
})
export default connect(mapStateToProps, {})(Courses)  