import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Landing from './pages/Landing/landing.jsx';
import AllCourses from './pages/Courses/allcourses.jsx'; // Importa la página de todos los cursos
import React from 'react';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/courses" element={<AllCourses />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
