import Nav from "../../components/Nav/Nav";
import React, { useState } from 'react';
import * as S from './style';
import Boxcontent from "../../components/Boxcontent/boxcontent";
import bookmarkimg from '../../assets/unchecked_bookmark.png';
import axios from "axios";
import WritePost from "../../components/WritePost";
import { createPortal } from "react-dom";

const url = "https://port-0-gni-server-k19y2kljzsh19o.sel4.cloudtype.app";

export default function Bookmark() {
  const [index, setIndex] = useState(0);
  const [createModal, setCreateModal] = useState(false);
  const [posts, setPosts] = useState([]);

  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const [name, setName] = useState('홍길동');
  const [isdisabled, setIsdisabled] = useState(false);

  const getBookmarkedPosts = async e => {
    // await axios.get(`${url}/community/list/${index + 1}`)
    //   .then(e => {
    //     console.log(e.data)
    //     setPosts(e.data);
    //   }).catch(e => {
    //     console.log(e)
    //   })
  }
  function MakeDot(cnt) {
    let boxlist = [];
    for (let i = 0; i < cnt; i++) {
      boxlist.push(<div className={`dot ${index === i ? `active` : ''}`} onClick={e => setIndex(i)} />);
    }
    return boxlist;
  }
  return <>
    <Nav />
    <S.Join>
      <div className="whitebox">
        <div className="boxheader">
          <div className="title">
            <img src={bookmarkimg} alt="bookmarking" />
            <span>{'홍길동'}님의 북마크된 글들이에요!</span>
          </div>
        </div>
        <div className="main">
          {posts.map((i, n) => <Boxcontent onClick={async e => {
            await axios.get(`${url}/community/${i?.id}`)
              .then(e => {
                console.log(e.data);
                const d = e.data;
                setTitle(d?.title);
                setText(d?.content);
                setName(d?._writer);
                setIsdisabled(true);
                setCreateModal(true);
              }).catch(e => {
                console.log(e)
              })
          }} heartClick={async e => {
            await axios.patch(`${url}/community/likes/${i?.id}`)
              .then(e => {
                if (e.status) {
                  getBookmarkedPosts();
                }
              }).catch(e => { console.log(e) });
          }} bookmarkingFun={async e => {
            await axios.patch(`${url}/community/bookmark/${i?.id}`)
              .then(e => {
                console.log(e);
                getBookmarkedPosts()
              }).catch(e => {
                console.log(e)
              })
          }}
            setModal={setCreateModal} key={i?.id} name={i?._writer} title={i?.title} content={i?.content} likes={i?._likes} checking={i?._bookmark} replies={i?.views} />)}
        </div>
        <div className="dots">
          {MakeDot(4)}
        </div>
      </div>
    </S.Join>
    {createModal && createPortal(<WritePost isdisabled={isdisabled} title={title} setTitle={setTitle} text={text} setText={setText} name={name} setModal={setCreateModal} />, document.body)}
  </>
}