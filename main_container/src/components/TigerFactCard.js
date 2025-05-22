import React from 'react';

// PUBLIC_INTERFACE
function TigerFactCard({ title, fact, icon }) {
  /**
   * TigerFactCard component for displaying interesting tiger facts in a card format.
   * 
   * @param {string} title - The fact title
   * @param {string} fact - The fact content
   * @param {string} icon - An emoji or icon character to display
   */
  return (
    <div className="fact-card">
      <div className="fact-icon">{icon}</div>
      <h3 className="fact-title">{title}</h3>
      <p className="fact-content">{fact}</p>
    </div>
  );
}

export default TigerFactCard;
