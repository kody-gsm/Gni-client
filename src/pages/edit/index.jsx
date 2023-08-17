import Nav from "../../components/Nav/Nav";
import React, { useState, useEffect } from 'react';
import * as S from './style';
import Boxcontent from "../../components/Boxcontent/boxcontent";
import alertcheck from '../../assets/alertcheck.png';
import warning from '../../assets/cantFound.png';

export default function Edit() {
  const [belling, setBelling] = useState(true);
  const [indexOfjoin, setIndexOfjoin] = useState(0);
  const [indexOfcomu, setIndexOfcomu] = useState(0);
  const [alertinfo, setAlertinfo] = useState('');
  const [alertAnswer, setAlertAnswer] = useState('');
  useEffect(e => {
    setTimeout(() => {
      setBelling(false);
    }, 3000);
  }, [belling]);
  function MakeDot(cnt, type) {
    let t = [];
    for (let i = 0; i < cnt; i++) {
      if (type === 'join') {
        t.push(<div className={`dot ${indexOfjoin === i && `active`}`} onClick={e => setIndexOfjoin(i)} />);
      } else if (type === 'comu') {
        t.push(<div className={`dot ${indexOfcomu === i && `active`}`} onClick={e => setIndexOfcomu(i)} />);
      }
    }
    return t;
  }
  function DelPost(id) {
    setAlertinfo('글삭제');
  }
  return <>
    <Nav />
    <S.Community>
      <div className="innerbox">
        <div className="whitebox">
          <div className="boxheader">
            <div className="title">
              <span>{'손혜린'}님이 적은 모집글이에요!</span>
            </div>
          </div>
          <div className="main">
            {<>
              <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} iseditmode={true} funOfDel={DelPost} />
              <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} iseditmode={true} funOfDel={DelPost} />
              <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} iseditmode={true} funOfDel={DelPost} />
              <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} iseditmode={true} funOfDel={DelPost} />
            </>}
          </div>
          <div className="dots">
            {MakeDot(4, 'join')}
          </div>
        </div>
        <div className="whitebox">
          <div className="boxheader">
            <div className="title">
              <span>{'손혜린'}님이 적은 커뮤니티 게시글이에요!</span>
            </div>
          </div>
          <div className="main">
            {<>
              <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} iseditmode={true} funOfDel={DelPost} />
              <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} iseditmode={true} funOfDel={DelPost} />
              <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} iseditmode={true} funOfDel={DelPost} />
              <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} iseditmode={true} funOfDel={DelPost} />
            </>}
          </div>
          <div className="dots">
            {MakeDot(4, 'comu')}
          </div>
        </div>
      </div> <S.alertBox style={{ display: `${alertinfo === '' ? 'none' : 'block'}` }} onClick={e => setAlertinfo('')} />
      <S.alertMessage style={{ display: `${alertinfo === '' ? 'none' : 'block'}` }}>
        <img src={alertAnswer !== '' ? alertcheck : warning} alt="alertcheck" />
        <S.alertMessageH1>{alertinfo === '글삭제' ?
          (alertAnswer === 'y' ? '게시글이 삭제되었어요.' : '정말로 삭제 하시겠습니까?') : ''}</S.alertMessageH1>
        <S.alertMessageAnswer>
          {alertAnswer !== 'y' ?
            <>
              게시글을 한 번 삭제하면<br />
              다시 복구 및 수정이 불가해요<br />
            </> : <>GNI로 돌아가 다른 게시물들을 봐볼까요?<br /></>
          }
          <S.alertMessageAnswerButton onClick={e => {
            if (alertinfo === '글삭제' && alertAnswer === 'y') {
              setAlertinfo('');
              setAlertAnswer('');

            } else {
              setAlertAnswer('y');

            }
          }}>네</S.alertMessageAnswerButton>
          {alertAnswer !== 'y' && <S.alertMessageAnswerButton onClick={e => {
            setAlertinfo('');
            setAlertAnswer('');
          }}>아니요</S.alertMessageAnswerButton>}
          {/* <S.alertMessageAnswerButton>확인</S.alertMessageAnswerButton> */}
        </S.alertMessageAnswer>
      </S.alertMessage>
    </S.Community>
  </>;
}