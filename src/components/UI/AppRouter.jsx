import React from 'react';
import { Route, Routes } from 'react-router-dom'
import About from '../../pages/Commands';
import Error from '../../pages/Error';
import Home from '../../pages/Home';
import Categories from '../../pages/Categories';

const AppRouter = () => {
    
    return (
        <Routes>
            <Route path='/commands' element={<About />} />
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Error />} />
            <Route path='/category' element={<Categories />}/>
        </Routes>
    );
};

export default AppRouter;