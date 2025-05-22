import React from 'react';

// PUBLIC_INTERFACE
function BlogSection({ id, title, content, imageUrl, imageAlt, reversed }) {
  /**
   * BlogSection component for displaying a section of the Tiger Tales blog.
   * 
   * @param {string} id - The section ID for navigation linking
   * @param {string} title - The section title
   * @param {string} content - The section content
   * @param {string} imageUrl - URL for the section image
   * @param {string} imageAlt - Alt text for the image
   * @param {boolean} reversed - Whether to reverse the layout (image on right instead of left)
   */
  return (
    <section id={id} className={`blog-section ${reversed ? 'reversed' : ''}`}>
      <div className="container">
        <div className="section-content">
          <div className="section-text">
            <h2 className="section-title">{title}</h2>
            <div className="section-body">
              {content}
            </div>
          </div>
          {imageUrl && (
            <div className="section-image">
              <img src={imageUrl} alt={imageAlt || title} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
