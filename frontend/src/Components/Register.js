import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Register() {

    const [user, setUser] = useState({
        email: '',
        firstName: '',
        lastName: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/users', user);
            setMessage(`Registration successful: ${response.data.email}`);
        } catch (error) {
            setMessage('Registration failed.');
        }
    }

    return (
        <div className="container my-5 border border-primary rounded p-4" style={{ maxWidth: '600px' }}>
            <h2 className="text-center mb-4">Register</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className="form-control border border-primary rounded p-3"
                    />
                </div>

                <div className="form-group mb-3">
                    <input
                        type="text"
                        name="firstName"
                        value={user.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        required
                        className="form-control border border-primary rounded p-3"
                    />
                </div>

                <div className="form-group mb-3">
                    <input
                        type="text"
                        name="lastName"
                        value={user.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        required
                        className="form-control border border-primary rounded p-3"
                    />
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary rounded">
                        Register
                    </button>
                </div>
            </form>

            {message && <p className="text-center">{message}</p>}

            <div className="text-center">
                <Link to="/Admin" className="btn btn-secondary rounded">
                    Go to Admin List
                </Link>
            </div>
        </div>
    );
}

export default Register;

