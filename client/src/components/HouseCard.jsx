import React from 'react';

import Content from './Content';
import Image from './Image';

const HouseCard = ({
  id,
  photo,
  address,
  bedrooms,
  bathrooms,
  price,
  handleHouseClick
}) => {
  const alt = `House at ${address} with ${bedrooms} bedrooms and ${bathrooms} bathrooms priced at ${price}`;
  return (
    <div
      className="col-sm-4"
      onClick={e => {
        handleHouseClick(id);
      }}
    >
      <Image photo={photo} alt={alt} />
      <Content
        price={price}
        address={address}
        bedrooms={bedrooms}
        bathrooms={bathrooms}
      />
    </div>
  );
};

export default HouseCard;
