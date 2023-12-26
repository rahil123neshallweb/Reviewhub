import React, { useState } from 'react'
import Header from './section/Header'
import Footer from './section/Footer'
import { Link } from 'react-router-dom'
import { Progress, Rate } from 'antd';
import { StarFilled } from '@ant-design/icons';
import {ReviewComponent} from '../style/ReviewCompStyle'

const Review = () => {

    const [selectedRating, setSelectedRating] = useState('All');

    const reviewData = [
        { stars: 5, percent: 70 },
        { stars: 4, percent: 20 },
        { stars: 3, percent: 4 },
        { stars: 2, percent: 1 },
        { stars: 1, percent: 5 },
    ];

    const commentData = [
        {
            userName: 'Jenny Wilson',
            date: 'Nov 10, 2023',
            stars: 5,
            content: 'Nunc rhoncus quis diam eget scelerisque. Nunc dui augue, lobortis id bibendum.',
        },
        {
            userName: 'Jenny Wilson',
            date: 'Nov 10, 2023',
            stars: 4,
            content: 'Nunc rhoncus quis diam eget scelerisque. Nunc dui augue, lobortis id bibendum.',
        },
        {
            userName: 'Jenny Wilson',
            date: 'Nov 10, 2023',
            stars: 3,
            content: 'Nunc rhoncus quis diam eget scelerisque. Nunc dui augue, lobortis id bibendum.',
        },
        {
            userName: 'Jenny Wilson',
            date: 'Nov 10, 2023',
            stars: 2,
            content: 'Nunc rhoncus quis diam eget scelerisque. Nunc dui augue, lobortis id bibendum.',
        },
        {
            userName: 'Jenny Wilson',
            date: 'Nov 10, 2023',
            stars: 1,
            content: 'Nunc rhoncus quis diam eget scelerisque. Nunc dui augue, lobortis id bibendum.',
        },
        {
            userName: 'Jenny Wilson',
            date: 'Nov 10, 2023',
            stars: 5,
            content: 'Nunc rhoncus quis diam eget scelerisque. Nunc dui augue, lobortis id bibendum.',
        },
        {
            userName: 'Jenny Wilson',
            date: 'Nov 10, 2023',
            stars: 3,
            content: 'Nunc rhoncus quis diam eget scelerisque. Nunc dui augue, lobortis id bibendum.',
        },
    ];

    const handleRatingClick = (rating) => {
        setSelectedRating(rating);
    };

    const filteredComments = selectedRating === 'All'
        ? commentData
        : commentData.filter(comment => comment.stars === selectedRating);


    return (
        <div style={{ paddingBottom: '100px' }}>
            <Header heading="Review" back='/' />
            <ReviewComponent>
                <div className="review-box">
                    <div className="total-review-box">
                        <span>4.5</span>
                        <Rate disabled allowHalf value={4.5} />
                        <label className="total-review">4,520 Reviews</label>
                        <br></br>
                        <Link to='/Reviewpost'>Post Review</Link>
                    </div>
                    <div className="reivew-star-list">
                        <ul>
                            {reviewData.map((item, index) => (
                                <li key={index}>
                                    <StarFilled />
                                    <span>{item.stars}</span>
                                    <Progress percent={item.percent} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


                <div className='review-list'>
                    <ul>
                        <li onClick={() => handleRatingClick('All')} ><Link className={selectedRating === 'All' ? 'active' : ''} ><StarFilled />All</Link></li>
                        {reviewData.map((item, index) => (
                            <li key={index} onClick={() => handleRatingClick(item.stars)}>
                                <Link className={selectedRating === item.stars ? 'active' : ''} ><StarFilled />{item.stars}</Link>
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="comment">
                    {filteredComments.map((comment, index) => (
                        <div key={index} className="comment-box">
                            <div className="comment-topbar">
                                <div className="user-profile-box">
                                    <div className="profile-img">
                                        <img src="./img/profile.png" alt="" />
                                    </div>
                                    <div className="user-detail">
                                        <div className="user-name">{comment.userName}</div>
                                        <span className="comment-date">{comment.date}</span>
                                    </div>
                                </div>
                                <div className="user-rating-count">
                                    <StarFilled />
                                    {comment.stars}
                                </div>
                                <div className="user-comment-content">
                                    <p>{comment.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </ReviewComponent>

            <Footer />
        </div>
    )
}

export default Review
