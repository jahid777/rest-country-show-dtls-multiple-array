import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
  const [country, setCountry] = useState([]);
  useEffect(()=>{
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => setCountry(data));                       
  },[])                       
return (
<div>
    <h1>TOTAL COUNTRY: {country.length}</h1>  
    {
      country.map(singleCountry => <Country singleCountry={singleCountry}></Country> )                       
    }                
</div>
);
};

export default Home;

