import styled from 'styled-components'

export const NotificationComponent = styled.div`

.notification .notify_list_Item {
    display: flex;
    padding: 25px;
  }
  
  .notification .notify_list .content {
    margin-left: 20px;
  }
  
  .notification .notify_list .content h6 {
    font-weight: 600;
  }
  
  .notification .searchbar_Notification {
    min-width: 500px;
  }

  :where(.css-dev-only-do-not-override-p7e5j5).ant-input-group >.ant-input-affix-wrapper:not(:last-child) .ant-input{
    color: ${({ theme }) => theme.color.blackText};
    background-color: ${({ theme }) => theme.color.whiteBg};
  }
  .ant-input-search :where(.css-dev-only-do-not-override-p7e5j5).ant-input-group .ant-input-affix-wrapper:not(:last-child){
    background-color: ${({ theme }) => theme.color.whiteBg};
  }
  :where(.css-dev-only-do-not-override-p7e5j5).ant-input-group >.ant-input-affix-wrapper:not(:last-child) .ant-input::placeholder{
    color: ${({ theme }) => theme.color.grayText};
  }

  :where(.css-dev-only-do-not-override-p7e5j5).ant-input-search >.ant-input-group >.ant-input-group-addon:last-child .ant-input-search-button:not(.ant-btn-primary) {
    color: ${({ theme }) => theme.color.blackText};
    background-color: ${({ theme }) => theme.color.whiteBg};
}
  
  @media screen and (max-width:998px) {
    .notification .searchbar_Notification {
      min-width: 100%;
    }
  }
  `