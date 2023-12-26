import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GoogleOutlined, AppleFilled } from '@ant-design/icons';
import { registerUser } from '../redux/RagisterReducer';
import { useDispatch } from 'react-redux';
import { LoginComponent } from '../style/LoginCompStyle';

const Ragister = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();


    const [data, setData] = useState({
        email: '',
        password: '',
        cpassword: ''
    });

    const [error, setError] = useState({
        email: '',
        password: '',
        cpassword: ''
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

        if (data.password !== data.cpassword) {
            newError.cpassword = 'Password Not Match'
            isValid = false
        } else {
            newError.cpassword = ''
        }

        setError(newError)
        return isValid;
    }

    const RagisterSuccess = (e) => {
        e.preventDefault();

        const isValid = validForm();

        if (isValid) {

            console.log('Ragister:', data);

            dispatch(registerUser(data))

            navigate('/Login');

            alert('Sign up successfully')

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
                                        <h4 className='py-4'>Sign up Create your Account</h4>
                                        <button className='btn btn-light d-block w-100 btn-lg'> <GoogleOutlined style={{ fontSize: '28px', margin: '0 5px 0 0' }} /> Sign up with Google</button>
                                        <button className='btn btn-light d-block w-100 btn-lg mt-3'><AppleFilled style={{ fontSize: '28px', margin: '0 5px 0 0' }} />  Sign up with Apple</button>
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
                                    <form onSubmit={RagisterSuccess} method='POST'>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
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
                                            <label htmlFor="password">Password</label>
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
                                        <div className="form-group">
                                            <label htmlFor="confirmpassword">Confirm Password</label>
                                            <input
                                                type="password"
                                                name="confirmpassword"
                                                id="confirmpassword"
                                                className="form-control"
                                                autoComplete="off"
                                                aria-label="CPassword"
                                                value={data.cpassword}
                                                onChange={(e) => setData({ ...data, cpassword: e.target.value })}
                                            />
                                            <p className='errormsg'>{error.cpassword}</p>
                                        </div>
                                        <div className='form-group mt-4'>
                                            <button type='submit' className='btn btn-primary btn-lg'>Sign Up</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='already_login text-center mt-4'>Already a Member? <Link to="/Login">Sign In</Link></p>
                </div>
            </LoginComponent>
        </div>
    )
}

export default Ragister
