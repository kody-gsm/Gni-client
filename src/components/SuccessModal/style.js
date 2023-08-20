import styled from "styled-components";
import checked from "../../assets/check.png";
export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.1);
`;

export const ModalContainer = styled.div`
  width: 30vw;
  padding: 16px;
  padding-bottom: 40px;
  background: #fff;
  box-shadow: #d9d9d9 0px 0px 10px;
  border-radius: 8px;
`;

export const CheckImg = styled.div`
  background-image: url(${checked});
  background-repeat: no-repeat;
  object-fit: contain;
  background-size: cover;
  border: none;
  outline: none;

  width: 70px;
  height: 70px;

  margin: 10px auto;
`;

export const Title = styled.h2`
  font-size: 20px;
  text-align: center;
  color: #00541d;
`;

export const Content = styled.div`
  line-height: 20px;
  font-size: 11px;
  text-align: center;
  color: #ababab;
`;
