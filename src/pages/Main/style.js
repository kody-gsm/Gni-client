import { styled } from "styled-components";

export const main = styled.div`
  @font-face {
    font-family: 'LotteMartDream';
    font-style: normal;
    font-weight: 400;
    src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartDream/LotteMartDreamMedium.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartDream/LotteMartDreamMedium.woff') format('woff');
  }
  margin-top: 90px;
  width: calc(100vw - 18px);
  height: 1680px;
  overflow-y: hidden;
  overflow-x: hidden;
  background-color: #27462F;
  font-family: "LotteMartDream";
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
      border-right: none;
      display: flex;
      border-radius: 30px 0 0 30px;
      align-items: center;
      width: 68vw;
      height: 330px;
      background-color: white;
      margin-top: 180px;
      overflow-x: scroll;
      &::-webkit-scrollbar{
        height:50px;
      }
      &::-webkit-scrollbar-thumb{
        background-color: #d6d6d6;
        border-radius: 100px;
        border: 22px solid white;
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
    width: 1300px;
    height: 1300px;
    display: flex;
    align-items: baseline;
    .innerheadhunt{
      width: 90%;
      margin-top: 180px;
      .headhuntheader{
        margin-left: 100px;
        display: flex;
        .name{
          .innername{
            display: flex;
            align-items: baseline;
            h1{
              font-size: 30px;
            }
          }
        }
        .span{
          margin-top: 30px;
          margin-left: 10px;
          font-size: 20px;
          color: #27462F;
        }
      }
      .checkingpeople{
        width: 250px;
        object-fit: scale-down;
      }
      .headhunthr{
        margin-left: 100px;
        margin-top: 20px;
        width: 50%;
      }
    }
    .contentses{
      margin: auto;
      margin-top: 50px;
      display: flex;
      align-items: end;
      text-align: center;
      width: 105%;
      .innercontents{
        height: 650px;
        overflow-x: scroll;
        display: flex;
        margin-bottom: -40px;
        &::-webkit-scrollbar{
          height:125px;
        }
        &::-webkit-scrollbar-thumb{
          background-color: #d6d6d6;
          border-radius: 100px;
          border: 60px solid white;
        }
        .introduce{
          font-size: 13px;
          margin-bottom: 30px;
          color: #ABABAB;
        }
      }
    }
  }
`
