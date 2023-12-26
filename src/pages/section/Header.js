import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { MainHeader } from '../../style/HeaderStyle'


const Header = ({ heading, back }) => {
    return (
        <div>
            <MainHeader>
                <div className="header">
                    <div className="back-btn">
                        <Link to={back}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </Link>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h4 className='m-0'>{heading}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </MainHeader>
        </div>
    )
}

export default Header

