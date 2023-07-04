import { styled } from "styled-components";

export const Trophy = styled.div`
  position: absolute;
  margin-left: -280px;
  margin-top: -150px;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    margin-top: -45px;
    width: 70px;
    object-fit: scale-down;
  }
  p{
    position: absolute;
    text-align: center;
    margin-top: -60px;
    color: white;
    font-size: 10px;
  }
`