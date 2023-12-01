import React from 'react';
import '../../styles/Common.css';
import '../../styles/Aside.css';
import layoutImg01 from '../../assets/img/icon-06.png';
import layoutImg02 from '../../assets/img/icon-07.png';
import layoutImg03 from '../../assets/img/icon-08.png';
import layoutImg04 from '../../assets/img/icon-09.png';
import layoutImg05 from '../../assets/img/icon-10.png';
import layoutImg06 from '../../assets/img/icon-11.png';
import layoutImg07 from '../../assets/img/icon-12.png';
import layoutImg08 from '../../assets/img/icon-13.png';

function Layout({ onButtonClick, onStyleButtonClick, onBgColorChange, onBorderColorChange, isBgEnabled, isBorderEnabled, onBgCheckboxChange, onBorderCheckboxChange  }) {

    const handleButtonClick = (title, subtitle, category, txtWrapClassName) => {
        const data = {
            title: title,
            subtitle: subtitle,
            category: category,
        };
        onButtonClick(data, txtWrapClassName);
    };

    return (
        <div className="layoutArea funcArea" id="layoutArea">
            <p className="areaTitle">레이아웃</p>
            <div className="wrapper">
                <button className="layoutBtn" onClick={() => handleButtonClick('타이틀', '부제목', '카테고리', 'txtWrap01')}>
                    <img src={layoutImg01} alt="타이틀 부제목 카테고리" />
                </button>
                <button className="layoutBtn" onClick={() => handleButtonClick('타이틀', '부제목', '', 'txtWrap02')}>
                    <img src={layoutImg02} alt="타이틀 부제목" />
                </button>
                <button className="layoutBtn" onClick={() => handleButtonClick('타이틀', '', '카테고리', 'txtWrap03')}>
                    <img src={layoutImg03} alt="타이틀 카테고리" />
                </button>
                <button className="layoutBtn" onClick={() => handleButtonClick('타이틀', '', '', 'txtWrap04')}>
                    <img src={layoutImg04} alt="타이틀" />
                </button>
            </div>
            <div className="wrapper">
                <button className="layoutBtn" onClick={() => onStyleButtonClick('styleBorder')}>
                    <img src={layoutImg05} alt="테두리 선" />
                </button>
                <button className="layoutBtn" onClick={() => onStyleButtonClick('styleBg')}>
                    <img src={layoutImg06} alt="네모 배경" />
                </button>
                <button className="layoutBtn" onClick={() => onStyleButtonClick('styleRound')}>
                    <img src={layoutImg07} alt="라운드 배경" />
                </button>
                <button className="layoutBtn" onClick={() => onStyleButtonClick('styleCircle')}>
                    <img src={layoutImg08} alt="동그라미 배경" />
                </button>
            </div>
            <div className="wrapper detailArea">
                <p>세부 설정</p>
                <div className="detailWrap">
                    <div className="chkArea">
                        <div className="chkWrap">
                            <input
                                type="checkbox"
                                id="shadowCheckbox"
                                checked={isBgEnabled}
                                onChange={onBgCheckboxChange}
                                />
                            <label htmlFor="shadowCheckbox"></label>
                        </div>
                        <p className="styleTitle">배경 색상</p>
                    </div>
                    <input type="color" className="shadowColor" onChange={onBgColorChange} />
                </div>
                <div className="detailWrap">
                    <div className="chkArea">
                        <div className="chkWrap">
                            <input
                                type="checkbox"
                                id="shadowCheckbox"
                                checked={isBorderEnabled}
                                onChange={onBorderCheckboxChange}
                                />
                            <label htmlFor="shadowCheckbox"></label>
                        </div>
                        <p className="styleTitle">테두리 색상</p>
                    </div>
                    <input type="color" className="shadowColor" onChange={onBorderColorChange} />
                </div>
            </div>
        </div>
    );
}

export default Layout;
