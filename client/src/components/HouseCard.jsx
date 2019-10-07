import React from "react";

const HouseCard = ({ id, photo, address, bedrooms, bathrooms, price, handleHouseClick }) => {
  return (
    <div className="col-sm-4" onClick={e => {
        handleHouseClick(id);
    }}>
      <div className="image">
        <img src={photo} alt="House"></img>
      </div>
      <h3>$ {price.toLocaleString("en")}</h3>
      <p>{address}</p>
      <div className="row meta">
        <div className="col-sm-auto">Bedrooms {bedrooms}</div>
        <div className="col-sm-auto">Bathrooms {bathrooms}</div>
      </div>
    </div>
  );
};

export default HouseCard;
