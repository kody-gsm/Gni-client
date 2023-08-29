import Nav from "../../components/Nav/Nav";
import React, { useEffect, useState } from 'react';
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

  const [postInfo, setPostInfo] = useState({
    id: '',
    title: '',
    text: '',
    name: '',
    comments: []
  });
  const [isdisabled, setIsdisabled] = useState(false);

  useEffect(e => {
    getBookmarkedPosts();
  }, [index]);

  const getDetail = async i => {
    await axios.get(`${url}/community/${i}`)
      .then(e => {
        const d = e.data;
        setPostInfo({
          id: d?.id,
          title: d?.title,
          text: d?.content,
          name: d?._writer,
          comments: d?.comment
        })
        setIsdisabled(true);
        setCreateModal(true);
      }).catch(e => {
        console.log(e)
      })
  }

  const getBookmarkedPosts = async e => {
    await axios.get(`${url}/community/my_bookmark/${index + 1}`)
      .then(e => {
        console.log(e.data)
        setPosts(e.data);
      }).catch(e => {
        console.log(e)
      })
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
                const d = e.data;
                setPostInfo({
                  id: d?.id,
                  title: d?.title,
                  text: d?.content,
                  name: d?._writer,
                  comments: d?.comment
                })
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
                getBookmarkedPosts();
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
    {createModal && createPortal(<WritePost isdisabled={isdisabled} postInfo={postInfo} setPost={setPostInfo} getDetail={getDetail} setModal={setCreateModal} />, document.body)}
  </>
}