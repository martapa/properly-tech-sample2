import React from 'react';

const Content = ({ price, address, bedrooms, bathrooms }) => {
  const pluralBed = bedrooms === 1 ? "Bedroom" : "Bedrooms"
  const pluralBath = bathrooms === 1 ? "Bathroom" : "Bathrooms"
  return (
    <>
      <h3>$ {price.toLocaleString('en')}</h3>
      <p>{address}</p>
      <div className="row meta">
        <div className="col-sm-auto">{pluralBed} {bedrooms}</div>
        <div className="col-sm-auto">{pluralBath} {bathrooms}</div>
      </div>
    </>
  );
};

export default Content;
