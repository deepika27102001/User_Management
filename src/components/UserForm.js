import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ onUserCreated }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        username: 'USER-' + Math.random().toString(36).substring(2, 5),
        address: { street: '', city: '' },
        company: { name: '' },
        website: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'street' || name === 'city') {
            setFormData({
                ...formData,
                address: { ...formData.address, [name]: value },
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/users', formData);
            onUserCreated(response.data);
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Name"
            />
            <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
            />
            <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone"
            />
            <input
                name="street"
                value={formData.address.street}
                onChange={handleChange}
                required
                placeholder="Street"
            />
            <input
                name="city"
                value={formData.address.city}
                onChange={handleChange}
                required
                placeholder="City"
            />
            <button type="submit">Create User</button>
        </form>
    );
};

export default UserForm;
