import React from 'react';
import { Route, Routes } from 'react-router-dom'
import About from '../../pages/About';
import Error from '../../pages/Error';
import Home from '../../pages/Home';
import Users from '../../pages/Users';

const AppRouter = () => {
    
    return (
        <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/users' element={<Users />} />
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Error />} />
        </Routes>
    );
};

export default AppRouter;