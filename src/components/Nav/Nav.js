import { Link } from "react-router-dom";
import * as S from "./style";


export default function Nav() {
  return (<S.Navigations>
    <S.Logo />
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
        <input placeholder="찾으시는 정보를 입력해주세요" />
        <button>O</button>
      </S.form>
    </S.Between>
    <S.Right>
      {<><button>로그인</button>
        <button>회원가입</button></>}
    </S.Right>
  </S.Navigations>);
}