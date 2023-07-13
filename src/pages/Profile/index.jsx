import Nav from "../../components/Nav/Nav";
import * as S from './style';

export default function Profile() {
  return <>
    <Nav />
    <S.Profile>
      <S.innerbox>
        <S.Infos>
          <S.Img>

          </S.Img>
          <S.NameDiv>
            {'홍길동'}
          </S.NameDiv>
        </S.Infos>
      </S.innerbox>
    </S.Profile>
  </>
}