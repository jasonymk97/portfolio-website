export const getPortfolioItems = async () => {
  try {
    const response = await fetch('https://api.example.com/portfolio');
    if (!response.ok) {
      throw new Error('Failed to fetch portfolio items');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching portfolio items:', error);
    return [];
  }
};

const portfolioData = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of project 1...',
      imageUrl: 'project1.jpg',
      category: 'Web Development',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of project 2...',
      imageUrl: 'project2.jpg',
      category: 'Mobile App Development',
    },
    // Add more portfolio items as needed
];
  
export default portfolioData;
  