import React from 'react';
import Nav from '../../components/Nav/Nav';
import * as S from './style';
import Boxcontent from '../../components/Boxcontent/boxcontent';

function Main(props) {
  return (<>
    <Nav />
    <S.main>
      <div className='emptyBox' />
      <div className='contentBox'>
        <Boxcontent />
        <div className='circle'>

        </div>
      </div>
    </S.main>
  </>
  );
}

export default Main;