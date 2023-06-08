import { Link } from "react-router-dom";
import * as S from "./style";


export default function Nav() {
  return (<S.Navigations>
    <S.Logo />
    <S.Between>
      <Link to={'/community'}>
        <S.Block>
          커뮤니티
        </S.Block>
      </Link>
      <S.HR />
      <Link to={'/join'}>
        <S.Block>
          모집
        </S.Block>
      </Link>
      <S.HR />
      <Link to={'/search'}>
        <S.Block>
          검색
        </S.Block>
      </Link>
      <S.HR />
      <Link to={'/about'}>
        <S.Block>
          더 알아보기
        </S.Block>
      </Link>
      <S.form>
        <input />
        <button>ㅁ</button>
      </S.form>
    </S.Between>
    <S.Right />
  </S.Navigations>);
}