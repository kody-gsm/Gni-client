import { Link } from "react-router-dom";
import * as S from "./style";
import search from '../../assets/search.png';
import logo from '../../assets/logo.png';

export default function Nav() {
  return (<S.Navigations>
    <S.Logo>
      <img src={logo} alt="logo" />
    </S.Logo>
    <S.Between>
      <Link to={'/community'}>
        커뮤니티
      </Link>
      <S.HR />
      <Link to={'/join'}>
        모집
      </Link>
      <S.HR />
      <Link to={'/search'}>
        검색
      </Link>
      <S.HR />
      <Link to={'/about'}>
        더 알아보기
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