import React, { useState, useCallback } from 'react';
import * as AiIcons from "react-icons/ai";
import 'src/components/NodePopup/NodePopup.css'


function NodePopup({popup, setPopup, nodeID, quotes, summary}) {
    function handleClick(e) {
        e.preventDefault();
        setPopup(!popup);
    }

    return (
        <>
            <div id='popup-wrapper'>
                <div id='header'>
                    <AiIcons.AiOutlineClose
                        onClick={handleClick} size={28}
                    />
                    <div id='title'>
                        <h2>{nodeID}</h2>
                    </div>
                </div>
                <div id='content'>
                    <h4>Summary</h4>
                    <h4>Quotes</h4>
                </div>
            </div>
        </>
    );
}

export default NodePopup;