import * as S from './style';

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
    </S.boxcontent>
  );
}