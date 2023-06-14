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
  background-color: #27462F;
  font-family: "LotteMartDream";
  .emptyBox{
    height: 1px;
  }
  .contentBox{
    display: flex;
    align-items: center;
    .innerBox{
      display: flex;
      align-items: center;
      z-index: 3;
      width: 63vw;
      height: 400px;
      background-color: white;
      margin-top: 300px;
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
      position: absolute;
      margin-top: 300px;
      z-index: 1;
      right: -130px;
      width: 750px;
      height: 750px;
      background-color: white;
      border-radius: 5000px;
      display: flex;
      align-items: center;
      .innercircle{
        text-align: center;
        color: #27462F;
        font-size: 20px;
        font-weight: bolder;
        img{
          margin-top: 10px;
          width: 450px;
          border-radius: 5000px;
        }
      }
    }
  }
  .headhunt{
    margin-top: 180px;
    margin-left: -190px;
    background-color: white;
    width: 1300px;
    height: 1300px;
    border-radius: 8000px;
    display: flex;
    align-items: baseline;
    justify-content: right;
    .innerheadhunt{
      margin-top: 150px;
      margin-right: 100px;
      .headhuntheader{
        display: flex;
        justify-content: center;
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
      .headhunthr{
        margin-top: 20px;
        width: 70%;
      }
    }
    .contentses{
      margin-top: 50px;
      margin-left: 300px;
      display: flex;
      align-items: end;
      text-align: center;
      .innercontents{
        width: 440px;
        height: 550px;
        overflow-y: scroll;
        margin-bottom: -40px;
        &::-webkit-scrollbar{
          width:18px;
        }
        &::-webkit-scrollbar-thumb{
          background-color: #d6d6d6;
          border-radius: 100px;
          border: 5px solid white;
        }
        .introduce{
          font-size: 13px;
          margin-bottom: 30px;
          color: #ABABAB;
        }
      }
      .checkingpeople{
        width: 350px;
        object-fit: scale-down;
      }
    }
  }
`
