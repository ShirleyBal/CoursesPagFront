import { useEffect, useState } from "react";
import styles from "./allCourses.module.css";
import React from "react";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/courses") // Ajusta la URL según tu backend
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  return (
    <section className={styles.allCoursesContainer}>
      <h2>All Courses</h2>
      <div className={styles.courseList}>
        {courses.map((course) => (
          <div key={course.id} className={styles.courseCard}>
            <img src={course.image} alt={course.name} />
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <span>${course.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllCourses;
