import React from "react";

const Modal = ({ house, handleModalCloseClick }) => {
  return (
    <>
      <div
        class="modal fade show"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
        style={{ display: "block" }}
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
                <div className="image">
                  <img src={house.photo} alt="House"></img>
                </div>
                <h3>$ {house.price.toLocaleString("en")}</h3>
                <p>{house.address}</p>
                <p>{house.floorSpace.toLocaleString("en")} m<sup>2</sup></p>
                <p style={{ fontSize: "12px" }}>{house.description}</p>
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