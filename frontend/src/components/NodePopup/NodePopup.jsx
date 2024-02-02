import React, { useState, useCallback } from 'react';
import * as AiIcons from "react-icons/ai";
import 'src/components/NodePopup/NodePopup.css'


function NodePopup({popup, setPopup, nodeID, quotes, summary}) {
    function handleClick(e) {
        e.preventDefault();
        setPopup(!popup);
    }

    const quoteItems = quotes.map(quote => 
        <li key={quote}>"{quote}"</li>
    );

    return (
        <>
            <div id='popup-wrapper'>
                <div id='header'>
                    <AiIcons.AiOutlineClose
                        onClick={handleClick} size={28}
                        style={{cursor:'pointer'}}
                    />
                    <div id='title'>
                        <h2>{nodeID}</h2>
                    </div>
                </div>
                <div id='content'>
                    <h4>Summary</h4>
                    <p>{summary}</p>
                    <h4>Quotes</h4>
                    <ul>{quoteItems}</ul>
                </div>
            </div>
        </>
    );
}

export default NodePopup;