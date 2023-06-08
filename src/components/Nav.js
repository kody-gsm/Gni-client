import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Navigations = styled.div`
display:flex;
`

export default function Nav() {
  return (<Navigations>
    <Link to={'/community'}>
      <div>
        커뮤니티
      </div>
    </Link>
    <Link to={'/join'}>
      <div>
        모집
      </div>
    </Link>
    <Link to={'/search'}>
      <div>
        검색
      </div>
    </Link>
    <Link to={'/about'}>
      <div>
        더 알아보기
      </div>
    </Link>
  </Navigations>);
}