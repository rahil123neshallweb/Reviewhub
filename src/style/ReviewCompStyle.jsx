import styled from 'styled-components'

export const ReviewComponent = styled.div`

.review-box {
  display: flex;
  align-items: center;
  padding: 30px 15px;
}

.total-review-box {
  text-align: center;
  flex: 0 0 50%;
}

.total-review-box span {
  display: block;
  font-size: 48px;
  font-weight: bold;
}

.total-review-box ul {
  display: block;
  margin-bottom: 10px;
}

.total-review-box span {
  display: block;
  font-size: 48px;
  font-weight: bold;
}

.total-review-box ul li svg {
  font-size: 28px;
}

.reivew-star-list {
  flex: 0 0 50%;
}

.reivew-star-list ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.reivew-star-list ul li {
  display: flex;
  align-items: center;
}

.reivew-star-list ul li .anticon-star {
  color: ${({theme}) => theme.color.yellowText};
  margin-right: 5px;
}

.reivew-star-list ul li span {
  color: ${({theme}) => theme.color.blueText};
  font-weight: 600;
}

.reivew-star-list ul li .ant-progress {
  margin-left: 5px;
}

.review-list {
  padding: 0 15px;
  margin-bottom: 20px;
  display: inline-block;
  width: 100%;
}

.review-list ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.review-list ul li {
  margin: 5px;
}

.review-list ul li a {
  display: inline-block;
  padding: 6px 10px;
  background: ${({theme}) => theme.color.lightBg2};
  border-radius: 50px;
  line-height: normal;
  width: 70px;
  text-align: center;
  color: ${({theme}) => theme.color.blackText};
  transition: all 0.5s ease;
}

.review-list ul li a span {
  margin-right: 6px;
}

.review-list ul li a:hover {
  background: ${({theme}) => theme.color.blueBg};
  color: ${({theme}) => theme.color.whiteText};
}

.review-list ul li a.active {
  background: ${({theme}) => theme.color.blueBg};
  color: ${({theme}) => theme.color.whiteText};
}

.comment {
  padding: 0 15px;
}

.comment-box {
  padding: 15px;
  border: 1px solid ${({theme}) => theme.color.grayBorder};
  border-radius: 10px;
  margin-bottom: 10px;
  position: relative;
}

.user-profile-box {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.user-profile-box .profile-img {
  margin-right: 15px;
}

.profile-img img {
  width: 50px;
  border-radius: 50%;
}

.user-profile-box .user-detail .user-name {
  font-size: 17px;
  font-weight: 600;
  color: ${({theme}) => theme.color.blackText};
}

.user-profile-box .user-detail .comment-date {
  color: ${({theme}) => theme.color.grayText};
  font-size: 14px;
}

.user-rating-count {
  position: absolute;
  right: 15px;
  top: 15px;
  color: ${({theme}) => theme.color.yellowText};
  font-weight: 600;
}

.user-rating-count span {
  color: ${({theme}) => theme.color.yellowText};
  margin-right: 2px;
}

.user-comment-content p {
  color: ${({theme}) => theme.color.grayText};
  margin-bottom: 0;
}

.review-post {
  padding: 30px 15px;
}

.review-hotel-img {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
}

.review-hotel-img img {
  width: 250px;
  height: 250px;
  border-radius: 10px;
}

.rview-hotel-name {
  text-align: center;
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 10px;
}

.reivew-hotel-rating-star {
  text-align: center;
  margin-bottom: 30px
}

.review-post-input {
  margin-bottom: 20px;
}

.review-post-input textarea::placeholder {
  font-size: 16px;
  font-weight: normal;
  padding: 10px;
  color: ${({theme}) => theme.color.grayText};
}

.review-post-input textarea {
  border: 1px solid ${({theme}) => theme.color.grayBorder};
  border-radius: 10px;
  color: ${({theme}) => theme.color.blackText};
  background-color: ${({theme}) => theme.color.whiteBg};
}

.anticon-delete svg{
  color: ${({theme}) => theme.color.blackText};
}

.anticon-paper-clip svg{
  color: ${({theme}) => theme.color.blackText};
}

.ant-progress-bg{
  background-color: ${({theme}) => theme.color.blueBg};
}

.ant-progress-inner{
  background-color: ${({theme}) => theme.color.lightBg};
}

.review-submit-btn a {
  background: ${({theme}) => theme.color.blueBg};
  color: ${({theme}) => theme.color.whiteText};
  width: 100%;
  display: block;
  text-align: center;
  padding: 14px 28px;
  border-radius: 10px;
  margin: 0 auto;
}

.ant-upload-text {
  font-size: 20px !important;
  color: ${({theme}) => theme.color.blueText} !important;
}

:where(.css-dev-only-do-not-override-p7e5j5).ant-upload-wrapper .ant-upload-drag {
  background-color: ${({theme}) => theme.color.whiteBg} !important;
  border: 2px dashed ${({theme}) => theme.color.blueBorder} !important;
}

:where(.css-dev-only-do-not-override-p7e5j5).ant-upload-wrapper .ant-upload-list .ant-upload-list-item .ant-upload-list-item-name {

  font-size: 16px;
  margin: 10px 0;
}

`