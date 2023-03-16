import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';

const NewBeer = () => {
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
    <Header />
    <div className='newBeer'>
      <h1>Create a New Beer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="tagline"
          placeholder="Tagline"
          value={formData.tagline}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="first_brewed"
          placeholder="First Brewed"
          value={formData.first_brewed}
          onChange={handleChange}
        />
        <input
          type="text"
          name="brewers_tips"
          placeholder="Brewers Tips"
          value={formData.brewers_tips}
          onChange={handleChange}
        />
        <input
          type="number"
          name="attenuation_level"
          placeholder="Attenuation Level"
          value={formData.attenuation_level}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contributed_by"
          placeholder="Contributed By"
          value={formData.contributed_by}
          onChange={handleChange}
        />
        <button type="submit">Create Beer</button>
      </form>
    </div>
    </div>
  );
};

export default NewBeer;
