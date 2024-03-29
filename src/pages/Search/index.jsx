import Nav from "../../components/Nav/Nav";
import * as S from "./style";
import searchimg from "../../assets/biggerSearch.png";
import searchingPeolple from "../../assets/searchingPeople.png";
import stick from "../../assets/stick.png";
import Boxcontent from "../../components/Boxcontent/boxcontent";
import { useEffect, useState } from "react";
import axios from "axios";

const url = process.env.REACT_APP_BACKEND_URL;

export default function Search() {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [datas, setDatas] = useState([]);
  const [maxIdx, setMaxIdx] = useState(1);
  const getMaxidx = async e => {
    await axios.get(`${url}/community/search_max_index/?key_word=${input}`)
      .then(e => {
        setMaxIdx(e.data.max_index);
      }).catch(e => {
        console.log(e)
      })
  }

  const search = async () => {
    try {
      const res = await axios.get(
        `${url}/community/search/${index + 1}?key_word=${input}`
      );

      const newDataArray = res.data.map((item) => ({
        id: item.id,
        title: item.title,
        content: item.content,
        writer: item._writer,
        likes: item._likes,
        views: item.views,
      }));

      // 기존 datas 배열에 새로운 데이터를 추가하여 업데이트
      setDatas(newDataArray);
      console.log(res);
      console.log(datas);
      getMaxidx();
    } catch (error) {
      console.log(error);
    }
  };

  function MakeDot() {
    let boxlist = [];
    for (let i = 0; i < maxIdx; i++) {
      boxlist.push(<div className={`dot ${index === i ? `active` : ''}`} onClick={e => setIndex(i)} />);
    }
    return boxlist;
  }

  useEffect(() => {
    search();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Nav />
      <S.search>
        <div className="emptybox" />
        <div className="headers">
          <div className="block">
            <span>게시판에 인기 있는 순위대로 나타나져 있어요!</span>
            <div className="flex">
              <input
                placeholder="찾으시는 정보를 입력해주세요"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <div className="button">
                <img src={searchimg} alt="search" onClick={search} />
              </div>
            </div>
          </div>
          <div className="searching">
            <img src={searchingPeolple} alt="searchingpeople" />
          </div>
        </div>
        <div className="stick">
          <img src={stick} alt="stick" />
        </div>
        <div className="contentses">
          <span className="span">인기글 순위</span>
          {
            <>
              <div className="flex">
                {datas?.map((data) => (
                  <Boxcontent
                    name={data.writer}
                    title={data.title}
                    content={data.content}
                    views={data.views}
                    likes={data.likes}
                    key={data.id}
                  />
                ))}
              </div>
            </>
          }
          {/* <span className="span">인기 프로젝트 모집 게시글 순위</span>
          {
            <>
              <div className="flex"></div>
            </>
          } */}
        </div>
        <hr className="searchHR" />
        <div className="dots">
          {MakeDot()}
        </div>
      </S.search>
    </>
  );
}
