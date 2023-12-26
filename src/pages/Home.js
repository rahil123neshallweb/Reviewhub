import React, { useState } from 'react'
import { InfoCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { Dropdown, Input, Rate, Space, Tooltip } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import Footer from './section/Footer';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authReducer';
import { HomeComponent } from '../style/HomeCompStyle';

const hotelsData = [
  {
    imgSrc: './img/img01.jpg',
    distance: '3.5 km',
    type: 'Hotel',
    name: 'Cable Car Hotel',
    address: 'Pear 39 street, san francisco, America',
    phoneNumber: '01234567890',
    rating: 5,
    reviews: 1203,
  },
  {
    imgSrc: './img/img01.jpg',
    distance: '3.5 km',
    type: 'Hotel',
    name: 'Beachwalk hotel',
    address: 'Pear 39 street, san francisco, America',
    phoneNumber: '01234567890',
    rating: 3.5,
    reviews: 1203,
  },
  {
    imgSrc: './img/img01.jpg',
    distance: '3.5 km',
    type: 'Hotel',
    name: 'Grand Hotel',
    address: 'Pear 39 street, san francisco, America',
    phoneNumber: '01234567890',
    rating: 3.5,
    reviews: 1203,
  },
];

const Home = () => {

  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  

  const handleLogout = () => {
    dispatch(logout())
  }

  const filteredHotels = hotelsData.filter((hotel) =>
    hotel.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const location = useLocation();

  const items = [
    {
      label: (
        <Link to="/Account" className={`nav-item ${location.pathname === '/Account' ? 'active' : ''}`}>
          <span className="nav-link" aria-current="page">
            Account
          </span>
        </Link>
      ),
      key: '0',
    },
    {
      type: 'divider',
    },
    {
      label: <button className="btn btn-primary" onClick={handleLogout} >Logout</button>,
      key: '1',
    },
  ];



  return (
    <div style={{ paddingBottom: '100px' }}>
      <HomeComponent>
        <div className="home">
          <header>
            <div className="container">
              <div className="row pb-4 pt-1">
                <div className="col-6">
                  <h6>Hi Gracya</h6>
                  <div className="location">
                    <span>Karog bagh, Delhi</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="profile-img">
                    <Dropdown menu={{ items }} trigger={['click']} placement="bottomRight">
                      <span className="nav-link" onClick={(e) => e.preventDefault()} >
                        <Space>
                          <img src="./img/profile.png" alt="" />
                        </Space>
                      </span>
                    </Dropdown>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="searchbar">
                  <Input
                    placeholder="Find Hotel"
                    className='searchbar_input'
                    prefix={<SearchOutlined className="site-form-item-icon" />}
                    suffix={
                      <Tooltip title="Sort your search words">
                        <InfoCircleOutlined

                        />
                      </Tooltip>
                    }
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </header>

          <div className="container">
            <div className="row">
              <div className="col">
                <div className="hotel-group">
                  {filteredHotels.map((hotel, index) => (
                    <div className="item mb-5" key={index}>
                      <div className="img">
                        <img src={hotel.imgSrc} alt="" />
                      </div>
                      <div className="tag">
                        <span>{hotel.distance}</span>
                        <span>{hotel.type}</span>
                      </div>
                      <h4>{hotel.name}</h4>
                      <div className="address">
                        <span>{hotel.address}</span>
                      </div>
                      <div className="m-number py-2">
                        <span>{hotel.phoneNumber}</span>
                      </div>
                      <div className="review">
                        <Rate className='rate_start' disabled allowHalf value={hotel.rating} />
                        <span className='px-2'>{hotel.rating}</span>
                        <span className='me-2 review_total' >({hotel.reviews})</span>
                        <Link to='/Review'>See All Review</Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </HomeComponent>
      <Footer />
    </div>
  )
}

export default Home
