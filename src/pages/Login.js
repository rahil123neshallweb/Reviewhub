import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GoogleOutlined, AppleFilled } from '@ant-design/icons';
import { login } from '../redux/authReducer';
import { useDispatch } from 'react-redux';
import { LoginComponent } from '../style/LoginCompStyle';

const Login = () => {

    const dispatch = useDispatch();


    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState({
        email: '',
        password: ''
    });

    const validForm = () => {

        let isValid = true;
        const newError = { ...error };

        if (data.email.trim() === '') {
            newError.email = 'required'
            isValid = false
        } else {
            newError.email = ''
        }

        if (data.password.trim() === '') {
            newError.password = 'Required'
            isValid = false
        } else if (data.password.length < 8) {
            newError.password = 'Minimum 8 Charactor'
            isValid = false
        } else {
            newError.password = ''
        }

        setError(newError)
        return isValid;
    }

    const loginSuccess = (e) => {
        e.preventDefault();

        const isValid = validForm();

        if (isValid) {

            console.log('Login:', data);

            dispatch(login())


        } else {

            alert('Enter Your Details')

        }
    }

    return (
        <div>
            <LoginComponent>
                <div className="Login_Comp">
                    <div className="login">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="logo mt-2">
                                        <img src="./img/logo.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="signinbtn">
                                        <h4 className='py-4'>Sign in Access your Account</h4>
                                        <button className='btn btn-light d-block w-100 btn-lg'> <GoogleOutlined style={{ fontSize: '28px', margin: '0 5px 0 0' }} /> Sign in with Google</button>
                                        <button className='btn btn-light d-block w-100 btn-lg mt-3'><AppleFilled style={{ fontSize: '28px', margin: '0 5px 0 0' }} />  Sign in with Apple</button>
                                        <div className='continue_width'>
                                            <hr className='w-25' />
                                            <p className='m-0'>Or Continue with</p>
                                            <hr className='w-25' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <form onSubmit={loginSuccess} method="POST">
                                        <div className="form-group">
                                            <label htmlFor="">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="form-control"
                                                aria-label="Email Address"
                                                value={data.email}
                                                onChange={(e) => setData({ ...data, email: e.target.value })}
                                            />
                                            <p className='errormsg'>{error.email}</p>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="">Password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                className="form-control"
                                                autoComplete="off"
                                                aria-label="Password"
                                                value={data.password}
                                                onChange={(e) => setData({ ...data, password: e.target.value })}
                                            />
                                            <p className='errormsg'>{error.password}</p>
                                        </div>
                                        <p className='my-4 text-end'><Link to='/ForgotPassword'>Forgot Password?</Link></p>
                                        <div className='form-group'>
                                            <button type='submit' className='btn btn-primary btn-lg'>Sign In</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='already_login text-center mt-4'>Not a Member? <Link to="/Ragister">Create an account</Link></p>
                </div>
            </LoginComponent>
        </div>
    )
}

export default Login
