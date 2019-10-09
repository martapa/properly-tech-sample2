import React from 'react';
import Image from './Image';

const Modal = ({ house, handleModalCloseClick }) => {
  const pluralBed = house.bedrooms === 1 ? 'Bedroom' : 'Bedrooms';
  const pluralBath = house.bathrooms === 1 ? 'Bathroom' : 'Bathrooms';
  const alt = `House at ${house.address} with ${house.bedrooms} ${pluralBed} and ${house.bathrooms} ${pluralBath} priced at ${house.price}`;
  const title = house.address.split(",")[0];
  return (
    <>
      <div
        className="modal fade show"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
        style={{ display: 'block' }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                {title}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={e => {
                  handleModalCloseClick();
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="col-sm-auto">
                <Image photo={house.photo} alt={alt} />
                <h3>$ {house.price.toLocaleString('en')}</h3>
                <p>{house.address}</p>
                <p>
                  {house.floorSpace.toLocaleString('en')} m<sup>2</sup>
                </p>
                <p>
                  {pluralBed}: {house.bedrooms}
                </p>
                <p>
                  {pluralBath}: {house.bathrooms}
                </p>
                <p style={{ fontSize: '12px' }}>{house.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </>
  );
};

export default Modal;
