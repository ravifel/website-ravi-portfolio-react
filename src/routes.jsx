// App routes: maps URL paths to page components.
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Repositories from './pages/Repositories';
import Testimonials from './pages/Testimonials';
import NotFound from './pages/NotFound';

function RoutesApp() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/repositories" element={<Repositories />} />
            <Route path="/testimonials" element={<Testimonials />} />
            {/* Catch-all route for 404/NotFound */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default RoutesApp;