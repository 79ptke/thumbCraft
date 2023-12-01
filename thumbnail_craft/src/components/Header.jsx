import html2canvas from 'html2canvas';
import '../styles/Common.css';
import '../styles/Header.css';
import logo from '../assets/img/logo.png';
import downloadImg from '../assets/img/icon-23.png'


function Header({ resetPreview }) {
    const handleReset = () => {
        resetPreview(); 
    };

    const handleImageDownload = () => {
        const targetElement = document.querySelector('.artboard'); 
        if (targetElement) {
            html2canvas(targetElement).then((canvas) => {
                const link = document.createElement('a');
                link.download = 'artboard_image.png';
                link.href = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
                link.click();
            });
        }
    };

    return (
        <div className="header">
            <div className="wrapper">
                <img className="logo" src={logo} alt="logo 이미지" />
                <div className="btnArea">
                    <button type="button" className="resetBtn" onClick={handleReset}>초기화</button>
                    <button type="button" className="downloadBtn" onClick={handleImageDownload}>
                        <img className="imgIcon" src={downloadImg} alt="다운로드 아이콘" />
                        이미지 다운로드
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;