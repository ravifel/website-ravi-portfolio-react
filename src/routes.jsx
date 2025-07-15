import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Repositories from './pages/Repositories';
import Testimonials from './pages/Testimonials';

function RoutesApp() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/repositories" element={<Repositories />} />
            <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
    );
}

export default RoutesApp;