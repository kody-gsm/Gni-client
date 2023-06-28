import Nav from "../../components/Nav/Nav";
import React, { useState, useEffect } from 'react';
import * as S from './style';
import bell from '../../assets/bell.png';
import Boxcontent from "../../components/Boxcontent/boxcontent";
import Trophy from "../../components/Trophy/trophy";

export default function Community() {
  const [belling, setBelling] = useState(true);
  const [index, setIndex] = useState(0);
  useEffect(e => {
    setTimeout(() => {
      setBelling(false);
    }, 3000);
  }, [belling]);
  return <>
    <Nav />
    <S.Community>
      <div className="whitebox">
        <div className="boxheader">
          <div className="title">
            <img src={bell} alt="bell" className={belling ? 'active' : ''} onClick={e => setBelling(true)} />
            <span>지금 커뮤니티 인기 순위 게시글들이에요!</span>
          </div>
          <button className="gowrite">
            커뮤니티 글쓰러 가기
          </button>
        </div>
        <div className="main">
          {index === 0 && <>
            <Trophy number={1} />
            <Trophy number={2} />
            <Trophy number={3} />
          </>
          }
          {<>
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
          </>}
        </div>
        <div className="dots">
          {<>
            <div className={`dot ${index === 0 && `active`}`} onClick={e => setIndex(0)} />
            <div className={`dot ${index === 1 && `active`}`} onClick={e => setIndex(1)} />
            <div className={`dot ${index === 2 && `active`}`} onClick={e => setIndex(2)} />
            <div className={`dot ${index === 3 && `active`}`} onClick={e => setIndex(3)} />
          </>}
        </div>
      </div>
    </S.Community>
  </>;
}