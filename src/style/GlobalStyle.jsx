import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  background-color: ${({theme}) => theme.color.lightBlueBg};
  font-size: 16px;
  user-select: none;

}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.App{
  max-width: 520px;
  margin: auto;
  background-color: ${({theme}) => theme.color.whiteBg};
  position: relative;
  min-height: 100vh;
}

button{
  font-size: 16px !important;
}

.btn-primary{
  background-color: ${({theme}) => theme.color.blueBg};
  border-color: ${({theme}) => theme.color.blueBorder};
  color: ${({theme}) => theme.color.whiteText};
}

.btn-primary:hover{
  background-color: ${({theme}) => theme.color.whiteBg};
  border-color: ${({theme}) => theme.color.blueBorder};
  color: ${({theme}) => theme.color.blueText};
}

.btn-primary:focus{
  background-color: ${({theme}) => theme.color.whiteBg};
  border-color: ${({theme}) => theme.color.blueBorder};
  color: ${({theme}) => theme.color.blueText};
}

.btn-light{
  background-color: ${({theme}) => theme.color.lightBg};
  color: ${({theme}) => theme.color.blackText};
  border-color: ${({theme}) => theme.color.grayBorder};
}

.btn-light:hover{
  background-color: ${({theme}) => theme.color.blueBg};
  color: ${({theme}) => theme.color.whiteText};
  border-color: ${({theme}) => theme.color.grayBorder};
}

a{
  text-decoration: none;
  color: ${({theme}) => theme.color.blueText};
}

img{
  width: 100%;
}

h1, h2, h3, h4, h5, h6{
  color: ${({theme}) => theme.color.blackText};
}

p, span, label{
  color: ${({theme}) => theme.color.grayText};
}



:where(.css-dev-only-do-not-override-p7e5j5).ant-dropdown .ant-dropdown-menu,
:where(.css-dev-only-do-not-override-p7e5j5).ant-dropdown-menu-submenu .ant-dropdown-menu {
  background-color: ${({theme}) => theme.color.whiteBg} !important;
  box-shadow: 0px 2px 12px 5px ${({theme}) => theme.color.lightShadow} !important;
}

:where(.css-dev-only-do-not-override-p7e5j5).ant-rate .ant-rate-star-half .ant-rate-star-first, :where(.css-dev-only-do-not-override-p7e5j5).ant-rate .ant-rate-star-full .ant-rate-star-second{
  color: ${({theme}) => theme.color.yellowText};
}

:where(.css-dev-only-do-not-override-p7e5j5).ant-rate .ant-rate-star-first, :where(.css-dev-only-do-not-override-p7e5j5).ant-rate .ant-rate-star-second{
  color: ${({theme}) => theme.color.grayText};
}

.ant-select-selector{
    background-color: ${({theme}) => theme.color.whiteBg} !important;
    color: ${({theme}) => theme.color.blackText} !important;
}


`