import React from 'react';

const Content = ({ price, address, bedrooms, bathrooms }) => {
  return (
    <>
      <h3>$ {price.toLocaleString('en')}</h3>
      <p>{address}</p>
      <div className="row meta">
        <div className="col-sm-auto">Bedrooms {bedrooms}</div>
        <div className="col-sm-auto">Bathrooms {bathrooms}</div>
      </div>
    </>
  );
};

export default Content;
