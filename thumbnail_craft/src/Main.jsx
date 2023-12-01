import React from 'react';
import Aside from "../src/components/Aside/Aside";
import Preview from "../src/components/Preview/Preview";
import './styles/Common.css';
import './styles/Main.css';
import './styles/Aside.css';

function Main({ resetPreview, handleResetPreview }) {

    return (
        <div className="main">
            <Aside />
            <div className="asidePannelArea">
                <Preview resetPreview={resetPreview} handleResetPreview={handleResetPreview}  />
            </div>
        </div>
    );
}

export default Main;