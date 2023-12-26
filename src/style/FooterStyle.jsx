import styled from 'styled-components'

export const MainFooter = styled.footer`

.footer {
  background-color: ${({theme}) => theme.color.whiteBg};
  border-radius: 40px 40px 0 0;
  box-shadow: 0px 2px 12px 5px ${({theme}) => theme.color.lightShadow};
  padding: 15px 0;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  max-width: 520px;
  right: 0;
  margin: auto;
}

.footer .menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;

}

.footer .menu img {
  width: 30px;
}

.footer .menu svg {
  width: 30px;
  fill: ${({theme}) => theme.color.grayText};
}

.footer .menu span {
  margin-top: 10px;
  color: ${({theme}) => theme.color.grayText};
}


`