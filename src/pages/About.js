import React from 'react'
import Header from './section/Header'
import Footer from './section/Footer'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const About = () => {
  return (
    <div style={{ paddingBottom: '100px' }}>
      <Header heading="About" back='/' />
      <AboutComponent>
        <div className="about">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="img py-4">
                  <img src="./img/img3.png" alt="" />
                </div>
                <div className="content">
                  <h4 className='py-2'>Suspendisse at cursus dolor, ac ultrices sapien</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales, urna quis interdum pretium, metus lectus semper ligula, nec pulvinar lacus justo non neque. Suspendisse at cursus dolor, ac ultrices sapien. Curabitur non ultrices tellus. Duis pharetra ultrices massa ac ornare. Vivamus finibus arcu ut enim venenatis, sit amet aliquam justo auctor. Integer auctor dapibus odio, vel elementum ipsum tincidunt ut. Morbi sed justo dignissim, volutpat magna quis, tincidunt quam.</p>
                  <Link to='/'><button className='btn btn-primary btn-lg'>Get Started</button></Link>
                </div>
                <div className="img2 py-5">
                  <img src="./img/img4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="team-group">
                  <div className="team">
                    <div className="img">
                      <img src="./img/img6.png" alt="" />
                    </div>
                    <h5>Jenny Welson</h5>
                  </div>
                  <div className="team">
                    <div className="img">
                      <img src="./img/img6.png" alt="" />
                    </div>
                    <h5>Jenny Welson</h5>
                  </div>
                  <div className="team">
                    <div className="img">
                      <img src="./img/img6.png" alt="" />
                    </div>
                    <h5>Jenny Welson</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AboutComponent>
      <Footer />
    </div>
  )
}


export const AboutComponent = styled.div`
.about .team {
  box-shadow: 0px 0px 5px 1px ${({theme}) => theme.color.lightShadow};
  background-color: #fff;
  margin-bottom: 20px;
}

.about .team .img {
  background-color: ${({theme}) => theme.color.lightBg};
}

.about .team h5 {
  padding: 20px;
  text-align: center;
  background-color: ${({theme}) => theme.color.whiteBg};
}
`

export default About
