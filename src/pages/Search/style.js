import { styled } from "styled-components";

export const search = styled.div`
  margin-top: 90px;
  height: 1500px;
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
          width: 500px;
          height: 70px;
          padding-left: 40px;
          font-size: 25px;
          border-radius: 20px 0 0 20px;
          border: 2px solid #27462F;
        }
        .button{
          cursor: pointer;
          background-color: white;
          z-index: 1;
          margin-left: -2px;
          height: 70px;
          width: 72px;
          padding: 1px;
          padding-right: 10px;
          border: 2px solid #27462F;
          border-radius: 0 20px 20px 0;
          margin-right: 100px;
        }
      }
    }
    .searching{
      margin-top: -100px;
      margin-left: -220px;
      img{
        width: 500px;
      }
    }
  }
  .stick{
    margin-top: -120px;
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
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: auto;
  }
  .searchHR{
    border: 1px solid gray;
    margin-top: 350px;
    width: 80vw;
  }
`