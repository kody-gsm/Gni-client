import { styled } from "styled-components";

export const Community = styled.div`
  background-color: #27462F;
  margin-top: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  .whitebox{
    background-color: white;
    width: 100vw;
    outline: solid 5px lightgray ;
    width: 92vw;
    margin-top: 19vh;
    height: 700px;
    margin-bottom: 20vh;
    border-radius: 5vw;
    .boxheader{
      margin: 50px auto;
      width: 93.5%;
      display: flex;
      justify-content: space-between;
      .title{
        margin-left: 10px;
        margin-top: -10px;
        display: flex;
        align-items: center;
        font-size: 14px;
        @keyframes belling {
          10%{
            transform: rotate(10deg);
          }
          50%{
            transform: rotate(-10deg);
          }
        }
        .active{
          animation-name: belling;
            animation-iteration-count: 3;
            animation-duration: ease;
            animation-duration: 0.8s;
        }
        span{
          margin-left: -16px;
          z-index: 10;
        }
        img{
          width: 50px;
          object-fit: scale-down;
          cursor: pointer;
          transform: rotate(0deg);
        }
      }
      .gowrite{
        margin-top: -10px;
        margin-right: -6px;
        font-size: 11px;
        padding: 0 20px;
        height: 35px;
        background-color: white;
        border: 1px solid lightgray;
        border-radius: 5px;
        box-shadow: 0 0 20px 3px lightgray;
        cursor: pointer;
        &:hover{
          background-color: rgba(39, 70, 47, .6);
          color: white;
        }
        &:active{
          background-color: rgba(31, 56, 37, 0.6);
          color: white;
        }
      }
    }
    .main{
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      justify-content: center;
      margin-top: -30px;
      margin-left: -30px;
    }
    .dots{
      margin-top: 30px;
      display: flex;
      justify-content: center;
      .dot{
        cursor: pointer;
        margin: 0 4px;
        background-color: #CCCCDC;
        width: 8px;
        height: 8px;
        border-radius: 30px;
      }
      .active{
        background-color: #6EB289;
      }
    }
  }
`