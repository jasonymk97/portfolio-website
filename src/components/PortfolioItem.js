import React from 'react';

function PortfolioItem({ item }) {
  return (
    <div className="portfolio-item">
      <img src={item.imageUrl} alt={item.title} />
      <div className="portfolio-item-details">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p><strong>Category:</strong> {item.category}</p>
      </div>
    </div>
  );
}

export default PortfolioItem;
