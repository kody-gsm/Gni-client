import { styled } from "styled-components";

export const main = styled.div`
  @font-face {
    font-family: 'LotteMartDream';
    font-style: normal;
    font-weight: 400;
    src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartDream/LotteMartDreamMedium.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartDream/LotteMartDreamMedium.woff') format('woff');
  }
  margin-top: 90px;
  width: calc(100vw);
  height: 1380px;
  overflow-x: hidden;
  background-color: #27462F;
  font-family: "LotteMartDream";
  &::-webkit-scrollbar{
    width: 100px;
    background-color: black;
  }
  .emptyBox{
    height: 1px;
  }
  .contentBox{
    margin-left: 25px;
    display: flex;
    align-items: center;
    .innerBox{
      border: 4px solid #D9D9D9;
      border-left: 10px solid #D9D9D9;
      padding-right: 6vw;
      border-right: none;
      display: flex;
      border-radius: 30px 0 0 30px;
      align-items: center;
      width: 623vw;
      height: 330px;
      background-color: white;
      margin-top: 180px;
      overflow-x: scroll;
      &::-webkit-scrollbar{
        height:50px;
        background-color: white;
        border-radius: 100px;
      }
      &::-webkit-scrollbar-thumb{
        background-color: #d6d6d6;
        border-radius: 100px;
        border: 22px solid white;
      }
      .mt{
        margin-left: 440px;
      }
    }
    .circle{
      z-index: 3;
      position: absolute;
      margin-top: 180px;
      border: 2px solid #D9D9D9;
      z-index: 1;
      right: -60px;
      width: 560px;
      height: 560px;
      background-color: white;
      border-radius: 5000px;
      display: flex;
      align-items: center;
      .innercircle{
        margin: auto;
        margin-top: 180px;
        width: 500px;
        text-align: center;
        color: #27462F;
        font-size: 20px;
        img{
          margin-top: 10px;
          width: 270px;
          border-radius: 5000px;
        }
      }
    }
  }
  .headhunt{
    margin: auto;
    margin-top: 180px;
    background-color: white;
    border-radius: 50px;
    border: 5px solid #D9D9D9;
    width: 1350px;
    height: 570px;
    display: flex;
    align-items: baseline;
    .innerheadhunt{
      width: 90%;
      margin-top: 70px;
      .headhuntheader{
        margin-left: 180px;
        display: flex;
        .name{
          text-align: center;
          .innername{
            display: flex;
            align-items: baseline;
            h1{
              font-size: 30px;
              margin-right: 10px;
            }
          }
          hr{
            width: 120%;
            margin-left: -12%;
          }
        }
        .span{
          margin-top: 40px;
          margin-left: 30px;
          font-size: 20px;
          color: #27462F;
        }
      }
      .checkingpeople{
        position: absolute;
        margin-top: -90px;
        right: 160px;
        width: 230px;
        object-fit: scale-down;
      }
      .headhunthr{
        margin-left: 60px;
        margin-top: 20px;
        margin-bottom: 60px;
        width: 55%;
      }
    }
    .introduce{
      font-size: 13px;
      margin-left: 60px;
      color: #ABABAB;
    }
    .contentses{
      margin: auto;
      display: flex;
      text-align: center;
      margin-top: -10px;
      width: 107%;
      .innercontents{
        height: 300px;
        padding-bottom: 30px;
        overflow-x: scroll;
        display: flex;
        &::-webkit-scrollbar{
          height:55px;
          border-radius: 50px;
          background-color: white;
        }
        &::-webkit-scrollbar-thumb{
          background-color: #E7E7E7;
          border-radius: 100px;
          border: 25px solid white;
        }
      }
    }
  }
`
