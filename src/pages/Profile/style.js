import { styled } from "styled-components";

export const Profile = styled.div`
  margin-top: 90px;
  background-color: #27462F;
  height: calc(100vh - 90px);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const innerbox = styled.div`
  background-color: white;
  width: 890px;
  height: 390px;
  outline: 4px solid #d9d9d9;
  border-radius: 30px;
  display: flex;
  align-items: center;
`

export const Infos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 300px;
  border-right: 1px solid black;
`
export const Img = styled.div`
  margin: auto;
  margin-bottom: 35px;
  width: 120px;
  height: 120px;
  border-radius: 1000px;
  box-shadow: 0 0 3px 3px #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    margin-top: 25px;
    width: 55px;
    object-fit: scale-down;
  }
`

export const NameDiv = styled.div`
  width: 50px;
  box-shadow: 0 0 3px 3px #e9e9e9;
  padding: 5px 20px;
  border-radius: 5px;
  margin: auto;
`

export const buttons = styled.div`
  margin-left: 3vw;
  width: 100px;
`

const Styledbtn = styled.button`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 3px 3px #e9e9e9;
  width: 240px;
  height: 40px;
  border: 2px solid #d9d9d9;
  cursor: pointer;
  & + &{
    margin-top: 30px;
  }
`

export function Styledbutton({ children, ...rest }) {
  return <Styledbtn {...rest}>{children}</Styledbtn>
}

export const checkingPeople = styled.div`
  position: absolute;
  top: calc(50vh + 100px);
  right: calc(50vw - 420px);
  img{
    width: 150px;
    object-fit: scale-down;
  }
`