import React, { useState, useEffect } from 'react';
import '../../styles/Common.css';
import '../../styles/Preview.css';
import ArtboardSize from '../ArtboardSize/ArtboardSize';
import Layout from '../Layout/Layout';
import FontStyle from '../FontStyle/FontStyle'; 
import BgStyle from '../BgStyle/BgStyle'; 

function Preview({ shadowStyle, resetPreview, handleResetPreview, isTopLineActive, isBottomLineActive, isMiddleLineActive }) {
    const [width, setWidth] = useState(500);
    const [height, setHeight] = useState(300);
    const [content, setContent] = useState(null);
    const [txtWrapClass, setTxtWrapClass] = useState('');
    const [styleClass, setStyleClass] = useState('');
    const [fontClass, setFontClass] = useState('');
    const [alignClass, setAlignClass] = useState('');
    const [lineClass, setLineClass] = useState('');
    const [fontBoldShadow, setFontBoldShadow] = useState(false);
    const [shadowColor, setShadowColor] = useState('#000000');
    const [fontColorClass, setFontColorClass] = useState('');
    const [fontRandomColorClass, setFontRandonColorClass] = useState('#000000');
    const [bgRandomColorClass, setBgRandonColorClass] = useState('');
    const [fontSize, setFontSize] = useState(48);
    const [titleText, setTitleText] = useState('타이틀');
    const [subtitleText, setSubtitleText] = useState('부제목');
    const [categoryText, setCategoryText] = useState('카테고리');
    const [backgroundImage, setBackgroundImage] = useState('');
    const [isShadowEnabled, setIsShadowEnabled] = useState(false);
    const [bgColor, setBgColor] = useState('rgba(0,0,0,0.5)');
    const [borderColor, setBorderColor] = useState('#000000');
    const [isBgEnabled, setIsBgEnabled] = useState(false);
    const [isBorderEnabled, setIsBorderEnabled] = useState(false);
    const [bgLayout, setBgLayout] = useState(false);
    const [borderLayout, setBorderLayout] = useState(false);


    const handleWidthChange = (e) => {
        setWidth(e.target.value);
    };

    const handleHeightChange = (e) => {
        setHeight(e.target.value);
    };

    const handleButtonClick = (data, txtWrapClassName, styleClassName, fontClassName, alignClassName, fontColorClassName, fontRandomColorClassName, bgRandomColorClassName) => {
        setContent(data);
        setTxtWrapClass(txtWrapClassName);

        if (!txtWrapClassName) {
            setStyleClass(styleClassName);
            setFontClass(fontClassName);
            setAlignClass(alignClassName);
        }
        setFontColorClass(fontColorClassName);
        setFontRandonColorClass(fontRandomColorClassName);
        setBgRandonColorClass(bgRandomColorClassName);
    };

    const handleStyleButtonClick = (styleClassName) => {
        setStyleClass(styleClassName);
    };

    const handleBgChangeButtonClick = () => {
        setBgLayout(true);
    };

    const handleBgLayoutColorChange = (color) => {
        setBgColor(color); 
    };

    const handleBgLayoutColorInputChange = (e) => {
        const color = e.target.value; 
        handleBgLayoutColorChange(color); 
    };

    const handleBorderChangeButtonClick = () => {
        setBorderLayout(true);
    };

    const handleBorderLayoutColorChange = (color) => {
        setBorderColor(color); 
    };

    const handleBorderLayoutColorInputChange = (e) => {
        const color = e.target.value; 
        handleBorderLayoutColorChange(color); 
    };

    const handleFontButtonClick = (fontClassName) => {
        setFontClass(fontClassName);
    };

    const handleAlignButtonClick = (alignClassName) => {
        setAlignClass(alignClassName);
    };

    const handleLineButtonClick = (lineClassName) => {
        setLineClass(lineClassName);
    };

    const handleShadowButtonClick = () => {
        setFontBoldShadow(true); 
    };

    const handleShadowColorChange = (color) => {
        setShadowColor(color); 
    };

    const handleColorInputChange = (e) => {
        const color = e.target.value; 
        handleShadowColorChange(color); 
    };

    const handleFontStyleButtonClick = (fontColorClassName) => { 
        setFontColorClass(fontColorClassName);
    };

    const handleFontColorChange = (color) => {
        setFontRandonColorClass(color); 
    };

    const handleFontColorInputChange = (color) => {
        handleFontColorChange(color); 
    };

    const handleTitleTextChange = (text) => {
        setTitleText(text);
    };

    const handleSubtitleTextChange = (text) => {
        setSubtitleText(text);
    };

    const handleCategoryTextChange = (text) => {
        setCategoryText(text);
    };

    const handleBgColorChange = (color) => {
        setBackgroundImage('');
        setBgRandonColorClass(color); 
    };

    const handleBgColorInputChange = (color) => {
        handleBgColorChange(color);
    };

    const handleImageUpload = (imageSrc) => {
        setBackgroundImage(imageSrc); 
    };

    useEffect(() => {
        if (resetPreview) {
            setWidth(500);
            setHeight(300);
            setContent(null);
            setTxtWrapClass('');
            setStyleClass('');
            setFontClass('');
            setAlignClass('');
            setLineClass('');
            setFontBoldShadow(false);
            setBgLayout(false);
            setBorderLayout(false);
            setIsShadowEnabled(false);
            setShadowColor('#000000');
            setFontColorClass('');
            setFontRandonColorClass('#000000');
            setBgRandonColorClass('#ffffff');
            setFontSize(48);
            setBackgroundImage('');
            setBgColor('rgba(0,0,0,0.5)');
            setBorderColor('#000000');
            setIsBgEnabled(false);
            setIsBorderEnabled(false);
            setBgLayout(false);
            setBorderLayout(false);
            setTitleText('타이틀');
            setSubtitleText('부제목');
            setCategoryText('카테고리');

            handleResetPreview();
        }
    }, [resetPreview, handleResetPreview]);

    const handleCheckboxChange = (e) => {
        setIsShadowEnabled(e.target.checked);
        setFontBoldShadow(e.target.checked); 
    };

    const handleBgCheckboxChange = (e) => {
        setIsBgEnabled(e.target.checked);
        setBgLayout(e.target.checked); 
    };

    const handleBorderCheckboxChange = (e) => {
        setIsBorderEnabled(e.target.checked);
        setBorderLayout(e.target.checked); 
    };


    return (
        <div className="wrap">
            <div className="asidePannelWrap">
                <ArtboardSize
                    width={width}
                    height={height}
                    onWidthChange={handleWidthChange}
                    onHeightChange={handleHeightChange}
                />
                <Layout
                    onButtonClick={(data, txtWrapClassName) =>
                        handleButtonClick(data, txtWrapClassName)
                    }
                    onStyleButtonClick={(styleClassName) => handleStyleButtonClick(styleClassName)}
                    onBgColorChange={(color) => handleBgLayoutColorInputChange(color)} 
                    bgColor={bgColor}
                    onBorderColorChange={(color) => handleBorderLayoutColorInputChange(color)} 
                    borderColor={borderColor}
                    isBgEnabled={isBgEnabled}
                    onBgCheckboxChange={handleBgCheckboxChange}
                    isBorderEnabled={isBorderEnabled}
                    onBorderCheckboxChange={handleBorderCheckboxChange}
                    handleBgChangeButtonClick={handleBgChangeButtonClick}
                    handleBorderChangeButtonClick={handleBorderChangeButtonClick}
                />
                <FontStyle
                    onFontButtonClick={(fontClassName) => handleFontButtonClick(fontClassName)}
                    onAlignButtonClick={(alignClassName) => handleAlignButtonClick(alignClassName)}
                    onLineButtonClick={(lineClassName) => handleLineButtonClick(lineClassName)}
                    onShadowButtonClick={handleShadowButtonClick}
                    isShadowEnabled={isShadowEnabled}
                    onCheckboxChange={handleCheckboxChange}
                    onShadowColorChange={(color) => handleColorInputChange(color)}
                    onFontStyleButtonClick={(fontColorClassName) => handleFontStyleButtonClick(fontColorClassName)}
                    onFontColorChange={(color) => handleFontColorInputChange(color)}
                    onFontSizeChange={(size) => setFontSize(size)}
                    onTitleTextChange={handleTitleTextChange}
                    onSubtitleTextChange={handleSubtitleTextChange}
                    onCategoryTextChange={handleCategoryTextChange}
                    isTopLineActive={isTopLineActive}
                    isMiddleLineActive={isMiddleLineActive}
                    isBottomLineActive={isBottomLineActive}
                />
                <BgStyle
                    onBgColorChange={(color) => handleBgColorInputChange(color)}
                    onImageUpload={(imageSrc) => handleImageUpload(imageSrc)}
                />
            </div>
            <div className="preview">
                <div className={`artboard ${styleClass}`} style={{ width: `${width}px`, height: `${height}px`, ...(backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundPosition: `center`, backgroundRepeat: `no-repeat`, backgroundSize: `cover` } : {background: `${bgRandomColorClass}`}) }}>
                    <div className="artboardWrap" style={{ backgroundColor: bgLayout ? bgColor : '', borderColor: borderLayout ? borderColor : '' }}>
                        {content && (
                            <div className={`txtWrap ${fontClass} ${txtWrapClass} ${fontColorClass} ${fontBoldShadow ? 'fontBold' : ''}`} style={{ ...shadowStyle, transition: 'all 0.3s', textShadow: fontBoldShadow ? `2px 2px 2px ${shadowColor}` : 'none' }}>
                                <div className={`titleSubTextWrap ${alignClass}`}>
                                    <h1 className={`${alignClass} ${lineClass} ${isTopLineActive ? 'activeTopLine' : ''} ${isMiddleLineActive ? 'activeMiddleLine' : ''}`} style={{fontSize: `${fontSize}px`, color: `${fontRandomColorClass}`}}>{titleText}</h1>
                                    {content.subtitle && <h3 className={`${alignClass} ${isBottomLineActive ? 'activeBottomLine' : ''}`} style={{ color: `${fontRandomColorClass}`}}>{subtitleText}</h3>}
                                </div>
                                {content.category && <p className={`${alignClass}`} style={{ color: `${fontRandomColorClass}`}}>{categoryText}</p>}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Preview;
