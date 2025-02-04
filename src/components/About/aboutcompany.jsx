import React from 'react';
import styles from './company.module.css';

const Aboutcompany = () => {
    return (
        <div className={styles.container}>
          <h2 className={styles.title}>Why Choose Us?</h2>
          <p>En Coop-work, nos enorgullece ser una de las principales plataformas de formación en Europa, comprometidos con el desarrollo 
            integral de nuestros estudiantes. Creemos en el poder del aprendizaje de calidad y la importancia de una educación accesible 
            para todos.
            Nuestra misión es brindar a nuestros alumnos las mejores bases para su futuro profesional, con un acompañamiento cercano y un 
            enfoque práctico que les permita adquirir las habilidades que el mercado actual demanda.</p>
          <div className={styles.reasons}>
            <div className={styles.reason}>
              <img src="https://img.icons8.com/?size=100&id=25393&format=png&color=000000" alt="Expert Instructors" className={styles.icon} />
              <h3>Expert Instructors</h3>
              <p>Learn from industry experts with years of experience in the field.</p>
            </div>
            <div className={styles.reason}>
              <img src="https://img.icons8.com/?size=100&id=fqS8lUEqrUKu&format=png&color=000000" alt="Students" className={styles.icon} />
              <h3>Students</h3>
              <p>Training online students from all over the world.</p>
            </div>
            <div className={styles.reason}>
              <img src="https://img.icons8.com/?size=100&id=StYEcVaEn3GL&format=png&color=000000" alt="Certification" className={styles.icon} />
              <h3>Certification</h3>
              <p>Earn certificates to showcase your skills and achievements.</p>
            </div>
            <div className={styles.reason}>
              <img src="https://img.icons8.com/?size=100&id=eYceOAlmU2md&format=png&color=000000" alt="Learn on Any Device" className={styles.icon} />
              <h3>+50%</h3>
              <p>Has returned to study with us.</p>
            </div>
          </div>
        </div>
    );
};

export default Aboutcompany;
