import { useTranslation } from "react-i18next";
import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import { FaArrowLeft } from "react-icons/fa";

function NotFound() {
    const { darkMode } = useContext(ThemeContext);
    const { t } = useTranslation();

    return (
        <div
            className={darkMode ? 'bg-dark text-light min-vh-100' : 'bg-custom-light text-dark min-vh-100'}
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
            }}
        >
            <h1 style={{ fontSize: 72, margin: 0 }}>404</h1>
            <h2 style={{ margin: "20px 0 10px" }}>{t('notfound.title')}</h2>
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