import React, { useState } from 'react';
import '../../styles/Common.css';
import '../../styles/Aside.css';
import randomColor from "../../assets/img/icon-19.png";
import alignLeft from '../../assets/img/icon-16.png';
import alignCenter from '../../assets/img/icon-14.png';
import alignRight from '../../assets/img/icon-15.png';
import lineUp from '../../assets/img/icon-17.png';
import lineDown from '../../assets/img/icon-18.png';

function FontStyle({ onFontButtonClick, onAlignButtonClick, onCheckboxChange, onLineButtonClick, onShadowColorChange, onFontColorChange, onFontSizeChange,
    isShadowEnabled, onTitleTextChange, onSubtitleTextChange, onCategoryTextChange }) {
    const [titleText, setTitleText] = useState('');
    const [subtitleText, setSubtitleText] = useState('');
    const [categoryText, setCategoryText] = useState('');
    const fontSizeOptions = [12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 60, 72];
    const [isTopLineActive, setIsTopLineActive] = useState(false);
    const [isBottomLineActive, setIsBottomLineActive] = useState(false);
    const [isMiddleLineActive, setIsMiddleLineActive] = useState(false);
    const [lineColor, setLineColor] = useState('#000000');

    const handleTitleInputChange = (e) => {
        setTitleText(e.target.value);
        onTitleTextChange(e.target.value);
    };
    
    const handleSubtitleInputChange = (e) => {
        setSubtitleText(e.target.value);
        onSubtitleTextChange(e.target.value);
    };
    
    const handleCategoryInputChange = (e) => {
        setCategoryText(e.target.value);
        onCategoryTextChange(e.target.value); 
    };

    const handleFontSizeChange = (e) => {
        const fontSize = parseInt(e.target.value);
        onFontSizeChange(fontSize);
    };

    const handleLineUpClick = () => {
        setIsTopLineActive(!isTopLineActive); 
        onLineButtonClick('lineUp');
        const titleElement = document.querySelector('.txtWrap .titleSubTextWrap');
        if (titleElement) {
            titleElement.style.borderTop = isTopLineActive ? 'none' : '2px solid black';
        }
    };

    const handleMiddleLineClick = () => {
        setIsMiddleLineActive(!isMiddleLineActive);
        onLineButtonClick('lineMiddle');
        const titleElement = document.querySelector('.txtWrap h3');
        if (titleElement) {
            titleElement.style.borderTop = isMiddleLineActive ? 'none' : '2px solid black';
        }
    };

    const handleLineDownClick = () => {
        setIsBottomLineActive(!isBottomLineActive); 
        onLineButtonClick('lineDown');
        const subtitleElement = document.querySelector('.txtWrap .titleSubTextWrap');
        if (subtitleElement) {
            subtitleElement.style.borderBottom = isBottomLineActive ? 'none' : '2px solid black';
        }
    };

    const handleLineColorChange = (color) => {
        setLineColor(color);
        updateColorLineStyles();
    };

    const updateBorderColorElementStyle = () => {
        const titleElement = document.querySelector('.txtWrap .titleSubTextWrap');
        if (titleElement) {
            titleElement.style.borderTopColor = lineColor; 
            titleElement.style.borderBottomColor = lineColor; 
        }
        const subtitleElement = document.querySelector('.txtWrap h3');
        if (subtitleElement) {
            subtitleElement.style.borderTopColor = lineColor; 
        }
    };

    const updateColorLineStyles = () => {
        updateBorderColorElementStyle();
    };


    return (
        <div className="fontArea funcArea" id="fontArea">
            <p className="areaTitle">텍스트</p>
            <div className="wrapper">
                <p class="styleTitle">타이틀</p>
                <input type="text" name="" id="" placeholder='타이틀' value={titleText} onChange={handleTitleInputChange} />
                <p class="styleTitle">부제목</p>
                <input type="text" name="" id="" placeholder='부제목' value={subtitleText} onChange={handleSubtitleInputChange} />
                <p class="styleTitle">카테고리</p>
                <input type="text" name="" id="" placeholder='카테고리' value={categoryText} onChange={handleCategoryInputChange} />
                <select onChange={handleFontSizeChange}>
                    {fontSizeOptions.map((fontSize, index) => (
                        <option key={index} value={fontSize}>
                            {fontSize}
                        </option>
                    ))}
                </select>
                <button className="fontBold fontStyle" onClick={() => onFontButtonClick('fontBold')}>B</button>
                <button className="fontItalic fontStyle" onClick={() => onFontButtonClick('fontItalic')}>I</button>
                <button className="fontNormal fontStyle" onClick={() => onFontButtonClick('fontNormal')}>N</button>
            </div>
            <div className="wrapper flex">
                <p className="styleTitle">정렬</p>
                <button className="fontStyle" onClick={() => onAlignButtonClick('alignLeft')}>
                    <img src={alignLeft} alt=" 왼쪽 정렬" />
                </button>
                <button className="fontStyle" onClick={() => onAlignButtonClick('alignCenter')}>
                    <img src={alignCenter} alt=" 가운데 정렬" />
                </button>
                <button className="fontStyle" onClick={() => onAlignButtonClick('alignRight')}>
                    <img src={alignRight} alt=" 오른쪽쪽 정렬" />
                </button>
            </div>
            <div className="wrapper flex">
                <p className="styleTitle">중간선</p>
                <button className={`fontStyle${isTopLineActive ? ' active' : ''}`} onClick={handleLineUpClick}>
                    <img src={lineUp} alt="윗줄" />
                </button>
                <button className={`fontStyle${isMiddleLineActive ? ' active' : ''}`} onClick={handleMiddleLineClick}>
                    <img src={lineDown} alt="가운데 줄" />
                </button>
                <button className={`fontStyle${isBottomLineActive ? ' active' : ''}`} onClick={handleLineDownClick}>
                    <img src={lineDown} alt="아랫줄" />
                </button>
            </div>
            <div className="wrapper">
                <p>세부 설정</p>
                <div className="lineDetailWrap">
                    <div className="chkArea">
                        <div className="chkWrap">
                            <input type="checkbox" id="lineColorCheckbox" />
                            <label htmlFor="lineColorCheckbox"></label>
                        </div>
                        <p className="styleTitle">선 색상</p>
                    </div>
                    <input type="color" onChange={(e) => handleLineColorChange(e.target.value)} />
                </div>
            </div>
            <div className="wrapper flex spaceBetween">
                <div className="chkArea">
                    <div className="chkWrap">
                        <input
                            type="checkbox"
                            id="shadowCheckbox"
                            checked={isShadowEnabled}
                            onChange={onCheckboxChange}
                            />
                        <label htmlFor="shadowCheckbox"></label>
                    </div>
                    <p className="styleTitle">그림자</p>
                </div>
                <input type="color" className="shadowColor" onChange={onShadowColorChange} />
            </div>
            <div className="wrapper">
                <p className="styleTitle">글자색</p>
                <button className='styleColor red' onClick={() => { onFontColorChange('#FF0000');}}></button>
                <button className='styleColor orange' onClick={() => { onFontColorChange('#FFA500'); }}></button>
                <button className='styleColor yellow' onClick={() => { onFontColorChange('#FFFF00'); }}></button>
                <button className='styleColor green' onClick={() => { onFontColorChange('#008000'); }}></button>
                <button className='styleColor blue' onClick={() => { onFontColorChange('#0000FF'); }}></button>
                <button className='styleColor purple' onClick={() => { onFontColorChange('#800080'); }}></button>
                <button className='styleColor white' onClick={() => { onFontColorChange('#FFFFFF'); }}></button>
                <button className='styleColor black' onClick={() => { onFontColorChange('#000000'); }}></button>
                <button className="styleColor fontColor randomColor">
                    <img src={randomColor} alt="렌덤 색상" />
                    <input type="color" onChange={(e) => { onFontColorChange(e.target.value); }} />
                </button>
            </div>
        </div>
    );
}

export default FontStyle;
