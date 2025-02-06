import Navbar from './Navbar/navBar.jsx';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="content">{children}</main>
    </div>
  );
};

export default Layout;
