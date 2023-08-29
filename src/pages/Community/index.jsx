import Nav from "../../components/Nav/Nav";
import React, { useState, useEffect } from "react";
import * as S from "./style";
import bell from "../../assets/bell.png";
import Boxcontent from "../../components/Boxcontent/boxcontent";
import { createPortal } from "react-dom";
import WritePost from "../../components/WritePost";
import axios from "axios";

const url = "https://port-0-gni-server-k19y2kljzsh19o.sel4.cloudtype.app";

export default function Community() {
  const [index, setIndex] = useState(0);
  const [belling, setBelling] = useState(true);
  const [posts, setPosts] = useState([]);
  const [maxidx, setMaxidx] = useState(1);

  const [postInfo, setPostInfo] = useState({
    title: '',
    text: '',
    name: ''
  });

  const [createModal, setCreateModal] = useState(false);
  const [isdisabled, setIsdisabled] = useState(false);

  const postCommunityPosts = async e => {
    await axios.post(`${url}/community/create/`, { title: postInfo.title, content: postInfo.text, subject: 'subject for test' }).then(e => {
      getCommunityPosts();
      getMaxidx();
      console.log(e)
    }).catch(e => {
      console.log(e)
    })
  }

  const getCommunityPosts = async e => {
    await axios.get(`${url}/community/list/${index + 1}`)
      .then(e => {
        console.log(e.data)
        setPosts(e.data);
      }).catch(e => {
        console.log(e)
      })
  }

  const getMaxidx = async e => {
    await axios.get(`${url}/community/list/max_idx`)
      .then(e => {
        setMaxidx(e.data.index)
      })
      .catch(e => {
        console.log(e);
      })
  }

  useEffect(e => {
    setTimeout(() => {
      setBelling(false);
    }, 3000);
  }, [belling]);
  useEffect(e => {
    getCommunityPosts();
    getMaxidx();
    //eslint-disable-next-line
  }, [index]);

  function MakeDot() {
    let boxlist = [];
    for (let i = 0; i < maxidx; i++) {
      boxlist.push(<div className={`dot ${index === i ? `active` : ''}`} onClick={e => setIndex(i)} />);
    }
    return boxlist;
  }
  return (
    <>
      <Nav />
      <S.Community>
        <div className="whitebox">
          <div className="boxheader">
            <div className="title">
              <img
                src={bell}
                alt="bell"
                className={belling ? "active" : ""}
                onClick={(e) => setBelling(true)}
              />
              <span>지금 커뮤니티 인기 순위 게시글들이에요!</span>
            </div>
            <button
              className="gowrite"
              onClick={(e) => {
                setPostInfo({
                  title: '',
                  text: '',
                  name: localStorage?.getItem('name')
                });
                setCreateModal(true);
                setIsdisabled(false);
              }}>
              커뮤니티 글쓰러 가기
            </button>
          </div>
          <div className="main">
            {posts.map((i, n) => <Boxcontent onClick={async e => {
              await axios.get(`${url}/community/${i?.id}`)
                .then(e => {
                  const d = e.data;
                  setPostInfo({
                    title: d?.title,
                    text: d?.content,
                    name: d?._writer
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
                    getCommunityPosts();
                  }
                }).catch(e => { console.log(e) });
            }} bookmarkingFun={async e => {
              await axios.patch(`${url}/community/bookmark/${i?.id}`)
                .then(e => {
                  console.log(e);
                  getCommunityPosts()
                }).catch(e => {
                  console.log(e)
                })
            }}
              setModal={setCreateModal} key={i?.id} name={i?._writer} title={i?.title} content={i?.content} likes={i?._likes} checking={i?._bookmark} replies={i?.views} />)}
          </div>
          <div className="dots">
            {MakeDot()}
          </div>
        </div>
      </S.Community>
      {createModal && createPortal(<WritePost isdisabled={isdisabled} title={postInfo.title} text={postInfo.text} setPost={setPostInfo} name={postInfo.name} setModal={setCreateModal} func={postCommunityPosts} />, document.body)}
    </>
  );
}
