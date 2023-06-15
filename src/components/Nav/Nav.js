import { Link } from "react-router-dom";
import * as S from "./style";
import search from '../../assets/search.png';
import logo from '../../assets/logo.png';

export default function Nav() {
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
            <input placeholder="찾으시는 정보를 입력해주세요" />
            <img src={search} alt="search" onClick={e => { }} />
          </form>
          : <div className="insteadInputNButton" />}
      </S.form>
    </S.Between>
    <S.Right>
      {<><button>로그인</button>
        <button>회원가입</button></>}
    </S.Right>
  </S.Navigations>);
}