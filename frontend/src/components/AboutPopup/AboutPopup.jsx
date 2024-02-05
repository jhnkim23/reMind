import React from 'react';
import 'src/components/AboutPopup/AboutPopUp.css'

function InfoPopup({ onClose }) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2 id = "about-title">About reMind.ai</h2>
          <p>
          reMind.ai is a platform that aims to help people organize meeting notes and transcripts through a meaningful, customizable, and intuitive 
          visualization: mind maps. The generated mind maps will prove highly effective, as they will not only provide a more comprehensive 
          understanding of what was discussed in the meeting (summaries and quotes of key ideas), but they will also be useful for making 
          important connections between the ideas of different meeting attendees. Ultimately, in the work force and during business meetings, 
          the platform will provide numerous benefits such as an aid for brainstorming, organized summarization and consolidation of information, 
          and a clear presentation of discussed information through mind maps.
          </p>
        <h2 id = "instructions-title">Instructions</h2>
        <p>To use our app and create mind maps of your meetings, either upload a .txt file of your meeting's transcript or upload the video 
          (.mp4) or audio (.mp3, .wav) file of the meeting. Submit the uploaded file, and the mind map of your meeting will be generated!
          Once you have generated your map, you can use the control panel on the bottom left to zoom in or out of the mind map (you can also use 
          your mouse to do the same thing). Feel free to play around with the map itself by dragging around nodes, and if you would like more 
          information regarding a particular node, click on the node to see the summary and relevant quotes of that node's topic. 
          </p>
        <button id = "close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default InfoPopup;