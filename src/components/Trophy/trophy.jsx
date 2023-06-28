import trophy from '../../assets/trophy.png';

export default function Trophy(props) {
  return <div className='trophy' style={{ position: 'absolute', zIndex: 11 }}>
    <img src={trophy} alt='trophy' />
    <p style={{ textAlign: 'center', marginTop: '-60px', color: 'white' }}>{props?.number}</p>
  </div>;
}