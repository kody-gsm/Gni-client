import Nav from "../../components/Nav/Nav";
import * as S from './style';
import search from "../../assets/biggerSearch.png";
import searchingPeolple from '../../assets/searchingPeople.png';
import stick from '../../assets/stick.png';
import Boxcontent from "../../components/Boxcontent/boxcontent";

export default function Search() {
  return <>
    <Nav />
    <S.search>
      <div className="emptybox" />
      <div className="headers">
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
      <div className="stick">
        <img src={stick} alt="stick" />
      </div>
      <div className="contentses">
        {<>
          <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
          <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
          <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
          <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
          <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
          <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
        </>}
      </div>
    </S.search>
  </>;
}