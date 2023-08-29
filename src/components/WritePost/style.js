import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 11;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ModalContainer = styled.div`
  width: 50vw;
  height: 60vh;
  background-color: rgba(39, 70, 47, 0.6);
  border: 4px solid white;
  border-radius: 22px;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 85%;
  margin: 0 auto;
  margin-top: 3.75%;
  border-radius: 7px;
  background-color: white;
`;

export const Head = styled.div`
  padding: 15px;
  justify-content: left;
`;

export const ClosePost = styled.div`
  font-size: 20px;
  cursor: pointer;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImg = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid gray;
  margin: 15px;
  margin-left: 50px;
  border-radius: 30px;
`;

export const Name = styled.div`
  font-size: 35px;
`;

export const ProfileLine = styled.div`
  width: 1.5px;
  height: 35px;
  margin-left: 20px;
  margin-right: 30px;
  background-color: black;
  color: black;
`;

export const TitleInput = styled.input`
  width: 400px;
  height: 40px;
  font-size: 20px;
  border: 0;
  border-radius: 10px;
  outline: none;
  padding-left: 10px;
  fill: #fff;
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.1));
`;

export const HeadLine = styled.div`
  width: 90%;
  height: 1.5px;
  margin: 0 auto;
  background-color: black;
`;

export const TextAreaContainer = styled.div`
  width: 80%;
  height: 50%;
  margin: 0 auto;
  margin-top: 3vh;
`;

export const TextArea = styled.textarea`
  width: 95%;
  height: 95%;
  margin: 0 auto;
  margin-top: 3vh;
  padding: 20px;
  resize: none;
  margin: 0 auto;
  border: none;
  -webkit-border-radius: 20px;
  fill: #fff;
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.1));
`;

export const PostButton = styled.button`
  margin: 0 auto;

  width: 20vh;
  height: 3.5vh;
  margin-top: 5vh;
  background: #fff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 10px;
  font-size: 1.5vh;
  text-align: center;
  line-height: 3vh;
  flex-shrink: 0;
  filter: drop-shadow(0px 5px 20px rgba(112, 144, 176, 0.2));

  &:hover {
    background-color: rgba(39, 70, 47, 0.6);
    color: #fff;
    transition: 0.3s;
  }
`;
