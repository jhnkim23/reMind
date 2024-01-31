import React, { useState, useCallback } from 'react';
import * as AiIcons from "react-icons/ai";
import 'src/components/NodePopup/NodePopup.css'


<<<<<<< HEAD
function NodePopup({popup, setPopup}) {
=======
function NodePopup({popup, setPopup, nodeID, quotes, summary}) {
>>>>>>> 60fd2fd33d8fcb119c59114553bc6a5fce87de95
    function handleClick(e) {
        e.preventDefault();
        setPopup(!popup);
    }

<<<<<<< HEAD
    return (
        <>
            <AiIcons.AiOutlineClose
                onClick={handleClick}
            />
=======
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
>>>>>>> 60fd2fd33d8fcb119c59114553bc6a5fce87de95
        </>
    );
}

export default NodePopup;