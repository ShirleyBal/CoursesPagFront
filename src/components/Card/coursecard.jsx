import styles from "./courseCard.module.css";

const CourseCard = ({ course }) => {
  return (
    <div className={styles.courseCard}>
      <img src={course.image} alt={course.name} />
      <h3>{course.name}</h3>
      <p>{course.description}</p>
      <span>${course.price}</span>
    </div>
  );
};

export default CourseCard;
