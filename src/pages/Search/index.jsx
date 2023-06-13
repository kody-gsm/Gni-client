import Nav from "../../components/Nav/Nav";
import * as S from './style';
import search from "../../assets/biggerSearch.png";
import searchingPeolple from '../../assets/searchingPeople.png';

export default function Search() {
  return <>
    <Nav />
    <S.search>
      <div className="emptybox" />
      <div className="header">
        <div className="block">
          <span>게시판에 인기 있는 순위대로 나타나져 있어요!</span>
          <div className="flex">
            <input placeholder="찾으시는 정보를 입력해주세요" />
            <div className="button">
              <img src={search} alt="search" />
            </div>
          </div>
        </div>
        <div className="searching">
          <img src={searchingPeolple} alt="searchingpeople" />
        </div>
      </div>
      <div className="contentses">

      </div>
    </S.search>
  </>;
}