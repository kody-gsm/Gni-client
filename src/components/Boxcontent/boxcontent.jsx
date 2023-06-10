import * as S from './style';
import heart from '../../assets/heart.png';
import message from '../../assets/messages.png';

export default function Boxcontent({ name, title, likes, answers }) {
  return (
    <S.boxcontent>
      <div className='header'>
        <div className='profile'>
          {/* <img src='' alt='profile' className='profileimg' /> */}
          <div className='profileimg' />
          <span>
            {name}
          </span>
        </div>
        <div className='hr' />
        <span className='title'>
          {title}
        </span>
      </div>
      <div className='roothr' />
      <div className='contents'>
        {title}
      </div>
      <div className='footer'>
        <img src={heart} alt='likes' className='likes' />
        <span>{likes}</span>
        <img src={message} alt='answers' className='answers' />
        <span>{answers}</span>
      </div>
    </S.boxcontent>
  );
}