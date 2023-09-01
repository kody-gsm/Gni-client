import Nav from "../../components/Nav/Nav";
import * as S from './style';
import defaultProfile from '../../assets/defaultProfile.png';
import checking from '../../assets/checkingPeople.png';
import alertcheck from '../../assets/alertcheck.png'
import React, { useEffect, useState } from 'react';

import pwmodeimg from '../../assets/PasswordNotView.png';
import notpwmodeimg from '../../assets/PasswordView.png';
import axios from "axios";

const url = process.env.REACT_APP_BACKEND_URL;

export default function Profile() {
  const [alertinfo, setAlertinfo] = useState('');
  const [alertAnswer, setAlertAnswer] = useState('');
  const [modify, setModify] = useState(false);
  const [ispwmode, setIspwmode] = useState(true);
  const [modifiedList, setModifiedList] = useState({
    classnum: '',
    pw: '',
    repw: ''
  });
  const [modified, setModifed] = useState(true);
  const [emailVerified, setEmailVerified] = useState(0); //이메일 인증 하기 버튼 0 이메일 인증 확인 버튼 1 이메일 인증 확인됨 2

  const verifyingEmail = async e => {
    if (modifiedList?.classnum !== '') {
      await axios.post(`${url}/common/password/`, { email: modifiedList.classnum, headers: { 'Authorization': '' } })
        .then(e => {
          alert("이메일을 확인해주세요");
          setEmailVerified(1);
        }).catch(e => {
          alert("이메일을 확인해주세요")
        })
    } else {
      alert("이메일을 제대로 입력해주세요");
    }
  }

  const checkVerified = async e => {
    if (modifiedList?.classnum !== '') {
      await axios.get(`${url}/common/password/?email=${modifiedList.classnum}`)
        .then(e => {
          if (e) {
            alert("이메일 인증이 완료되었습니다.");
            setEmailVerified(2);
          }
        }).catch(e => {
          alert("이메일을 확인해주세요")
        })
    }
  }

  const changePw = async e => {
    console.log(modifiedList);
    await axios.patch(`${url}/common/password?email=${modifiedList.classnum}`, { password: modifiedList.pw })
      .then(e => {
        setAlertinfo('회원정보');
        setModifed(false);
      }).catch(e => {
        console.log(e);
      })
  }

  useEffect(e => {
    if (alertAnswer !== 'y') {
      setAlertAnswer('');
    }
  }, [alertAnswer]);
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
              {localStorage?.getItem('name')}
            </S.NameDiv>
          </div>
        </S.Infos>
        {!modify ?
          <S.buttons>
            <S.Styledbutton onClick={e => {
              setModify(true)
            }}>회원 정보 수정하러 가기</S.Styledbutton>
            <S.Styledbutton onClick={e => {
              window.location.href = '/edit';
            }}>내가 쓴 글 수정, 삭제 하러 가기</S.Styledbutton>
            <S.Styledbutton onClick={e => {
              window.location.href = '/bookmark';
            }}>북마크한 글 보러가기</S.Styledbutton>
            <p onClick={e => {
              setAlertinfo('회원탈퇴');
            }}>&nbsp;&nbsp;&nbsp;회원 탈퇴하기&nbsp;&nbsp;&nbsp;</p>
          </S.buttons> :
          <S.StyledInputs>
            {!modified && modifiedList.classnum === '' && <S.NotModified>이메일을 다시 입력해주세요.</S.NotModified>}
            <S.StyledInput style={{ border: !modified && modifiedList.classnum === '' && '1px solid red' }}
              placeholder={'이메일을 입력해주세요'} value={modifiedList?.classnum} disabled={emailVerified !== 0}
              onChange={e => setModifiedList(a => ({ ...a, classnum: e.target.value }))} />
            {emailVerified === 0 ?
              <S.EmailVerifyingButton onClick={verifyingEmail}>이메일 인증하기</S.EmailVerifyingButton> :
              emailVerified === 1 ?
                <S.EmailVerifyingButton onClick={checkVerified}>인증 확인하기</S.EmailVerifyingButton> :
                <S.EmailVerifyingButton>인증 확인됨</S.EmailVerifyingButton>}
            {!modified && modifiedList.pw === '' && <S.NotModified>비밀번호를 다시 입력해주세요.</S.NotModified>}
            {ispwmode ? <img src={pwmodeimg} alt="pwmodeimg" onClick={e => setIspwmode(false)} /> :
              <img src={notpwmodeimg} alt="notpwmode" onClick={e => setIspwmode(true)} />}
            <S.StyledInput style={{ border: !modified && modifiedList.pw === '' && '1px solid red' }}
              placeholder={emailVerified !== 2 ? '이메일을 먼저 인증해주세요' : '비밀번호를 입력해주세요'} value={modifiedList?.pw}
              onChange={e => setModifiedList(a => ({ ...a, pw: e.target.value }))}
              type={ispwmode ? "password" : "text"} disabled={emailVerified !== 2}
            />
            {!modified && modifiedList.repw === '' && <S.NotModified>비밀번호를 다시 입력해주세요.</S.NotModified>}
            {!modified && modifiedList.repw !== '' &&
              modifiedList.pw !== modifiedList.repw && <S.NotModified>비밀번호를 동일하게 입력해주세요</S.NotModified>}
            {ispwmode ? <img src={pwmodeimg} alt="pwmodeimg" onClick={e => setIspwmode(false)} /> :
              <img src={notpwmodeimg} alt="notpwmode" onClick={e => setIspwmode(true)} />}
            <S.StyledInput style={{ border: !modified && modifiedList.repw === '' && '1px solid red' }}
              placeholder={emailVerified !== 2 ? '이메일을 먼저 인증해주세요' : '비밀번호를 다시 입력해주세요'} value={modifiedList?.repw}
              onChange={e => setModifiedList(a => ({ ...a, repw: e.target.value }))}
              disabled={emailVerified !== 2}
              type={ispwmode ? "password" : "text"} />
            <S.StyledSubmitButton onClick={e => {
              e.preventDefault()
              console.log(modifiedList);
              if (modifiedList.pw !== modifiedList.repw) {
                return;
              }
              if (modifiedList.classnum !== '' && modifiedList.pw !== '' && modifiedList.repw !== '') {
                changePw();
              }
            }}>변경하기</S.StyledSubmitButton>
          </S.StyledInputs>
        }
        <S.checkingPeople>
          <img src={checking} alt='checking' />
        </S.checkingPeople>
      </S.innerbox>
      <S.alertBox style={{ display: `${alertinfo === '' ? 'none' : 'block'}` }} onClick={e => setAlertinfo('')} />

      <S.alertMessage style={{ display: `${alertinfo === '' ? 'none' : 'block'}` }}>
        <img src={alertcheck} alt="alertcheck" />
        <S.alertMessageH1>{alertinfo === '회원탈퇴' ?
          (alertAnswer === 'y' ? '탈퇴가 성공적으로 마무리 됐습니다.' : '회원 탈퇴를 하시겠습니까?')
          : alertinfo === '회원정보' ? (alertAnswer === 'y' ? '' : '성공적으로 회원정보가 변경됐어요!') : ''}</S.alertMessageH1>
        <S.alertMessageAnswer>
          <S.alertMessageAnswerButton onClick={async e => {
            if (alertinfo === '회원정보' || alertAnswer === 'y') {
              setAlertinfo('');
              setAlertAnswer('');
              setModify(false)
            } else {
              setAlertAnswer('y');
              await axios.delete(`${url}/common/delete`)
                .then(e => {
                  localStorage.clear();
                }).catch(e => {
                  console.log(e)
                })
              setModify(false)
            }
          }}>네</S.alertMessageAnswerButton>
          <S.alertMessageAnswerButton onClick={e => {
            setAlertinfo('');
            setAlertAnswer('n');
          }}>아니요</S.alertMessageAnswerButton>
          {/* <S.alertMessageAnswerButton>확인</S.alertMessageAnswerButton> */}
        </S.alertMessageAnswer>
      </S.alertMessage>
    </S.Profile>
  </>
}