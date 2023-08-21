import Nav from "../../components/Nav/Nav";
import React, { useState } from 'react';
import * as S from './style';
import Boxcontent from "../../components/Boxcontent/boxcontent";
import bookmarkimg from '../../assets/unchecked_bookmark.png';

export default function Bookmark() {
  const [index, setIndex] = useState(0);
  function MakeDot(cnt) {
    let t = [];
    for (let i = 0; i < cnt; i++) {
      t.push(<div className={`dot ${index === i ? `active` : ''}`} onClick={e => setIndex(i)} />);
    }
    return t;
  }
  return <>
    <Nav />
    <S.Join>
      <div className="whitebox">
        <div className="boxheader">
          <div className="title">
            <img src={bookmarkimg} alt="bookmarking" />
            <span>{'홍길동'}님의 북마크된 글들이에요!</span>
          </div>
        </div>
        <div className="main">
          {<>
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={true} />
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={true} />
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={true} />
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={true} />
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={true} />
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={true} />
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={true} />
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={true} />
          </>}
        </div>
        <div className="dots">
          {MakeDot(4)}
        </div>
      </div>
    </S.Join>
  </>
}