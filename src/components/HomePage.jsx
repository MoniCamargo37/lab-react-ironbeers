import React from 'react';
import { Link } from 'react-router-dom';
import beersImage from '../assets/beers.png';
import randomBeerImage from '../assets/random-beer.png';
import newBeerImage from '../assets/new-beer.png';

const HomePage = () => {
  return (
    <div className='HomePage'>
      <h1>Welcome to IronBeers!</h1>
      <p>Choose from our selection of beers:</p>
          <Link to="/beers">
            <img src={beersImage} alt="All Beers" />
            <p>All Beers</p>
          </Link>
          <p>Explore our full list of beers</p>
     
          <Link to="/random-beer">
            <img src={randomBeerImage} alt="Random Beer" />
            <p>Random Beer</p>
          </Link>
          <p>Get a surprise with each click</p>
       
          <Link to="/new-beer">
            <img src={newBeerImage} alt="New Beer" />
            <p>New Beer</p>
          </Link>
          <p>Create your own beer</p>
    </div>
  );
};

export default HomePage;


