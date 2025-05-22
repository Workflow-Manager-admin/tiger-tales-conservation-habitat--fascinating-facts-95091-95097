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
        <div className="subtitle">Echoes of the Wild</div>
        <h1 className="title">Tiger Tales</h1>
        <div className="tagline">Journey into the Realm of the Striped Kings</div>
        <div className="description">
          Uncover the urgent conservation sagas, explore the diverse habitats, delve into the fascinating behaviors, 
          and marvel at the unique characteristics of tigers. This blog is a tribute to their power, beauty, and fight for survival.
        </div>
        <a href="#conservation" className="btn btn-large">Begin Exploration</a>
      </div>
    </header>
  );
}

export default Header;
