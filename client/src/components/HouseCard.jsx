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
  return (
    <div
      className="col-sm-4"
      onClick={e => {
        handleHouseClick(id);
      }}
    >
      <Image photo={photo} alt="House picture" />
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
