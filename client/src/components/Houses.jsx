import React from "react";
import HouseCard from "./HouseCard";

const Houses = ({houses, handleHouseClick}) => {
  const housesList = houses;
  const houseCards = housesList.map(house => (
    <HouseCard
      id={house._id}
      photo={house.photo}
      address={house.address}
      bedrooms={house.bedrooms}
      bathrooms={house.bathrooms}
      price={house.price}
      handleHouseClick={handleHouseClick}
    />
  ));

  return <div className="row">{houseCards}</div>;
};

export default Houses;
