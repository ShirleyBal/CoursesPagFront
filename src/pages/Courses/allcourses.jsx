import { useEffect, useState } from "react";
import styles from "./allCourses.module.css";
import CourseCard from '../../components/Card/coursecard'
import React from "react";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://coursespagback.onrender.com/api/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  return (
    <section className={styles.coursesContainer}>
      <h2>All Courses</h2>
      <div className={styles.courseList}>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};


export default AllCourses;
