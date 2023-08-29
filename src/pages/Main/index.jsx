import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav/Nav';
import * as S from './style';
import Boxcontent from '../../components/Boxcontent/boxcontent';
import office from '../../assets/office.png';
import CheckingPeople from '../../assets/checkingPeople.png';
import axios from 'axios';
import { createPortal } from 'react-dom';
import WritePost from '../../components/WritePost';
const url = 'https://port-0-gni-server-k19y2kljzsh19o.sel4.cloudtype.app';

function Main(props) {
  const [communityLists, setCommunityLists] = useState([]);
  const [joinLists, setJoinLists] = useState([]);

  const [createModal, setCreateModal] = useState(false);

  const [postInfo, setPostInfo] = useState({
    id: '',
    title: '',
    text: '',
    name: '',
    comments: [],
  });
  const [isdisabled, setIsdisabled] = useState(false);
  const requestMainPost = async e => {
    await axios.get(`${url}/main/`, { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('tokens'))?.accessToken}` } }).then(e => {
      const d = e.data;
      setCommunityLists(d?.community);

    }).catch(err => {
      console.log(err)
    })
  };

  const getComuDetail = async i => {
    await axios.get(`${url}/community/${i}`)
      .then(e => {
        const d = e.data;
        setPostInfo({
          id: d?.id,
          title: d?.title,
          text: d?.content,
          name: d?._writer,
          comments: d?.comment
        });
        setIsdisabled(true);
        setCreateModal(true);
      }).catch(e => {
        console.log(e, i)
      })
  }

  useEffect(e => {
    if (localStorage.getItem('logininfo') !== undefined) {
      requestMainPost();
    }
  }, []);
  return (<>
    <Nav />
    <S.main>
      <div className='emptyBox' />
      <div className='contentBox'>
        <div className='innerBox'>
          {communityLists?.map((i, n) => <Boxcontent onClick={e => getComuDetail(i?.id)} heartClick={async e => {
            await axios.patch(`${url}/community/bookmark/${i?.id}`)
              .then(e => {
                requestMainPost()
              }).catch(e => {
                console.log(e)
              })
          }} bookmarkingFun={async e => {
            await axios.patch(`${url}/community/bookmark/${i?.id}`)
              .then(e => {
                requestMainPost()
              }).catch(e => {
                console.log(e)
              });
          }}
            setModal={setCreateModal} key={i?.id} name={i?._writer} title={i?.title} content={i?.content} likes={i?._likes} checking={i?._bookmark} replies={i?.views} />)}
          <div className='mt' />
        </div>
        <div className='circle'>
          <div className='innercircle'>
            <span>지금 뜨고 있는 소식을 놓치지 마세요!</span>
            <img src={office} alt='office' />
          </div>
        </div>
      </div>
      <div className='headhunt'>
        <div className='innerheadhunt'>
          <div className='headhuntheader'>
            <div className='name'>
              <div className='innername'>
                <h1>
                  {"홍길동"}
                </h1>
                <span>님의</span>
              </div>
              <hr />
            </div>
            <span className='span'>
              전공에 맞는 프로젝트 모집 게시글이에요
            </span>
          </div>
          <img src={CheckingPeople} className='checkingpeople' alt='checkingPeople' />
          <hr className='headhunthr' />
          <span className='introduce'>스크롤해서 모집 게시글들은 한 번 봐보세요!</span>
          <div className='contentses'>
            <div className='innercontents'>
              {<>
                <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
                <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
                <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
                <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
                <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
                <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
                <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
                <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
                <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
                <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
                <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
                <Boxcontent name={'홍길동'} title={'대충 아무 텍스트'} answers={999} likes={999} checking={false} />
              </>}
            </div>
          </div>
        </div>
      </div>
    </S.main>
    {createModal && createPortal(<WritePost isdisabled={isdisabled} postInfo={postInfo} setPost={setPostInfo} setModal={setCreateModal} getDetail={getComuDetail} func={async e => {
      await axios.post(`${url}/community/create/`, { title: postInfo.title, content: postInfo.text, subject: 'subject for test' }).then(e => {
        console.log(e)
      }).catch(e => {
        console.log(e)
      })
    }} />, document.body)}
  </>
  );
}

export default Main;