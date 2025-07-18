import { useTranslation } from "react-i18next";
import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import { FaArrowLeft } from "react-icons/fa";
import '../styles/pages/NotFound.css';

function NotFound() {
    const { darkMode } = useContext(ThemeContext);
    const { t } = useTranslation();

    return (
        <div className={`not-found-page ${darkMode ? 'bg-dark text-light' : 'bg-custom-light text-dark'}`}>
            <h1 className="not-found-title">404</h1>
            <h2 className="not-found-subtitle">{t('notfound.title')}</h2>
            <p>{t('notfound.message')}</p>
            <CustomButton
                as={Link}
                to="/"
                icon={<FaArrowLeft />}
                text={t('notfound.backHome')}
                className="btn btn-primary mt-4"
            />
        </div>
    );
}
export default NotFound;