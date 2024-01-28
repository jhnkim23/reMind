import React, { useState, useCallback } from 'react';
import * as AiIcons from "react-icons/ai";
import 'src/components/NodePopup/NodePopup.css'


function NodePopup({popup, setPopup}) {
    function handleClick(e) {
        e.preventDefault();
        setPopup(!popup);
    }

    return (
        <>
            <AiIcons.AiOutlineClose
                onClick={handleClick}
            />
        </>
    );
}

export default NodePopup;