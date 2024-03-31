import React, { useEffect, useState } from "react";
import "./Modal.css";
import Close from "../../../assets/images/close.png";
import ClockHome from "../../../assets/images/clockhome.png";

const Modal = ({ isOpen, onClose }) => {
  const [showBlueBox, setShowBlueBox] = useState(false);

  useEffect(() => {
    function handleClick(event) {
      const isClickOutsideNextButton = !event.target.closest('.close-button');
      if (isClickOutsideNextButton) {
        setShowBlueBox(true);
        setTimeout(() => setShowBlueBox(false), 500); // Hide after 1 second
      }
    }

    document.body.addEventListener('click', handleClick);

    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, []); // This dependency array ensures the effect runs only once, like componentDidMount

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
      {showBlueBox && isOpen &&  <span className="close-button-box"></span>}
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
