import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as S from "./style";
import search from '../../assets/search.png';
import logo from '../../assets/logo.png';
import cantFound from '../../assets/cantFound.png';
import setting from '../../assets/setting.png';
import { useEffect, useState } from "react";
import { setScroll } from "../../redux/navstore";

function Nav() {
  const [scroll, setScroll] = useState(false);
  const [searchText, setSearchText] = useState('');
  useEffect(e => {
    document.querySelector('body').style.overflowY = scroll ? 'hidden' : 'auto';
  }, [scroll]);
  window.addEventListener('keydown', e => e.key === 'Enter' ? setScroll(false) : setScroll(e => e));
  return (<S.Navigations>
    <S.Logo onClick={e => window.location.href = './'}>
      <img src={logo} alt="logo" />
    </S.Logo>
    <S.Between>
      <Link to={'/community'}>
        <span className={document.location.href.split('/')[3] === 'commutnity' ? "stay" : ''}>
          커뮤니티
        </span>
      </Link>
      <S.HR />
      <Link to={'/join'}>
        <span className={document.location.href.split('/')[3] === 'join' ? "stay" : ''}>
          모집
        </span>
      </Link>
      <S.HR />
      <Link to={'/search'}>
        <span className={document.location.href.split('/')[3] === 'search' ? "stay" : ''}>
          검색
        </span>
      </Link>
      <S.HR />
      <Link to={'/about'}>
        <span className={document.location.href.split('/')[3] === 'about' ? "stay" : ''}>
          더 알아보기
        </span>
      </Link>
      <S.form>
        {document.location.href.split('/')[3] === '' ?
          <form onSubmit={e => {
            e.preventDefault();
          }}>
            <input placeholder="찾으시는 정보를 입력해주세요" onChange={e => setSearchText(a => e.target.value)} value={searchText} />
            <img src={search} alt="search" onClick={e => {
              if (searchText === '') {
                setScroll(true);
              }
            }} />
          </form>
          : <div className="insteadInputNButton" />}
      </S.form>
    </S.Between>
    <S.Right>
      {localStorage?.getItem('name') ? <>
        <Link to='/profile'>
          <div className="img" />
          <button>{localStorage?.getItem('name')}</button>
          <img src={setting} alt="setting" />
        </Link>
      </> : <><Link to={'/login'}><button>로그인</button></Link>
        <Link to={'/signup'}><button>회원가입</button></Link></>}
    </S.Right>
    {scroll && <S.Alert onClick={e => setScroll(false)}>
      <div className="textbox" >
        <img src={cantFound} alt="cantFoundit" />
        <h3>찾으시는 정보를 찾을 수 없어요</h3>
        <p>찾으시는 정보가 잘못 되었거나<br />잘못 입력되었는지 다시 한 번 확인해주세요!</p>
        <div>
          이전 페이지 돌아가고 싶다면 Enter 또는 화면을 클릭해주세요.
        </div>
      </div>
    </S.Alert>}
  </S.Navigations>);
}

const scrollStateToProps = scroll => {
  return { scroll };
}

const scrollDispatch = (d, o) => {
  return {
    setScroll: e => d(setScroll(true))
  };
}

export default connect(scrollStateToProps, scrollDispatch)(Nav);