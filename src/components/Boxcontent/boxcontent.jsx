import * as S from './style';
import heart from '../../assets/heart.png';
import message from '../../assets/messages.png';
import unchecked_bookmark from '../../assets/unchecked_bookmark.png';
import checked_bookmark from '../../assets/checked_bookmark.png';
import { useState } from 'react';
import Trophy from '../Trophy/trophy';

export default function Boxcontent({ name, title, content, likes, replies, checking, trophy, iseditmode, funOfDel }) {
  const [checked, setchecked] = useState(checking);
  return (<>
    <S.boxcontent>
      {trophy && <Trophy number={trophy} />}
      <div className='inner'>
        <div className='bookmark'>
          {checked ? <img src={checked_bookmark} alt='checked' onClick={e => setchecked(e => !e)} /> :
            <img src={unchecked_bookmark} alt='unchecked' onClick={e => setchecked(e => !e)} />}
        </div>
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
          {content}
        </div>
        {!iseditmode ? <div className='footer'>
          <img src={heart} alt='likes' className='likes' />
          <span>{likes >= 999 ? '+999' : likes}</span>
          <img src={message} alt='answers' className='answers' />
          <span>{replies >= 999 ? '+999' : replies}</span>
        </div> : <div className='editfooter'>
          <button>수정하기</button>
          <button onClick={e => funOfDel(0)}>삭제하기</button>
        </div>}
      </div>
    </S.boxcontent>
  </>);
}