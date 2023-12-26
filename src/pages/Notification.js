import React from 'react';
import { Space } from 'antd';
import Search from 'antd/es/input/Search';
import Header from './section/Header';
import Footer from './section/Footer';
import { NotificationComponent } from '../style/NotificationCompStyle';

const notificationsData = [
    {
        id: 1,
        category: 'Today',
        notifications: [
            {
                id: 1,
                image: './img/profile-img.png',
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, vero!',
                timestamp: 'Today, 09:20 AM',
            },
            {
                id: 2,
                image: './img/profile-img.png',
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, vero!',
                timestamp: 'Today, 09:20 AM',
            },
            {
                id: 3,
                image: './img/profile-img.png',
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, vero!',
                timestamp: 'Today, 09:20 AM',
            },
        ],
    },
    {
        id: 2,
        category: 'Yesterday',
        notifications: [
            {
                id: 1,
                image: './img/profile-img.png',
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, vero!',
                timestamp: 'Yesterday, 09:20 AM',
            },
            {
                id: 2,
                image: './img/profile-img.png',
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, vero!',
                timestamp: 'Yesterday, 09:20 AM',
            },
            {
                id: 3,
                image: './img/profile-img.png',
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, vero!',
                timestamp: 'Yesterday, 09:20 AM',
            },

        ],
    },
    {
        id: 3,
        category: 'This Week',
        notifications: [
            {
                id: 1,
                image: './img/profile-img.png',
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, vero!',
                timestamp: '15/01/2023, 09:20 AM',
            },
            {
                id: 2,
                image: './img/profile-img.png',
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, vero!',
                timestamp: '15/01/2023, 09:20 AM',
            },
            {
                id: 3,
                image: './img/profile-img.png',
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, vero!',
                timestamp: '15/01/2023, 09:20 AM',
            },
            {
                id: 4,
                image: './img/profile-img.png',
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, vero!',
                timestamp: '15/01/2023, 09:20 AM',
            },

        ],
    },
];

const Notification = () => {

    const onSearch = (value, _e, info) => {
        console.log(info?.source, value);
    };

    return (
        <div style={{ paddingBottom: '100px' }}>
            <Header heading="Notification" back='/' />
            <NotificationComponent>
                <div className="notification">
                    <div className="container py-4">
                        <div className="row section1">
                            <div className="col-12 searchbar">
                                <Space direction="vertical" className='w-100'>
                                    <Search placeholder="search text" allowClear onSearch={onSearch} className='searchbar_Notification w-100' />
                                </Space>
                            </div>
                        </div>
                    </div>

                    <div className="notify">
                        <div className="container">
                            <div className="row">
                                {notificationsData.map((category) => (
                                    <div key={category.id} className="col-12 ">
                                        <h5>{category.category}</h5>
                                        <div className="notify_list">
                                            {category.notifications.map((notification) => (
                                                <div key={notification.id} className="notify_list_Item">
                                                    <div className="img">
                                                        <img src={notification.image} alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h6>{notification.content}</h6>
                                                        <span>{notification.timestamp}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </NotificationComponent>
            <Footer />
        </div>
    )
}

export default Notification
