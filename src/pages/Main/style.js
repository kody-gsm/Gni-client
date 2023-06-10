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
  background-color: #27462F;
  font-family: "LotteMartDream";
  .emptyBox{
    height: 1px;
  }
  .contentBox{
    width: calc(100vw - 18px);
    height: 350px;
    background-color: white;
    margin-top: 200px;
    display: flex;
    align-items: center;
    overflow-x: scroll;

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
  background-color: white;
  width: 800px;
  height: 800px;
  border-radius: 800px;
  display: flex;
  justify-items: center;
  justify-content: center;
}
`
