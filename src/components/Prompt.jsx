import React from "react";

function Prompt({ handleEmptyTrash, setisOpen, Theme }) {
  return (
    <>
      <div className="modal-container">
        <div className="modal-text">Are you sure you want to empty trash?</div>
        <div className="modal-button">
          <button
            className="input-button-modal"
            onClick={() => {
              handleEmptyTrash();
              setisOpen(false);
            }}
          >
            Yes
          </button>
          <button
            className="input-button-modal"
            onClick={() => setisOpen(false)}
          >
            No
          </button>
        </div>
      </div>
    </>
  );
}

export default Prompt;
