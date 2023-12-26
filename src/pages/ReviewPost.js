import React, { useState } from 'react'
import Header from './section/Header'
import Footer from './section/Footer'
import { Link } from 'react-router-dom'
import { Rate, Input, message, Upload } from 'antd';
import { CameraOutlined } from '@ant-design/icons';
import { ReviewComponent } from '../style/ReviewCompStyle';
const { TextArea } = Input;
const { Dragger } = Upload;

const ReviewPost = () => {

  const [uploadedFiles, setUploadedFiles] = useState([]);

  console.log(uploadedFiles)

  const props = {
    name: 'file',
    multiple: true,
    customRequest: ({ file, onSuccess, onError }) => {
      try {
        const reader = new FileReader();

        reader.onload = (event) => {
          const fileData = event.target.result;

          setUploadedFiles((prevFiles) => [
            ...prevFiles,
            { name: file.name, data: fileData },
          ]);

          onSuccess();
          message.success(`${file.name} file uploaded successfully.`);
        };

        reader.onerror = (error) => {
          onError();
          message.error(`${file.name} file upload failed.`);
          console.error(error);
        };

        reader.readAsDataURL(file);
      } catch (error) {
        onError();
        message.error(`${file.name} file upload failed.`);
        console.error(error);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  return (
    <div style={{ paddingBottom: '100px' }}>
      <Header heading="Review" back='/Review' />

      <ReviewComponent>
        <div className='review-post'>
          <h5>Write a review for</h5>
          <div className='review-hotel-img'>
            <img src="../img/img01.jpg" alt="" />
          </div>
          <h4 className='rview-hotel-name'>Palm Springs resort</h4>
          <div className='reivew-hotel-rating-star'><Rate allowHalf /></div>
          <div className='review-post-input'>
            <TextArea rows={6} placeholder="What did you like or dislike?" maxLength={6} />
          </div>


          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <CameraOutlined />
            </p>
            <p className="ant-upload-text">Add a Photos or Videos</p>

          </Dragger>


          <div className='review-submit-btn mt-4'>
            <Link>Submit</Link>
          </div>
        </div>
      </ReviewComponent>

      <Footer />
    </div>
  )
}

export default ReviewPost
