import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { signInWithGoogle, logInWithEmailPassword } = useAuth();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleLoggedIn = e => {
        e.preventDefault();
        logInWithEmailPassword(email, password);
    }

    return (
        <div>
            <div className="container bg-light my-5 p-3">
                <h2 className="text-center">Login Form</h2>

                <form onSubmit={handleLoggedIn}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
                        <input type="email" className="form-control" onBlur={handleEmail} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
                        <input type="password" className="form-control" onBlur={handlePassword} required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
                <br />
                <button onClick={signInWithGoogle} className="btn btn-primary">Sign in with Google</button>
                <br />
                <Link to="/register">New User...?</Link>
            </div>
        </div>
    );
};

export default Login;