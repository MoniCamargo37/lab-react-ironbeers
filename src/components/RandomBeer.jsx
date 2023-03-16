import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';

const RandomBeer = () => {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        setBeer(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (

    <div>
    <Header />
    <div className='randomBeer'>
      {/* <Link to="/">Back Home</Link> */}
      <h1>{beer.name}</h1>
      <img src={beer.image_url} alt={beer.name} />
      <p>{beer.tagline}</p>
      <p>First Brewed: {beer.first_brewed}</p>
      <p>Attenuation Level: {beer.attenuation_level}</p>
      <p>Description: {beer.description}</p>
      <p>Contributed By: {beer.contributed_by}</p>
    </div>
    </div>
  );
};

export default RandomBeer;