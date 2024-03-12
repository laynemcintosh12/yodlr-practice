import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Admin() {

    // State to hold list of users
    const [users, setUsers] = useState([]);

    // Fetch users on component mount
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('/users');
            setUsers(response.data);
        };
        fetchUsers();
    }, []);

    // Delete user function
    const deleteUser = async (userId) => {
        await axios.delete(`/users/${userId}`);
        setUsers(users.filter(user => user.id !== userId));
    };

    return (
        <div className="container mt-5 border border-dark p-4" style={{ maxWidth: '600px' }}>
            <h2 className="text-center mb-4">Admin List</h2>
            <div className="list-group">
                {users.map(user => (
                    <div key={user.id} className="list-group-item d-flex justify-content-between align-items-center list-group-item-primary">
                        {user.email} - {user.firstName} {user.lastName}
                        <button className="btn btn-danger btn-sm" onClick={() => deleteUser(user.id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
            <div className="text-center mt-4">
                <Link to="/" className="btn btn-success btn-lg">
                    Go to Register
                </Link>
            </div>

        </div>
    );
}

export default Admin;

