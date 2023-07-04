import trophy from '../../assets/trophy.png';
import * as S from './style';

export default function Trophy({ number }) {
  return <S.Trophy>
    <img src={trophy} alt='trophy' />
    <p>{number}</p>
  </S.Trophy>;
}