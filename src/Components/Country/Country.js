import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
   const {name, numericCode, nativeName} = props.singleCountry;  
   const cartDesign ={
     border: '2px solid red',
     textAlign: 'center',
     margin: '20px',
     padding: '20px',
     borderRadius: '15px'
   }                    
return (
<div style={cartDesign}>
    <h1> Name: {name}</h1> 
    <h2> NumericCode: {numericCode}</h2>
    <h2> nativeName: {nativeName}</h2>     
    
    <Link to={`/country/${name}`}>show of numericCode: {numericCode}</Link>             
</div>
);
};

export default Country;