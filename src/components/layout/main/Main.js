import React, { useEffect, useState } from "react";
import "./Main.css";
import Modal from "../../modals/screenTwoModals/Modal.js";
import FirstScreen from "../screens/firstScreen/FirstScreen.js";
import SecondScreen from "../screens/secondScreen/SecondScreen.js";
import Funfox from "../../../assets/logos/funfox.png";
import Week1 from "../../../assets/images/week1.png";
import Pencil from "../../../assets/images/pencil.png";
import Scale from "../../../assets/images/scale.png";
import RightVector from "../../../assets/images/rightVector.png";
import LeftVector from "../../../assets/images/leftVector.png";
import Book from "../../../assets/images/book.png";
import ToAsk from "../../../assets/images/to-ask.png";
import OpenBook from "../../../assets/images/openBook.png";
import Phone from "../../../assets/images/phone.png";
import Cap from "../../../assets/images/cap.png";
import Voice from "../../../assets/images/voice.png";
import Next from "../../../assets/images/next.png";
import Back from "../../../assets/images/back.png";
import Page1 from "../../../assets/images/page1.png";
import Page2 from "../../../assets/images/page2.png";
import Info from "../../../assets/images/info.png";
const Main = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBlueBox, setShowBlueBox] = useState(false);


  const onPageChange = (pageIndex) => setCurrentPage(pageIndex);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  document.addEventListener('keydown', function(event) {
    
    if (event.keyCode === 37) { 
      onPageChange(1);
    }
    else if (event.keyCode === 39) {
      onPageChange(2);
    }
  });

  useEffect(() => {
    function handleClick(event) {
      const isClickOutsideNextButton = !event.target.closest('#next');
      const isClickOutsideBackButton = !event.target.closest('#back');
      if (isClickOutsideNextButton && isClickOutsideBackButton ) {
        setShowBlueBox(true);
        setTimeout(() => setShowBlueBox(false), 500); // Hide after 1 second
      }
    }

    document.body.addEventListener('click', handleClick);

    return () => {
      document.body.removeEventListener('click', handleClick);
    };
    // eslint-disable-next-line
  }, []);

useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space" && currentPage === 2 && !isModalOpen) {
        event.preventDefault();
        openModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentPage, isModalOpen]);
  return (
    <div className="main">
      <div
        class={
          isModalOpen === true ? "content-between blur" : "content-between"
        }
      >
        <img src={Funfox} alt="Company logo" id="company-logo" />
        {!isModalOpen && <img src={Pencil} alt="Pencil" id="pencil" />}
        {!isModalOpen && <img src={OpenBook} alt="Open Book" id="open-book" />}
        {!isModalOpen && <img src={Phone} alt="Phone" id="phone" />}
        {!isModalOpen && <img src={Voice} alt="Voice" id="voice" />}
        {!isModalOpen && (
          <img
            src={Next}
            alt="Next"
            id="next"
            onClick={() => onPageChange(2)}
            className={currentPage === 1 ? "active" : "none"}
          />
        )}
        {!isModalOpen && (
          <img
            src={Back}
            alt="back"
            id="back"
            onClick={() => onPageChange(1)}
            className={currentPage === 2 ? "active" : "none"}
          />
        )}
        {!isModalOpen && <img src={Info} alt="info" id="info" />}
        {!isModalOpen && <img src={Cap} alt="Cap" id="cap" />}
        {!isModalOpen && <img src={Scale} alt="Scale" id="scale" />}
        <img src={RightVector} alt="Right Vector" id="right-vector" />
        <img src={LeftVector} alt="Left Vector" id="left-vector" />
        {currentPage === 1 && <img src={Week1} alt="Week1 logo" id="week-1" />}
        {currentPage === 1 && <img src={Book} alt="Book" id="book" />}
        {currentPage === 2 && (
          <img
            src={ToAsk}
            alt="To ask something"
            id="to_ask"
            onClick={openModal}
          />
        )}
        {currentPage === 1 && !isModalOpen && (
          <img src={Page1} alt="Page Number" id="page-1" />
        )}
        {currentPage === 2 && !isModalOpen && (
          <img src={Page2} alt="Page Number" id="page-2" />
          )}
          {showBlueBox && currentPage === 1 && <span id="first-page-box"></span>}
          {showBlueBox && currentPage === 2 && <span id="second-page-box"></span>}
          {showBlueBox && currentPage === 2 && <span id="info-box"></span>}
      </div>
      {currentPage !== 2 && <FirstScreen isModalOpen={isModalOpen} />}
      {currentPage !== 1 && <SecondScreen isModalOpen={isModalOpen} />}
      <Modal isOpen={isModalOpen} onClose={closeModal} />

    </div>
  );
};

export default Main;
