import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
  const {nameKey} = useParams(); 
  
  const [country , setCountry] = useState([]); //faka array disi karon amra data ghualke faka array hisabe pete chay ...object akare chayle object set korte partam but faka object dile amra map ba length ber korte partam na ..karon only array ar upor map ,filter, find ba length chlano jay
  console.log(country);
  
  useEffect(()=>{
     const url = `https://restcountries.eu/rest/v2/name/${nameKey}`
      fetch(url)
     .then(res => res.json())
     .then(data =>{          
      setCountry(data[0])
      console.log(data);
})                       
}) 
return (
<div style={{backgroundColor: 'red', textAlign: 'center'}}>
   <p>this is the country numericCode :{nameKey}</p> 
    <h1>Name: {country.name}</h1>  
     <img style={{height: '300px'}} src={country.flag} alt=""/>   
     <h1>1st border: {country.borders && country.borders[0]}</h1> 
     {/* akhene ekta  array ar modde arkta array chilo jar karone sorasori country theke pay nay jar jonno condioton die likha */}

    
</div>
);
};

export default CountryDetails;



