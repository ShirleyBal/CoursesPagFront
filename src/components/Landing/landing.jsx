import React from 'react';
import styles from './landing.module.css';
import Aboutcompany from '../About/aboutcompany';

const Landing = () => {
    return (
        <div>
            <section className={styles.landing}>
                <h1>Welcome to Our Course Platform</h1>
                <p className={styles.subtitle}>Your journey to learning starts here.</p>
            </section>

            {/* La sección de "Why Choose Us?" aparece después de la landing */}
            <Aboutcompany />
        </div>
    );
}

export default Landing;
