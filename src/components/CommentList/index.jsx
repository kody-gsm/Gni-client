import { useEffect, useState } from 'react';
import Comment from '../Comment';
import * as S from './style';
import axios from 'axios';

const url = "https://port-0-gni-server-k19y2kljzsh19o.sel4.cloudtype.app";

export default function CommentList({ commentsList, id }) {
  const [input, setInput] = useState("");
  return <S.CommentList>
    <S.inner onSubmit={async e => {
      e.preventDefault();
      await axios.post(`${url}/community/comment/create/${id}`, { content: input })
        .then(e => {
          console.log(e.data);
          setInput('');
        }).catch(e => {
          console.log(e);
        });
    }}>
      <S.contents>
        {commentsList?.map((i, n) => <Comment key={i?.id} property={i} />)}
      </S.contents>
      <input placeholder='Enter를 치면 댓글이 올라가요' onChange={e => setInput(e.target.value)} value={input} />
    </S.inner>
  </S.CommentList >
}