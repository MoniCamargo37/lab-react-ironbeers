import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';

const Beers = () => {
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`)
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchQuery]);

  return (

    <div>
    <Header />
    <div className='beersPage'>
      <h1>All Beers</h1>
      <label>Search</label>
      <input type="text" value={searchQuery} onChange={handleSearch} />
      {beers.map((beer) => (
        <div key={beer._id}>
          <img src={beer.image_url} alt={beer.name} />
          <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
          <p>{beer.tagline}</p>
          <p>Contributed by: {beer.contributed_by}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Beers;

