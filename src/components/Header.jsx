// Header component: navigation bar with theme toggle, language selection, and main page links.
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { ThemeContext } from '../App';
import { useTranslation } from 'react-i18next';
import { Sun, Moon } from "lucide-react";
import '../styles/components/Header.css';

function Header() {
    // Get dark mode state and theme toggle function from context
    const { darkMode, toggleTheme } = useContext(ThemeContext);
    // Get translation function and i18n instance
    const { t, i18n } = useTranslation();

    // Closes the mobile navbar menu (collapses the navbar)
    const closeMobileMenu = () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarToggler && navbarCollapse?.classList.contains('show')) {
            navbarToggler.click();
        }
    };

    // Handles language change and closes mobile menu
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        closeMobileMenu();
    };

    return (
        <Navbar
            id="navbar"
            bg={darkMode ? 'dark' : undefined}
            variant={darkMode ? 'dark' : 'light'}
            expand="lg"
            sticky="top"
            className={!darkMode ? 'navbar-custom-light' : ''}
        >
            <Container>
                {/* Brand logo/name */}
                <Navbar.Brand as={Link} to="/" id="navbar-brand">{t('profile_name')}</Navbar.Brand>

                {/* Hamburger menu toggle for mobile */}
                <Navbar.Toggle aria-controls="main-navbar-nav" id="navbar-toggle" />

                <Navbar.Collapse id="main-navbar-nav">
                    <Nav className="ms-auto align-items-center gap-3" id="navbar-links">
                        {/* Home navigation link: always go to the top section of Home */}
                        <Nav.Link as={Link} to="/#top" onClick={closeMobileMenu} id="link-home">
                            {t('home')}
                        </Nav.Link>

                        {/* Contact: routes to Home with #contact and triggers smooth scroll there */}
                        <Nav.Link
                            as={Link}
                            to="/#contact"
                            onClick={closeMobileMenu}
                            id="link-contact"
                        >
                            {t('contact')}
                        </Nav.Link>

                        {/* Repositories page link */}
                        <Nav.Link as={Link} to="/repositories" onClick={closeMobileMenu} id="link-repositories">
                            {t('repositories')}
                        </Nav.Link>

                        {/* Testimonials page link */}
                        <Nav.Link as={Link} to="/testimonials" onClick={closeMobileMenu} id="link-testimonials">
                            {t('testimonials')}
                        </Nav.Link>

                        {/* Theme toggle button */}
                        <Button
                            id="toggle-theme-btn"
                            variant={darkMode ? 'outline-light' : 'outline-dark'}
                            onClick={() => {
                                toggleTheme();
                                closeMobileMenu();
                            }}
                            size="sm"
                            className="d-flex align-items-center gap-2"
                        >
                            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
                            {darkMode ? t('light_mode') : t('dark_mode')}
                        </Button>

                        {/* Language select dropdown */}
                        <select
                            id="language-select"
                            value={i18n.language}
                            onChange={e => changeLanguage(e.target.value)}
                            className="header-lang-select"
                            aria-label={t('language')}
                        >
                            <option value="en" id="lang-en">English</option>
                            <option value="ga" id="lang-ga">Gaeilge - Irish</option>
                            <option value="es" id="lang-es">Español - Spanish</option>
                            <option value="pt" id="lang-pt">Português - Portuguese</option>
                            <option value="fr" id="lang-fr">Français - French</option>
                            <option value="zh" id="lang-zh">中文 - Mandarin</option>
                            <option value="ja" id="lang-ja">日本語 - Japanese</option>
                        </select>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
