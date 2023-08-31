import Nav from "../../components/Nav/Nav";
import React, { useState, useEffect } from 'react';
import * as S from './style';
import Boxcontent from "../../components/Boxcontent/boxcontent";
import alertcheck from '../../assets/alertcheck.png';
import warning from '../../assets/cantFound.png';
import axios from "axios";
import { createPortal } from "react-dom";
import WritePost from "../../components/WritePost";

export default function Edit() {
  const [belling, setBelling] = useState(true);
  const [indexOfjoin, setIndexOfjoin] = useState(0);
  const [alertinfo, setAlertinfo] = useState('');
  const [alertAnswer, setAlertAnswer] = useState('');

  const [postInfo, setPostInfo] = useState({
    id: '',
    title: '',
    text: '',
    name: '',
    comments: [],
  });

  const [createModal, setCreateModal] = useState(false);
  const [isdisabled, setIsdisabled] = useState(false);

  const [modifyId, setModifyId] = useState(0);

  const [communityPosts, setCommunityPosts] = useState([]);
  const [communityIdx, setCommunityIdx] = useState(0);
  const [communityMaxIdx, setCommunityMaxIdx] = useState(1);

  const url = process.env.REACT_APP_BACKEND_URL;

  const getMyCommunityPosts = async e => {
    await axios.get(`${url}/community/my_posts/${communityIdx + 1}`)
      .then(e => {
        setCommunityPosts(e.data);
      }).catch(e => {
        console.log(e);
      })
  }

  const modifingCommunityPosts = async e => {
    await axios.patch(`${url}/community/modify/${modifyId}`, { title: postInfo.title, content: postInfo.text, subject: 'subject for test' }).then(e => {
      getMyCommunityPosts();
      console.log(e)
    }).catch(e => {
      console.log(e)
    })
  }

  const getComuMaxIdx = async e => {
    await axios.get(`${url}/community/my_posts/max_idx`)
      .then(e => {
        setCommunityMaxIdx(e.data.index);
      }).catch(e => {
        console.log(e);
      })
  }

  useEffect(e => {
    setTimeout(() => {
      setBelling(false);
    }, 3000);
  }, [belling]);

  useEffect(e => {
    getMyCommunityPosts();
    getComuMaxIdx();
    //eslint-disable-next-line
  }, [communityIdx]);
  function MakeDot(cnt, type) {
    let boxlist = [];
    for (let i = 0; i < cnt; i++) {
      if (type === 'join') {
        boxlist.push(<div className={`dot ${indexOfjoin === i ? `active` : ''}`} onClick={e => setIndexOfjoin(i)} />);
      } else if (type === 'comu') {
        boxlist.push(<div className={`dot ${communityIdx === i ? `active` : ''}`} onClick={e => setCommunityIdx(i)} />);
      }
    }
    return boxlist;
  }
  async function DelPost(id) {
    if (window.confirm("글을 삭제하시겠습니까?")) {
      await axios.delete(`${url}/community/delete/${id}`)
        .then(e => {
          getMyCommunityPosts();
          getComuMaxIdx();
        }).catch(e => {
          console.log(e);
        })
    }
  }
  return <>
    <Nav />
    <S.Community>
      <div className="innerbox">
        {/* <div className="whitebox">
          <div className="boxheader">
            <div className="title">
              <span>{localStorage?.getItem('name')}님이 적은 모집글이에요!</span>
            </div>
          </div>
          <div className="main">
            {<>
              <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} iseditmode={true} funOfDel={DelPost} />
              <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} iseditmode={true} funOfDel={DelPost} />
              <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} iseditmode={true} funOfDel={DelPost} />
              <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} iseditmode={true} funOfDel={DelPost} />
            </>}
          </div>
          <div className="dots">
            {MakeDot(4, 'join')}
          </div>
        </div> */}
        <div className="whitebox">
          <div className="boxheader">
            <div className="title">
              <span>{localStorage?.getItem('name')}님이 적은 커뮤니티 게시글이에요!</span>
            </div>
          </div>
          <div className="main">
            {communityPosts.map((i, n) => <Boxcontent onClick={async e => {
              await axios.get(`${url}/community/${i?.id}`)
                .then(e => {
                  console.log(e.data);
                  const d = e.data;
                  setPostInfo({
                    id: d?.id,
                    title: d?.title,
                    text: d?.content,
                    name: d?._writer,
                    comments: d?.comment
                  });
                  setIsdisabled(false);
                  setCreateModal(true);
                  setModifyId(i?.id);
                }).catch(e => {
                  console.log(e)
                })
            }} heartClick={async e => {
              await axios.patch(`${url}/community/bookmark/${i?.id}`)
                .then(e => {
                  getMyCommunityPosts()
                }).catch(e => {
                  console.log(e)
                })
            }} bookmarkingFun={async e => {
              await axios.patch(`${url}/community/bookmark/${i?.id}`)
                .then(e => {
                  getMyCommunityPosts()
                }).catch(e => {
                  console.log(e)
                })
            }}
              setModal={setCreateModal} key={i?.id} name={i?._writer} title={i?.title} content={i?.content} checking={i?._bookmark} iseditmode={true} funOfDel={e => DelPost(i?.id)} />)}
          </div>
          <div className="dots">
            {MakeDot(communityMaxIdx, 'comu')}
          </div>
        </div>
      </div> <S.alertBox style={{ display: `${alertinfo === '' ? 'none' : 'block'}` }} onClick={e => setAlertinfo('')} />
      <S.alertMessage style={{ display: `${alertinfo === '' ? 'none' : 'block'}` }}>
        <img src={alertAnswer !== '' ? alertcheck : warning} alt="alertcheck" />
        <S.alertMessageH1>{alertinfo === '글삭제' ?
          (alertAnswer === 'y' ? '게시글이 삭제되었어요.' : '정말로 삭제 하시겠습니까?') : ''}</S.alertMessageH1>
        <S.alertMessageAnswer>
          {alertAnswer !== 'y' ?
            <>
              게시글을 한 번 삭제하면<br />
              다시 복구 및 수정이 불가해요<br />
            </> : <>GNI로 돌아가 다른 게시물들을 봐볼까요?<br /></>
          }
          <S.alertMessageAnswerButton onClick={e => {
            if (alertinfo === '글삭제' && alertAnswer === 'y') {
              setAlertinfo('');
              setAlertAnswer('');

            } else {
              setAlertAnswer('y');

            }
          }}>네</S.alertMessageAnswerButton>
          {alertAnswer !== 'y' && <S.alertMessageAnswerButton onClick={e => {
            setAlertinfo('');
            setAlertAnswer('');
          }}>아니요</S.alertMessageAnswerButton>}
          {/* <S.alertMessageAnswerButton>확인</S.alertMessageAnswerButton> */}
        </S.alertMessageAnswer>
      </S.alertMessage>
    </S.Community>
    {createModal && createPortal(<WritePost isdisabled={isdisabled} title={postInfo.title} text={postInfo.text} postInfo={postInfo} setPost={setPostInfo} setModal={setCreateModal} func={modifingCommunityPosts} />, document.body)}
  </>;
}