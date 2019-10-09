import React from 'react';

const Image = ({ photo, alt }) => {
  return (
    <div className="image">
      <img src={photo} alt={alt} />
    </div>
  );
};

export default Image;
