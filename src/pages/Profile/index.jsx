import Nav from "../../components/Nav/Nav";
import * as S from './style';
import defaultProfile from '../../assets/defaultProfile.png';
import checking from '../../assets/checkingPeople.png';

export default function Profile() {
  return <>
    <Nav />
    <S.Profile>
      <S.innerbox>
        <S.Infos>
          <div>
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
        </S.buttons>
        <S.checkingPeople>
          <img src={checking} alt='checking' />
        </S.checkingPeople>
      </S.innerbox>
    </S.Profile>
  </>
}