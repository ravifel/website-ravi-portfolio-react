// NotFound component: displays a 404 page with a back-to-home button.
import { useTranslation } from "react-i18next";
import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import { FaArrowLeft } from "react-icons/fa";
import '../styles/pages/NotFound.css';

function NotFound() {
    // Get darkMode value from ThemeContext
    const { darkMode } = useContext(ThemeContext);
    // Get translation function from i18n
    const { t } = useTranslation();

    return (
        // Main wrapper with theme-based background and text color
        <div
            className={`not-found-page ${darkMode ? 'bg-dark text-light' : 'bg-custom-light text-dark'}`}
            id="page-not-found"
        >
            <h1 className="not-found-title" id="not-found-title">404</h1>
            <h2 className="not-found-subtitle" id="not-found-subtitle">{t('notfound.title')}</h2>
            <p id="not-found-message">{t('notfound.message')}</p>
            {/* Button to return to the home page */}
            <CustomButton
                as={Link}
                to="/"
                icon={<FaArrowLeft />}
                text={t('notfound.backHome')}
                className="btn btn-primary mt-4"
                id="btn-back-home"
            />
        </div>
    );
}
export default NotFound;