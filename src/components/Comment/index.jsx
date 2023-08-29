import * as S from './style';
import trashcan from '../../assets/trashcan.png';
import axios from 'axios';

const url = "https://port-0-gni-server-k19y2kljzsh19o.sel4.cloudtype.app";

export default function Comment({ property, reget }) {
  return <S.main>
    <div className='user'>{property?._writer}</div>
    <div className='comment'>{property?.content}</div>
    <img src={trashcan} alt='throw' onClick={async e => {
      const id = property.id;
      await axios.delete(`${url}/community/comment/delete/${id}`)
        .then(e => {
          reget();
        }).catch(e => {
          console.log(e)
        })
    }} />
  </S.main>
}