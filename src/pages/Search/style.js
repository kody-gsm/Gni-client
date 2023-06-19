import { styled } from "styled-components";

export const search = styled.div`
  margin-top: 90px;
  height: 1300px;
  background-color: #27462F;
  .emptybox{
    height: 1px;
  }
  .headers{
    margin-top: 130px;
    padding-left: 100px;
    height: 440px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    .block{
      margin-top: -110px;
      span{
        margin-left: 20px;
        color: #27462F;
      }
      .flex{
        display: flex;
        margin-top: 10px;
        input {
          background-color: white;
          z-index: 1;
          width: 480px;
          height: 60px;
          padding-left: 30px;
          font-size: 21px;
          border-radius: 20px 0 0 20px;
          border: 2px solid #27462F;
          &::placeholder{
            color: lightgray;
          }
        }
        .button{
          cursor: pointer;
          background-color: white;
          z-index: 1;
          margin-left: -2px;
          height: 60px;
          width: 62px;
          padding: 1px;
          padding-right: 10px;
          border: 2px solid #27462F;
          border-radius: 0 20px 20px 0;
          margin-right: 100px;
          img{
            width: 70px;
            object-fit: scale-down;
          }
        }
      }
    }
    .searching{
      margin-top: -100px;
      margin-left: -220px;
      img{
        width: 400px;
      }
    }
  }
  .stick{
    margin-top: -150px;
    margin-left: 750px;
    margin-bottom: -400px;
    img{
      width: 280px;
      object-fit:scale-down;
    }
  }
  .contentses{
    width: 90vw;
    height: 300px;
    margin: auto;
    margin: auto;
    .span{
      margin-left: 40px;
      color: #ABABAB;
    }
    .flex{
      display: flex;
      margin-top: -20px;
      margin-bottom: 30px;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
  .searchHR{
    border: 1px solid gray;
    margin-top: 400px;
    width: 80vw;
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
`