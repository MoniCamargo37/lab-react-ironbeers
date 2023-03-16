import React from 'react';
import { Link } from 'react-router-dom';
import homeImage from '../assets/home.png';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/"> <img src={homeImage} alt="Home" /></Link>
      </nav>
    </header>
  );
};

export default Header;
