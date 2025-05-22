import React from 'react';

// PUBLIC_INTERFACE
function Navigation() {
  /**
   * Navigation component for the Tiger Tales blog.
   * Displays the site logo and main navigation menu.
   */
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="logo">
            <span className="logo-symbol">🐯</span> Tiger Tales
          </div>
          <div className="nav-links">
            <a href="#conservation" className="nav-link">Conservation</a>
            <a href="#habitat" className="nav-link">Habitat</a>
            <a href="#facts" className="nav-link">Facts</a>
            <a href="#gallery" className="nav-link">Gallery</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
