import React, { useState } from 'react';
import styles from './navBar.module.css'; 

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setIsMobile(!isMobile);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>CursoPlataforma</div>
      <button className={styles.navbarToggle} onClick={toggleMenu}>
        <span className={styles.navbarIcon}></span>
        <span className={styles.navbarIcon}></span>
        <span className={styles.navbarIcon}></span>
      </button>
      <ul className={`${styles.navbarLinks} ${isMobile ? styles.active : ''}`}>
        <li className={styles.navbarItem}><a href="#home">Inicio</a></li>
        <li className={styles.navbarItem}><a href="#courses">Cursos</a></li>
        <li className={styles.navbarItem}><a href="#pricing">Precios</a></li>
        <li className={styles.navbarItem}><a href="#contact">Contacto</a></li>
        <li className={`${styles.navbarItem} ${styles.navbarUser}`}>
          <a href="#login">
            <span className={styles.navbarUserIcon}>👤</span> Iniciar Sesión
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
