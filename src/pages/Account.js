import React, { useState } from 'react'
import Header from './section/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import Chart2 from './section/Chart2'
import Chart3 from './section/Chart3'
import Footer from './section/Footer'
import { AccountComponent } from '../style/AccountCompStyle'

const Account = () => {

    const [profileImage, setProfileImage] = useState('./img/profile.jpg');

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }

    };

    return (
        <div style={{ paddingBottom: '100px' }} >
            <Header heading="Account" back='/' />

            <AccountComponent>
                <div className="account py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col accountshow">
                                <div className="img" style={{ position: 'relative' }}>
                                    <img src={profileImage} alt="" />

                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            opacity: 0,
                                            cursor: 'pointer',
                                            zIndex: '10'
                                        }}
                                    />
                                    <div className="dark-overlay">Change Photo</div>
                                </div>
                                <div className="contetn">
                                    <h4>Quality IN Hotel</h4>
                                    <p>fficiis quod aperiam, dolorem, sunt rem iste doloremque, esse voluptas obcaecati ducimus placeat ullam.</p>
                                    <div className="numemailcol">
                                        <div className="m-number">
                                            <FontAwesomeIcon className='icon' icon={faPhone} />
                                            <span className='ms-3'>+91 123 4567 890</span>
                                        </div>
                                        <div className="mail">
                                            <FontAwesomeIcon className='icon' icon={faEnvelope} />
                                            <span className='ms-3'>teshotel@test.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="chart">
                        <div className="container py-5">
                            <div className="col">

                                <div className="chart2">
                                    <h3 className='text-center'>OverAll</h3>
                                    <Chart2 />
                                </div>
                                <div className="chart3">
                                    <Chart3 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AccountComponent>

            <Footer />

        </div>
    )
}

export default Account
