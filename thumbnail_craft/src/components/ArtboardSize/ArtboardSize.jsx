import React from 'react';
import '../../styles/Common.css';
import '../../styles/Aside.css';

function ArtboardSize({ width, height, onWidthChange, onHeightChange }) {
    return (
        <div className="artboardSizeArea funcArea" id="artboardSizeArea">
            <p className="areaTitle">크기</p>
            <div className="wrapper">
                <div className="sizeWrap">
                    <label>
                        <p>넓이</p>
                        <input type="text" value={width} onChange={onWidthChange} />
                    </label>
                    <label>
                        <p>높이</p>
                        <input type="text" value={height} onChange={onHeightChange} />
                    </label>
                </div>
            </div>
        </div>
    );
}

export default ArtboardSize;
