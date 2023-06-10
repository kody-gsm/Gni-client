import React from 'react';
import Nav from '../../components/Nav/Nav';
import * as S from './style';
import Boxcontent from '../../components/Boxcontent/boxcontent';
import office from '../../assets/office.png';

function Main(props) {
  return (<>
    <Nav />
    <S.main>
      <div className='emptyBox' />
      <div className='contentBox'>
        {<>
          <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} />
          <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} />
          <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} />
          <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} />
          <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} />
          <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} />
          <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} />
          <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} />
          <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} />
          <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} />
        </>}
        <div className='circle'>
          <div className='innercircle'>
            <span>지금 뜨고 있는 소식을 놓치지 마세요!</span>
            <img src={office} alt='office' />
          </div>
        </div>
      </div>
      <div className='headhunt'>
        asdf
      </div>
    </S.main>
  </>
  );
}

export default Main;