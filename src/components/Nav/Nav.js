import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as S from "./style";
import search from '../../assets/search.png';
import logo from '../../assets/logo.png';
import { useEffect, useState } from "react";
import { setScroll } from "../../redux/navstore";

function Nav() {
  const [scroll, setScroll] = useState(false);
  const [searchText, setSearchText] = useState('');
  useEffect(e => {
    document.querySelector('body').style.overflowY = scroll ? 'hidden' : 'auto';
  }, [scroll]);
  return (<S.Navigations>
    <S.Logo onClick={e => window.location.href = './'}>
      <img src={logo} alt="logo" />
    </S.Logo>
    <S.Between>
      <Link to={'/community'}>
        <span className={document.location.href.split('/')[3] === 'commutnity' && "stay"}>
          커뮤니티
        </span>
      </Link>
      <S.HR />
      <Link to={'/join'}>
        <span className={document.location.href.split('/')[3] === 'join' && "stay"}>
          모집
        </span>
      </Link>
      <S.HR />
      <Link to={'/search'}>
        <span className={document.location.href.split('/')[3] === 'search' && "stay"}>
          검색
        </span>
      </Link>
      <S.HR />
      <Link to={'/about'}>
        <span className={document.location.href.split('/')[3] === 'about' && "stay"}>
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
      {<><Link to={'/login'}><button>로그인</button></Link>
        <Link to={'/signup'}><button>회원가입</button></Link></>}
    </S.Right>
    {scroll && <S.Alert onClick={e => setScroll(false)}>
      <div className="textbox">
        <h3>찾으시는 정보를 찾을 수 없어요</h3>
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