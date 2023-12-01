import React, { useRef } from 'react';
import '../../styles/Common.css';
import '../../styles/Aside.css';
import randomColor from "../../assets/img/icon-19.png";
import uploadBtn from "../../assets/img/icon-22.png";

function BgStyle({ onBgColorChange, onImageUpload}) {
    const inputRef = useRef(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            const imageSrc = reader.result;
            onImageUpload(imageSrc);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
        inputRef.current.value = '';
    };

    return (
        <div className="bgArea funcArea" id="bgArea">
            <p className="areaTitle">배경</p>
            <div className="wrapper">
                <p className="styleTitle">단색</p>
                <button className='styleColor red' onClick={() => { onBgColorChange('#FF0000');}}></button>
                <button className='styleColor orange' onClick={() => { onBgColorChange('#FFA500'); }}></button>
                <button className='styleColor yellow' onClick={() => { onBgColorChange('#FFFF00'); }}></button>
                <button className='styleColor green' onClick={() => { onBgColorChange('#008000'); }}></button>
                <button className='styleColor blue' onClick={() => { onBgColorChange('#0000FF'); }}></button>
                <button className='styleColor purple' onClick={() => { onBgColorChange('#800080'); }}></button>
                <button className='styleColor white' onClick={() => { onBgColorChange('#FFFFFF'); }}></button>
                <button className='styleColor black' onClick={() => { onBgColorChange('#000000'); }}></button>
                <button className="styleColor bgColor randomColor">
                    <img src={randomColor} alt="렌덤 색상" />
                    <input type="color" onChange={(e) => { onBgColorChange(e.target.value); }} />
                </button>
            </div>
            <div className="wrapper">
                <p className="styleTitle">그라데이션</p>
                <button className='styleColor gradient01' onClick={() => { onBgColorChange('linear-gradient( to top, rgb(255, 255, 194), rgb(255, 201, 201), rgb(255, 146, 168)'); }}></button>
                <button className='styleColor gradient02' onClick={() => { onBgColorChange('linear-gradient( to top, rgb(169, 255, 226), rgb(155, 190, 255), rgb(90, 140, 231) )'); }}></button>
                <button className='styleColor gradient03' onClick={() => { onBgColorChange('linear-gradient( to top, rgb(255, 98, 179), rgb(199, 40, 193), rgb(114, 72, 252), rgb(72, 81, 252) )'); }}></button>
                <button className='styleColor gradient04' onClick={() => { onBgColorChange('linear-gradient( to top, #fad961, #f76b1c )'); }}></button>
                <button className='styleColor gradient05' onClick={() => { onBgColorChange('linear-gradient( to top, rgb(255, 217, 114), #7eedef, #06e2e6 )'); }}></button>
                <button className='styleColor gradient06' onClick={() => { onBgColorChange('linear-gradient( to top, #ffd2e2, #96beff )'); }}></button>
            </div>
            <div className="wrapper">
                <p className="styleTitle">이미지 업로드</p>
                <div className="uploadBtnWrap">
                    <img src={uploadBtn} alt="업로드 버튼" />
                    <span>업로드</span>
                    <input type="file" onChange={handleImageUpload} ref={inputRef}/>
                </div>
            </div>
        </div>
    );
}

export default BgStyle;
