import React from 'react';
import Card from '../components/Card';
import { useEffect, useState } from 'react';

function Dashboard() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('../js/movies.json')
      .then((response) => response.json())
      .then((json) => setMovies(json))
      .catch((error) => console.error('Error:', error));
  }, []);


  return (
    <div>
      {movies.map((item) => (
        <Card foto={item.foto}  />
      ))}
    </div>
  );
}

export default Dashboard;