import { createGlobalStyle, styled } from "styled-components";
import IllerstrationPath from "../../assets/404People.png";

export const Background = createGlobalStyle`
#root,
html,
body {
    width: 100%;
    height: 100%;
    background-color: #27462F;
    overflow: hidden;
}
`;

export const ContentArea = styled.div`
  width: 75vw;
  height: 60vh;
  margin: 0 auto;
  margin-top: 10%;
  background-color: white;
  border: 4px lightgray solid;
  border-radius: 6vh;
  text-align: center;
`;

export const ErrorMEssageArea = styled.div`
  text-align: center;
  margin-top: 8vh;
`;

export const Message404 = styled.span`
  color: #27462f;
  font-size: 6.25vw;
  margin-right: 3vh;
`;

export const ErrorMessage = styled.span`
  color: #6e907a;
  font-size: 3vw;
  margin-right: 1.75vh;
`;

export const ErrorPage = styled.span`
  color: #c2c0c0;
  font-size: 3vw;
`;

export const ErrorContent = styled.p`
  color: #6e907a;
  font-size: 1.25vw;
  text-align: center;
  margin-top: 3vh;
`;

export const SubErrorContent = styled.p`
  color: #a6a5a5;
  font-size: 0.9vw;
  text-align: center;
  margin-top: 3vh;
  line-height: 2vh;
`;

export const LastPageButton = styled.button`
  width: 13.66488rem;
  height: 3.43088rem;
  border: 1px solid lightgray;
  border-radius: 0.75vh;
  color: #00250d;
  background-color: #fff;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);

  font-size: 0.875rem;
  margin-top: 6vh;

  &:hover {
    transition: 0.25s;
    background-color: #27462f;
    color: white;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: 1px solid lightgray;
    border-radius: 0.75vh;
  }
`;

export const Illustration = styled.div`
  width: 18vh;
  height: 14vh;
  margin-left: 61vw;
  margin-top: -0.5vh;
  
  background-image: url(${IllerstrationPath});
  background-repeat: no-repeat;
  object-fit: contain;
  background-size: cover;
  border: none;
  outline: none;
`;
