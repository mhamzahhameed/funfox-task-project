import React from "react";
import "./Modal.css";
import Close from "../../../assets/images/close.png";
import ClockHome from "../../../assets/images/clockhome.png";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;


  return (
    <div className="modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img
          src={Close}
          alt="close-button"
          className="close-button"
          onClick={onClose}
        />
        <p>Guide Sheet</p>
        <div>
          <p>So, what do you think the definition of setting is?</p>
          <div className="paragraph-group">
            <p id="Quest-2">Any guesses? </p>
            <p id="Para-hr">
            <span> &gt; Setting is the time and place of a story.</span>
              <hr />
            </p>
            <p id="Hint">Hint:</p>
            <img src={ClockHome} alt="Clock and Home" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
