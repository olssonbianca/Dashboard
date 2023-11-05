
import React, { createContext, useContext, useEffect, useState } from 'react';
const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
 const [users, setUsers] = useState([]);
  const [movies, setMovies] = useState([]);
 /* const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesResponse = await fetch('./Movies.json');
        const moviesData = await moviesResponse.json();
        setMovies(moviesData);

        const usersResponse = await fetch('./User.json');
        const usersData = await usersResponse.json();
        setUsers(usersData);

        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }*/

  return (
    <UserContext.Provider value={{ users, movies, setMovies, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};
