import { styled } from "styled-components";

export const boxcontent = styled.div`
  background-color:rgba(39, 70, 47, .6);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  outline: solid 1px white;
  margin-left: 2.5vw;
  margin-top: 30px;
  padding: 17px;
  .inner{
    height: 180px;
    background-clip: padding-box;
    border-radius: 10px;
    font-size: 12px;
    background-color: white;
    z-index: 1;
    
    .bookmark{
      display: flex;
      justify-content: right;
      img{
        margin-top: 5px;
        margin-right: 5px;
        height: 18px;
        object-fit: scale-down;
        cursor: pointer;
      }
    }
    .header{
      margin-top: -12px;
      margin-left: 15px;
      display: flex;
      align-items: center;
      justify-content: left;
      .profile{
        display: flex;
        align-items: center;
      .profileimg{
        width: 23px;
        height: 23px;
        border: 1px solid gray;
        border-radius: 30px;
        margin-right: 5px;
      }
    }
    .hr{
      margin: 0 10px;
      border-left: 2px solid #00250D;
      height: 18px;
    }
  }
    .roothr{
      margin:10px 15px;
      border-top: 2px solid #00250D;
      width: 250px;
    }
    .contents{
      margin: 15px auto 0 auto;
      height: 60px;
      width: 80%;
      box-shadow: 0 0 3px 1px lightgray;
      border-radius: 10px;
      padding: 10px;
      text-align: left;
    }
    .footer{
      display: flex;
      justify-content: right;
      align-items: end;
      margin-right: 18px;
      img{
        margin: 0 5px 0 10px;
        margin-top: 8px;
        width: 18px;
        object-fit: scale-down;
      }
    }
  }
`