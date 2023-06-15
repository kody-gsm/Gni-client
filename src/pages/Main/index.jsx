import React from 'react';
import Nav from '../../components/Nav/Nav';
import * as S from './style';
import Boxcontent from '../../components/Boxcontent/boxcontent';
import office from '../../assets/office.png';
import CheckingPeople from '../../assets/checkingPeople.png';

function Main(props) {
  return (<>
    <Nav />
    <S.main>
      <div className='emptyBox' />
      <div className='contentBox'>
        <div className='innerBox'>
          {<>
            <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
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
        <div className='circle'>
          <div className='innercircle'>
            <span>지금 뜨고 있는 소식을 놓치지 마세요!</span>
            <img src={office} alt='office' />
          </div>
        </div>
      </div>
      <div className='headhunt'>
        <div className='innerheadhunt'>
          <div className='headhuntheader'>
            <div className='name'>
              <div className='innername'>
                <h1>
                  {"홍길동"}
                </h1>
                <span>님의</span>
              </div>
              <hr />
            </div>
            <span className='span'>
              전공에 맞는 프로젝트 모집 게시글이에요
            </span>
            <img src={CheckingPeople} className='checkingpeople' alt='checkingPeople' />
          </div>
          <hr className='headhunthr' />
          <span className='introduce'>스크롤해서 모집 게시글들은 한 번 봐보세요!</span>
          <div className='contentses'>
            <div className='innercontents'>
              {<>
                <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
                <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
                <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
                <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
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
          </div>
        </div>
      </div>
    </S.main>
  </>
  );
}

export default Main;