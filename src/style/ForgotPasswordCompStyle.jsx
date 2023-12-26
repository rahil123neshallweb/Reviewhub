import styled from 'styled-components'

export const ForgotPasswordCompo = styled.div`


.Forgot_password {
  background-color: ${({theme}) => theme.color.lightBlueBg2};
  padding: 50px;
  min-height: 100vh;
}

.Forgot_password .login {
  background-color: ${({theme}) => theme.color.whiteBg};
  border-radius: 20px;
  padding: 20px;
  text-align: center;
}

.Forgot_password .continue_width {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.Forgot_password {
  padding-top: 20px;
}

.Forgot_password .form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
}


.Forgot_password .form-group label {
  margin-bottom: 10px;
}

.Forgot_password .form-group input {
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

.errormsg{
  color: ${({theme}) => theme.color.redText};
}

@media screen and (max-width:412px) {
  .Forgot_password {
    padding: 50px 10px;
  }

  .Forgot_password form .form-group input {
    padding: 12px;
  }
}

`