import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false);

    const handleFocus = () => {
        setSuccess(false);
        setError('')
    }

    const handleSubmit = event => {
        event.preventDefault();


        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('registered user', user);
                setSuccess(true);
                form.reset();
            })
            .catch(error => {
                console.error('error ', error);
                setError(error.message);
                form.reset();
            })

    }




    return (
        <div className='w-50 mx-auto'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onFocus={handleFocus} onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="your name" className="input input-bordered ms-3" required />
                            </div>
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
                                <label className="label">
                                    <Link to='/login' className="label-text-alt link link-hover">Already have an account?</Link>
                                </label>
                            </div>
                            {success && <p className='text-success'>User created successfully</p>}

                            <p className='text-danger'><small>{error}</small></p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;