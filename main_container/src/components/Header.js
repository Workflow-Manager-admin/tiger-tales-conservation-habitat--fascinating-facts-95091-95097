import React from 'react';

// PUBLIC_INTERFACE
function Header() {
  /**
   * Header component for the Tiger Tales blog.
   * Displays the main hero section with title and description.
   */
  return (
    <header className="hero">
      <div className="container">
        <div className="subtitle">Wildlife Conservation</div>
        <h1 className="title">Tiger Tales</h1>
        <div className="tagline">Conservation, Habitat & Fascinating Facts</div>
        <div className="description">
          A comprehensive look into the world of tigers, their fight for survival, 
          natural habitats around the world, and the most fascinating characteristics 
          that make these big cats one of nature's most magnificent creatures.
        </div>
        <a href="#conservation" className="btn btn-large">Explore</a>
      </div>
    </header>
  );
}

export default Header;
