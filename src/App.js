import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

const App = () => {
    return (
        <div className="App">
            <h1>User Management Application</h1>
            <Routes>
                <Route path="/" element={<UserList />} />
                <Route path="/user/:id" element={<UserDetail />} />
            </Routes>
        </div>
    );
};

export default App;

