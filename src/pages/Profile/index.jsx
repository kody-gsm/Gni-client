import Nav from "../../components/Nav/Nav";
import * as S from './style';
import defaultProfile from '../../assets/defaultProfile.png';
import checking from '../../assets/checkingPeople.png';
import alertcheck from '../../assets/alertcheck.png'
import React, { useState } from 'react';

export default function Profile() {
  const [alertinfo, setAlertinfo] = useState('');
  const [alertAnswer, setAlertAnswer] = useState('');
  return <>
    <Nav />
    <S.Profile>
      <S.innerbox>
        <S.Infos>
          <div> {/*이건 귀찮았음.*/}
            <S.Img>
              {<img src={defaultProfile} alt="defaultProfile" />}
            </S.Img>
            <S.NameDiv>
              {'홍길동'}
            </S.NameDiv>
          </div>
        </S.Infos>
        <S.buttons>
          <S.Styledbutton onClick={e => {
            console.log('it worked');
          }}>회원 정보 수정하러 가기</S.Styledbutton>
          <S.Styledbutton onClick={e => {
            console.log('it worked');
          }}>내가 쓴 글 수정, 삭제 하러 가기</S.Styledbutton>
          <S.Styledbutton onClick={e => {
            console.log('it worked');
          }}>북마크한 글 보러가기</S.Styledbutton>
          <p onClick={e => {
            setAlertinfo('회원탈퇴');
          }}>&nbsp;&nbsp;&nbsp;회원 탈퇴하기&nbsp;&nbsp;&nbsp;</p>
        </S.buttons>
        <S.checkingPeople>
          <img src={checking} alt='checking' />
        </S.checkingPeople>
      </S.innerbox>
      <S.alertBox style={{ display: `${alertinfo === '' ? 'none' : 'block'}` }} onClick={e => setAlertinfo('')} />
      <S.alertMessage style={{ display: `${alertinfo === '' ? 'none' : 'block'}` }}>
        <img src={alertcheck} alt="alertcheck" />
        <S.alertMessageH1>{alertinfo === '회원탈퇴' ? '회원 탈퇴를 하시겠습니까?' : ''}</S.alertMessageH1>
        <S.alertMessageAnswer>
          <S.alertMessageAnswerButton onClick={e => setAlertinfo('')}>네</S.alertMessageAnswerButton>
          <S.alertMessageAnswerButton onClick={e => setAlertinfo('')}>아니요</S.alertMessageAnswerButton>
          {/* <S.alertMessageAnswerButton>확인</S.alertMessageAnswerButton> */}
        </S.alertMessageAnswer>
      </S.alertMessage>
    </S.Profile>
  </>
}