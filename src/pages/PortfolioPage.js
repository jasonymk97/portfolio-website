import React, { useState, useEffect } from 'react';
import PortfolioItem from '../components/PortfolioItem';
import SearchForm from '../components/SearchForm';
import { getPortfolioItems } from '../data/portfolioData'; // Assuming you have a function to fetch portfolio data

function PortfolioPage() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch portfolio items from an external API or data source
    const fetchData = async () => {
      try {
        const data = await getPortfolioItems(); // Assuming getPortfolioItems is an async function that fetches data
        setPortfolioItems(data);
      } catch (error) {
        console.error('Error fetching portfolio items:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Filter portfolio items based on search term
  const filteredPortfolioItems = portfolioItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h2>My Portfolio</h2>
      <SearchForm onSearch={handleSearch} />
      <div className="portfolio-items">
        {filteredPortfolioItems.map(item => (
          <PortfolioItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default PortfolioPage;
