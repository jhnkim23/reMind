import React, { useState, useCallback } from 'react';
import styled from "styled-components";
import 'src/components/NodePopup/NodePopup.css'

const NodePopupNav = styled.nav`
    background: #15171c;
    width: 250px;
    height: 100%;
    display: flex;
    justify-content: center;
    position:absolute;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
    transition: 350ms;
    z-index: 10;
`;

function NodePopup({popup, setPopup}) {
    return (
        <>
            <NodePopupNav sidebar={popup}></NodePopupNav>
        </>
    );
}

export default NodePopup;