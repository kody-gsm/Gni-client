import { styled } from "styled-components";

export const main = styled.div`
  margin-top: 80px;
  width: calc(100vw - 18px);
  height: 1000px;
  background-color: #27462F;
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
  }
}
`
