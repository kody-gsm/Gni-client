import { styled } from "styled-components";

export const boxcontent = styled.div`
  height: 220px;
  border: 20px solid #27462F99;
  border-radius: 10px;
  margin-left: 30px;
  .header{
    margin-top: 15px;
    margin-left: 10px;
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
      border-left: 1px solid black;
      height: 25px;
    }
  }
  .roothr{
    margin:10px 15px;
    border-top: 1px solid black;
    width: 270px;
  }
  .contents{
    margin: 20px auto 0 auto;
    height: 100px;
    width: 80%;
    box-shadow: 0 0 10px 3px lightgray;
    border-radius: 10px;
    padding: 10px;
  }
  .footer{
    display: flex;
    justify-content: right;
    align-items: center;
    margin-right: 18px;
    img{
      margin: 0 10px;
      margin-top: 3px;
      width: 23px;
      object-fit: scale-down;
    }
  }
`