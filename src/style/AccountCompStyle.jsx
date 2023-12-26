import styled from 'styled-components'

export const AccountComponent = styled.div`

  .chart{

    .chart1 {
      border: 1px solid ${({theme}) => theme.color.grayBorder};
      padding: 10px;
      margin-top: 20px;
      border-radius: 20px;
    }

    .chart2 {
      border: 1px solid ${({theme}) => theme.color.grayBorder};
      padding: 40px;
      margin-top: 20px;
      border-radius: 20px;
    }

    .chart3 {
      border: 1px solid ${({theme}) => theme.color.grayBorder};
      padding: 10px;
      margin-top: 20px;
      border-radius: 20px;
    }

    .select-box {
      display: flex;
      justify-content: flex-end;
    }
  }



.account .accountshow {
  display: flex;
  align-items: center;
}

.account .img {
  background-color: ${({theme}) => theme.color.lightBg};
  border-radius: 50%;
  overflow: hidden;
  width: 450px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-right: 20px;
}

.account .img img {
  width: 100%;
}



.account .dark-overlay {
  display: none;
}

.account .img:hover>.dark-overlay {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.color.grayBg};
  color: ${({theme}) => theme.color.whiteText};
  cursor: pointer;
}

.m-number .icon,
.mail .icon{
  color: ${({theme}) => theme.color.blackText};
}

@media screen and (max-width:998px) {
  .account .accountshow {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }

  .account .accountshow h4 {
    margin-top: 15px;
  }

  .account .numemailcol {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .account .img {
    width: 250px;
  }


}

`