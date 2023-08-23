import Nav from "../../components/Nav/Nav";
import * as S from './style';
import search from "../../assets/biggerSearch.png";
import searchingPeolple from '../../assets/searchingPeople.png';
import stick from '../../assets/stick.png';
import Boxcontent from "../../components/Boxcontent/boxcontent";
import { useState } from "react";

export default function Search() {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState('');
  return <>
    <Nav />
    <S.search>
      <div className="emptybox" />
      <div className="headers">
        <div className="block">
          <span>게시판에 인기 있는 순위대로 나타나져 있어요!</span>
          <div className="flex">
            <input placeholder="찾으시는 정보를 입력해주세요" value={input} onChange={e => setInput(e.target.value)} />
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
        <span className="span">인기글 순위</span>
        {<>
          <div className="flex">
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
          </div></>}
        <span className="span">인기 프로젝트 모집 게시글 순위</span>
        {<>
          <div className="flex">
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
          </div>
        </>}
      </div>
      <hr className="searchHR" />
      <div className="dots">
        {<>
          <div className={`dot ${index === 0 ? `active` : ''}`} onClick={e => setIndex(0)} />
          <div className={`dot ${index === 1 ? `active` : ''}`} onClick={e => setIndex(1)} />
          <div className={`dot ${index === 2 ? `active` : ''}`} onClick={e => setIndex(2)} />
          <div className={`dot ${index === 3 ? `active` : ''}`} onClick={e => setIndex(3)} />
        </>}
      </div>
    </S.search>
  </>;
}