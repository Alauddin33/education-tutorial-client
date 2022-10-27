import React, { useContext } from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';



const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

    const navigate = useNavigate();
    const handleFocus = () => {
        setError('');
        setSuccess(false);
    }


    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
                setSuccess(true);

            })
            .catch(error => {
                console.log('error: ', error);
                setError(error.message);

            })
    }


    const handleGoogleSignin = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log('error', error);
            })
    }



    const handleGithubSignin = () => {
        signInWithGithub()
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log('error', error);
            })
    }


    return (
        <div className='w-50 mx-auto'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onFocus={handleFocus} onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered ms-3" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered mx-3" required />


                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>

                                {success && <p className='text-success'> successfully Logged In</p>}

                                <p className='text-danger'><small>{error}</small></p>
                            </div>
                            <small>Are you new to this site? <Link to='/register' className="label-text-alt link link-hover">Register Now</Link></small>
                        </form>

                        <button onClick={handleGoogleSignin} className="w-50 mx-auto btn btn-outline btn-success">Sign in with Google</button>
                        <button onClick={handleGithubSignin} className="w-50 my-2 mx-auto btn btn-outline btn-success">Sign in with Github</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;