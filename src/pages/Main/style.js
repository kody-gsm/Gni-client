import { styled } from "styled-components";

export const main = styled.div`
  @font-face {
    font-family: 'LotteMartDream';
    font-style: normal;
    font-weight: 400;
    src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartDream/LotteMartDreamMedium.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartDream/LotteMartDreamMedium.woff') format('woff');
  }
  margin-top: 80px;
  width: calc(100vw - 18px);
  height: 1500px;
  overflow-y: hidden;
  background-color: #27462F;
  font-family: "LotteMartDream";
  .emptyBox{
    height: 1px;
  }
  .contentBox{
    z-index: 3;
    width: 69vw;
    height: 350px;
    background-color: white;
    margin-top: 200px;
    display: flex;
    align-items: center;
    overflow-x: scroll;
    .innerempty{
      margin-left: 70px;
      background-color: white;
    }
    &::-webkit-scrollbar{
      height:18px;
    }
    &::-webkit-scrollbar-thumb{
      background-color: #d6d6d6;
      border-radius: 100px;
      border: 5px solid white;
    }

    .circle{
      position: absolute;
      right: -70px;
      width: 600px;
      height: 600px;
      background-color: white;
      border-radius: 500px;
      display: flex;
      align-items: center;
      .innercircle{
        text-align: center;
        color: #27462F;
        font-size: 20px;
        font-weight: bolder;
        img{
          margin-top: 10px;
          width: 400px;
          border-radius: 5000px;
        }
      }
    }
  }
  .headhunt{
    margin-top: 115px;
    margin-left: -150px;
    background-color: white;
    width: 1200px;
    height: 1200px;
    border-radius: 8000px;
    display: flex;
    align-items: baseline;
    justify-content: right;
    .innerheadhunt{
      margin-top: 150px;
      margin-right: 150px;
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
          margin-left: 5px;
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
      margin-left: 200px;
      display: flex;
      align-items: end;
      .innercontents{
        width: 390px;
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
      }
      .checkingpeople{
        margin-left: 20px;
        width: 300px;
        object-fit: scale-down;
      }
    }
  }
`
