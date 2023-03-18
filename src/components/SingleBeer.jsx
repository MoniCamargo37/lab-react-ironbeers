import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams} from "react-router-dom";
import Header from './Header';

export default function SingleBeer() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState({});

  useEffect(() => {
    const getBeer = async () => {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
        );
        setBeer(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBeer();
  }, [beerId]);
  console.log(beerId);

  return (
   
  <div>
   <Header />
   <div className="singleBeerParent">
    <div className="singleBeer">
      <h1>{beer.name}</h1>
      <img src={beer.image_url} alt={beer.name} />
      <p>{beer.tagline}</p>
      <p>First Brewed: {beer.first_brewed}</p>
      <p>Attenuation Level: {beer.attenuation_level}</p>
      <p>Description: {beer.description}</p>
      <p>Contributed By: {beer.contributed_by}</p>
    </div>
    </div>
    </div>
  );
}
