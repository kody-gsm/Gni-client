import * as S from './style';
import heart from '../../assets/heart.png';
import message from '../../assets/messages.png';

export default function Boxcontent() {
  return (
    <S.boxcontent>
      <div className='header'>
        <div className='profile'>
          {/* <img src='' alt='profile' className='profileimg' /> */}
          <div className='profileimg' />
          <span>
            홍길동
          </span>
        </div>
        <div className='hr' />
        <span className='title'>
          {'대충 텍스트 아무거나'}
        </span>
      </div>
      <div className='roothr' />
      <div className='contents'>
        {'대충 텍스트 아무거나'}
      </div>
      <div className='footer'>
        <img src={heart} alt='likes' className='likes' />
        <span>{999}</span>
        <img src={message} alt='answers' className='answers' />
        <span>{999}</span>
      </div>
    </S.boxcontent>
  );
}