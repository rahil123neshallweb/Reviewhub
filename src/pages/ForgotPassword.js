import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { ForgotPasswordCompo } from '../style/ForgotPasswordCompStyle';


const ForgotPassword = () => {


    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isOtpVerified, setIsOtpVerified] = useState(false);
    const [countdown, setCountdown] = useState(20);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        let timer;
        if (isOtpSent && countdown > 0) {
            timer = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
        }

        return () => {
            clearInterval(timer);
        };
    }, [isOtpSent, countdown]);


    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    };

    const validateOtp = (value) => {
        return value.length === 6;
    };

    const validatePassword = (value) => {
        return value.length >= 8;
    };

    const validateConfirmPassword = (value) => {
        return value === newPassword;
    };

    const generateOtp = () => {
        return Math.floor(100000 + Math.random() * 900000);
    };


    const handleSendOtp = () => {
        if (validateEmail(email)) {

            const generatedOtp = generateOtp();
            localStorage.setItem('otp', generatedOtp);
            alert(generatedOtp);

            setIsOtpSent(true);
            setErrors({});

        } else {
            setErrors({ email: 'Invalid email address' });
        };
        setCountdown(20);
    };

    const handleVerifyOtp = () => {

        const storedOtp = localStorage.getItem('otp');

        if (validateOtp(otp) && otp === storedOtp) {
            setIsOtpVerified(true);
            setErrors({});
        } else {
            setErrors({ otp: 'Invalid OTP' });
        }
    };

    const handleChangePassword = () => {
        const passwordValid = validatePassword(newPassword);
        const confirmPasswordValid = validateConfirmPassword(confirmPassword);

        if (passwordValid && confirmPasswordValid) {

            alert('Password changed successfully');
            navigate('/Login');

            localStorage.removeItem('otp');

        } else {
            setErrors({
                newPassword: passwordValid ? '' : 'Password must be at least 8 characters',
                confirmPassword: confirmPasswordValid ? '' : 'Passwords do not match',
            });
        }
    };


    return (
        <div>
            <ForgotPasswordCompo>
                <div className="Forgot_password">
                    <div className="login" style={{ minHeight: '85vh' }}>
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
                                        <h4 className='py-4 pb-0'>Forgot Password</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col">
                                    {!isOtpVerified && (

                                        <>
                                            <div className="form-group">
                                                <label htmlFor="">Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className={`${errors.email ? 'error' : ''} form-control`}
                                                />
                                                {errors.email && <div className="errormsg">{errors.email}</div>}
                                            </div>

                                            <div className="form-group">
                                                <button className='btn btn-primary btn-lg' onClick={handleSendOtp} disabled={isOtpSent && countdown !== 0}>
                                                    {countdown === 0 ? "Resend OTP" :
                                                        isOtpSent ? `Resend OTP in ${countdown}s` : 'Send OTP'}
                                                </button>
                                            </div>

                                            {isOtpSent && (
                                                <div>
                                                    <div className="form-group">
                                                        <label>Enter OTP:</label>
                                                        <input
                                                            type="text"
                                                            value={otp}
                                                            onChange={(e) => setOtp(e.target.value)}
                                                            className={`${errors.otp ? 'error' : ''} form-control`}
                                                        />
                                                        {errors.otp && <div className="errormsg">{errors.otp}</div>}
                                                    </div>
                                                    <div className="form-group">
                                                        <button className='btn btn-primary' onClick={handleVerifyOtp}>Continue</button>
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    )}

                                    {isOtpVerified && (
                                        <div>

                                            <div className="form-group">
                                                <label>New Password:</label>
                                                <input
                                                    type="password"
                                                    value={newPassword}
                                                    onChange={(e) => setNewPassword(e.target.value)}
                                                    className={`${errors.newPassword ? 'error' : ''} form-control`}
                                                />
                                                {errors.newPassword && <div className="errormsg">{errors.newPassword}</div>}
                                            </div>

                                            <div className="form-group">
                                                <label>Confirm Password:</label>
                                                <input
                                                    type="password"
                                                    value={confirmPassword}
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                    className={`${errors.confirmPassword ? 'error' : ''} form-control`}
                                                />
                                                {errors.confirmPassword && (
                                                    <div className="errormsg">{errors.confirmPassword}</div>
                                                )}
                                            </div>

                                            <div className="form-group">
                                                <button className='btn btn-primary' onClick={handleChangePassword}>Change Password</button>
                                            </div>
                                        </div>
                                    )}


                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='already_login text-center mt-4'>Not a Member? <Link to="/Ragister">Create an account</Link></p>
                </div>
            </ForgotPasswordCompo>
        </div>
    )
}

export default ForgotPassword
