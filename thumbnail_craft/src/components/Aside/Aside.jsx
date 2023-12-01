import '../../styles/Common.css';
import '../../styles/Aside.css';
import icon01 from '../../assets/img/icon-04.png';
import icon02 from '../../assets/img/icon-02.png';
import icon03 from '../../assets/img/icon-03.png';
import icon04 from '../../assets/img/icon-05.png';

function Aside() {
    return (
        <div className="aside">
            <div className="asideBtnArea">
                <div className="wrapper">
                    <ul className="asideBtnWrap">
                        <li>
                            <a className="asideBtn" href="#artboardSizeArea">
                                <img src={icon01} alt="크기 아이콘" />
                                크기
                            </a>
                        </li>
                        <li>
                            <a className="asideBtn" href="#layoutArea">
                                <img src={icon02} alt="레이아웃 아이콘" />
                                레이아웃
                            </a>
                        </li>
                        <li>
                            <a className="asideBtn" href="#fontArea">
                                <img src={icon03} alt="텍스트 아이콘" />
                                텍스트
                            </a>
                        </li>
                        <li>
                            <a className="asideBtn" href="#bgArea">
                                <img src={icon04} alt="배경 아이콘" />
                                배경
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Aside;