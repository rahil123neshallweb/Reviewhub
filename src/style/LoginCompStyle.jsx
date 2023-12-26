import styled from 'styled-components'

export const LoginComponent = styled.div`

.Login_Comp {
  background-color: ${({theme}) => theme.color.lightBlueBg2};
  padding: 50px;
  min-height: 100vh;
}
 
.Login_Comp .login {
  background-color: ${({theme}) => theme.color.whiteBg};
  border-radius: 20px;
  padding: 20px;
  text-align: center;
}

.Login_Comp .continue_width {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.Login_Comp form {
  padding-top: 20px;
}

.Login_Comp form .form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
}


.Login_Comp form .form-group label {
  margin-bottom: 10px;
}

.Login_Comp form .form-group input {
  display: block;
  width: 100%;
  box-shadow: 0px 2px 12px 0px ${({theme}) => theme.color.lightShadow};
  border: none;
  border-radius: 10px;
  padding: 15px;
  outline: none;
  color: ${({theme}) => theme.color.grayText};
  background-color: ${({theme}) => theme.color.whiteBg};
}

@media screen and (max-width:412px) {
  .Login_Comp {
    padding: 50px 10px;
  }

  .Login_Comp form .form-group input {
    padding: 12px;
  }
}

`