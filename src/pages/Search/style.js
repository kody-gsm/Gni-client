import { styled } from "styled-components";

export const search = styled.div`
  margin-top: 90px;
  height: 1100px;
  background-color: #27462F;
  .emptybox{
    height: 1px;
  }
  .headers{
    margin: auto;
    margin-top: 130px;
    padding-left: 100px;
    width: 82%;
    height: 320px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    border: 4px solid #d9d9d9;
    .block{
      margin-top: -20px;
      span{
        margin-left: 20px;
        font-size: 12px;
        color: #27462F;
      }
      .flex{
        display: flex;
        margin-top: 10px;
        input {
          background-color: white;
          z-index: 1;
          width: 380px;
          height: 50px;
          padding-left: 30px;
          font-size: 15px;
          border-radius: 15px 0 0 15px;
          border: 1px solid #27462F;
          &::placeholder{
            color: lightgray;
          }
        }
        .button{
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: white;
          z-index: 1;
          margin-left: -2px;
          height: 50px;
          width: 50px;
          padding: 1px;
          padding-right: 10px;
          border: 1px solid #27462F;
          border-radius: 0 15px 15px 0;
          margin-right: 100px;
          img{
            width: 50px;
            object-fit: scale-down;
          }
        }
      }
    }
    .searching{
      margin-top: -30px;
      margin-left: -180px;
      img{
        width: 250px;
      }
    }
  }
  .stick{
    margin-top: -110px;
    margin-left: 840px;
    margin-bottom: -340px;
    img{
      width: 140px;
      object-fit:scale-down;
    }
  }
  .contentses{
    width: 90vw;
    height: 300px;
    margin: auto;
    margin-top: 170px;
    .span{
      margin-left: 40px;
      color: #ABABAB;
      font-size: 14px;
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
    margin-top: 250px;
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