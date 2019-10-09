import React from 'react';

const Content = ({ price, address, bedrooms, bathrooms }) => {
  const pluralBed = bedrooms === 1 ? "Bedroom" : "Bedrooms"
  const pluralBath = bathrooms === 1 ? "Bathroom" : "Bathrooms"
  return (
    <>
      <h3>$ {price.toLocaleString('en')}</h3>
      <p>{address}</p>
      <h4>{pluralBed}: {bedrooms}</h4>
      <h4>{pluralBath}: {bathrooms}</h4>
    </>
  );
};

export default Content;
