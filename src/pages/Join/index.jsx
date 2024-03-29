import Nav from "../../components/Nav/Nav";
import React, { useState, useEffect } from 'react';
import * as S from './style';
import bell from '../../assets/bell.png';
import Boxcontent from "../../components/Boxcontent/boxcontent";

export default function Join() {
  const [belling, setBelling] = useState(true);
  const [index, setIndex] = useState(0);
  useEffect(e => {
    setTimeout(() => {
      setBelling(false);
    }, 3000);
  }, [belling]);
  function MakeDot(cnt) {
    let boxlist = [];
    for (let i = 0; i < cnt; i++) {
      boxlist.push(<div className={`dot ${index === i ? `active` : ''}`} onClick={e => setIndex(i)} />);
    }
    return boxlist;
  }
  return <>
    <Nav />
    <S.Join>
      <div className="whitebox">
        <div className="boxheader">
          <div className="title">
            <img src={bell} alt="bell" className={belling ? 'active' : ''} onClick={e => setBelling(true)} />
            <span>지금 모집 인기 순위 게시글들이에요!</span>
          </div>
          <button className="gowrite" onClick={e => window.location.href = './write'}>
            모집 글쓰러 가기
          </button>
        </div>
        <div className="main">
          {<>
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} trophy={1} />
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} trophy={2} />
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} trophy={3} />
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
          </>}
        </div>
        <div className="dots">
          {MakeDot(4)}
        </div>
      </div>
    </S.Join>
  </>;
}