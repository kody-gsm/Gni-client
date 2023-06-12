import { styled } from "styled-components";

export const boxcontent = styled.div`
  height: 240px;
  border: 20px solid #27462F99;
  border-radius: 10px;
  margin-left: 30px;
  margin-top: 30px;

  .bookmark{
    display: flex;
    justify-content: right;
    img{
      margin-top: 5px;
      margin-right: 5px;
      height: 23px;
      object-fit: scale-down;
      cursor: pointer;
    }
  }
  .header{
    margin-top: -10px;
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: left;
    .profile{
      display: flex;
      align-items: center;
      .profileimg{
        width: 30px;
        height: 30px;
        border: 1px solid gray;
        border-radius: 30px;
        margin-right: 5px;
      }
    }
    .hr{
      margin: 0 10px;
      border-left: 2px solid black;
      height: 25px;
    }
  }
  .roothr{
    margin:10px 15px;
    border-top: 2px solid black;
    width: 320px;
  }
  .contents{
    margin: 20px auto 0 auto;
    height: 100px;
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
      width: 23px;
      object-fit: scale-down;
    }
  }
`