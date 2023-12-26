import styled from 'styled-components'

export const HomeComponent = styled.div`

h6{
    color: ${({ theme }) => theme.color.whiteText};
}

.home header {
  background-color: ${({ theme }) => theme.color.blackBg};
  color: ${({ theme }) => theme.color.whiteText};
  padding: 20px 0 0;
  margin-bottom: 40px;
}

.home .profile-img {
  width: 60px;
  border-radius: 50px;
  margin-left: auto;
}

.home .profile-img img {
  border-radius: 50px;
}

.home .searchbar {
  margin-bottom: -20px;
}

.searchbar_input{
  background-color: ${({ theme }) => theme.color.whiteBg};
  color: ${({ theme }) => theme.color.blackText};
}

.home .searchbar input {
  padding: 5px;
  background-color: ${({ theme }) => theme.color.whiteBg};
  color: ${({ theme }) => theme.color.blackText};
}

.home .searchbar input::placeholder {
  color: ${({ theme }) => theme.color.grayText};
}

.searchbar {
  margin-top: 20px;
}

.searchbar .ant-input-affix-wrapper {
  height: 54px;
  border-radius: 50px;
  border: none;
  box-shadow: 0 6px 20px ${({ theme }) => theme.color.lightShadow};
}

.searchbar .ant-input-prefix svg {
  color: ${({ theme }) => theme.color.blueText};
  font-size: 18px;
}

.hotel-group .item {
  margin-bottom: 30px;
}

.hotel-group .img {
  margin-bottom: 15px;
}

.hotel-group .img img {
  border-radius: 10px;
}

.tag {
  margin-bottom: 10px;
}

.tag span {
  background: ${({ theme }) => theme.color.lightBg};
  color: ${({ theme }) => theme.color.grayText};
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  line-height: 14px;
  margin-right: 10px;
}

.hotel-group .item h4 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.color.blackText};
}

.hotel-group .address,
.hotel-group .m-number {
  color: ${({ theme }) => theme.color.grayText};
  margin-bottom: 10px;
}

.hotel-group .review li {
  font-size: 14px;
  margin-right: 2px !important;
}

.hotel-group .review .rating {
  color: ${({ theme }) => theme.color.blueText};
  font-weight: 500;
  margin-right: 5px;
}


.hotel-group .review .review_total{
  color: ${({ theme }) => theme.color.grayText};
}

.hotel-group .review a {
  color: ${({ theme }) => theme.color.blueText};
  margin-left: 10px;
  text-decoration: underline;
}


`