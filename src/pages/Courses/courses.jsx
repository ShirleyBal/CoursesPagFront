import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import styles from "./allCourses.module.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate(); // Hook para redireccionar

  useEffect(() => {
    fetch("https://coursespagback.onrender.com/api/courses") // Ajusta la URL según tu backend
      .then((response) => response.json())
      .then((data) => {
        const recommendedCourses = data.slice(0, 3); // Solo los 3 recomendados
        setCourses(recommendedCourses);
      })
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  return (
    <section className={styles.coursesContainer}>
      <h2>Recommended Courses</h2>
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
      {/* Botón para redirigir */}
      <button className={styles.moreCoursesButton} onClick={() => navigate("/courses")}>
        + Courses
      </button>
    </section>
  );
};

export default Courses;
