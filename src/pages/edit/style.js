import { styled } from "styled-components";

export const Community = styled.div`
  background-color: #27462F;
  margin-top: 65px;
  height: calc(100vh - 65px);
  display: flex;
  align-items: center;
  justify-content: center;
  .innerbox{
    margin-top: 10vh;
    /* margin-bottom: 20vh; */
    .whitebox{
      background-color: white;
      width: 100vw;
      outline: solid 5px lightgray ;
      width: 92vw;
      height: 420px;
      margin-bottom: 18.4vh;
      border-radius: 3vw;
      .boxheader{
        margin: 50px auto;
        width: 93.5%;
        display: flex;
        justify-content: space-between;
        .title{
          margin-left: 10px;
          margin-top: 40px;
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
            margin-left: 10px;
            z-index: 10;
            color: #00250D;
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
  }
`

export const alertBox = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.25;  
`

export const alertMessage = styled.div`
  @keyframes moveanimation {
    0%{
      margin-top: -800px;
    }
  }
  position: fixed;
  margin: auto;
  margin-top: -540px;
  z-index: 101;
  width: 522px;
  height: 230px;
  border-radius: 20px;
  background-color: white;
  text-align: center;
  opacity: 1;
  animation-name: moveanimation;
  animation-duration: ease;
  animation-duration: 0.5s;
  img{
    object-fit: scale-down;
    width: 75px;
    margin-top: 25px;
    margin-bottom: 15px;
  }
`

export const alertMessageH1 = styled.div`
  font-weight: bolder;
  color:#00541D;
  text-align: center;
  font-size: 18px;
`
export const alertMessageAnswer = styled.div`
  font-size: 13px;
  color: gray;
`
export const AlertMessageAnswerButtonStyle = styled.button`
  margin-top: 20px;
  box-shadow: 0 0 10px 3px #e2e2e2;
  border: none;
  cursor: pointer;
  background-color: white;
  width: 70px;
  height: 25px;
  border-radius: 3px;
  &+&{
    margin-left: 25px;
  }
  &:hover{
    background-color: #e2e2e2;
  }
  &:active{
    background-color: #eaeaea;
    border: 1px solid #e2e2e2;
  }
`

export function alertMessageAnswerButton({ children, ...rest }) {
  return <AlertMessageAnswerButtonStyle {...rest}>{children}</AlertMessageAnswerButtonStyle>;
}