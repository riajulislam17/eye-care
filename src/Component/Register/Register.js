import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const { registerWithEmailPassword } = useAuth();
    const [email, setEmail] = useState();
    const [error, setError] = useState();
    const [password, setPassword] = useState();

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleRegistration = e => {
        e.preventDefault();
        if (password.lenth < 6 && password.lenth > 12) {
            setError('password should be 6 to 12 character');
            return;
        }
        else {
            registerWithEmailPassword(email, password);
        }
    }
    return (
        <div>
            <div className="container bg-light my-5 p-3">
                <h2 className="text-center">Registration Form</h2>

                <form onSubmit={handleRegistration}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
                        <input type="email" className="form-control" onBlur={handleEmail} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
                        <input type="password" className="form-control" onBlur={handlePassword} required />
                        <p>{error}</p>
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
                <Link to="/login">Already Register...?</Link>
            </div>
        </div>
    );
};

export default Register;