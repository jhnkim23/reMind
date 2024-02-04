import React from 'react';
import 'src/components/AboutPopup/AboutPopUp.css'

function InfoPopup({ onClose }) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2 id = "title">About ReMind</h2>
        <p>We are ReMind</p>
        <button id = "close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default InfoPopup;