import React from 'react';
import Image from './Image';

const Modal = ({ house, handleModalCloseClick }) => {
  const alt = `House at ${house.address} with ${house.bedrooms} bedrooms and ${house.bathrooms} bathrooms priced at ${house.price}`

  return (
    <>
      <div
        class="modal fade show"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
        style={{ display: 'block' }}
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                House details
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={e => {
                  handleModalCloseClick();
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="col-sm-auto">
                <Image photo={house.photo} alt={alt} />
                <h3>$ {house.price.toLocaleString('en')}</h3>
                <p>{house.address}</p>
                <p>
                  {house.floorSpace.toLocaleString('en')} m<sup>2</sup>
                </p>
                <p style={{ fontSize: '12px' }}>{house.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-backdrop fade show" />
    </>
  );
};

export default Modal;
