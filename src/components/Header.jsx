import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { ThemeContext } from '../App';
import { useTranslation } from 'react-i18next';

function Header() {
    const { darkMode, toggleTheme } = useContext(ThemeContext);
    const { t, i18n } = useTranslation();

    const closeMobileMenu = () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarToggler && navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        closeMobileMenu();
    };

    return (
        <Navbar
            bg={darkMode ? 'dark' : undefined}
            variant={darkMode ? 'dark' : 'light'}
            expand="lg"
            sticky="top"
            className={!darkMode ? 'navbar-custom-light' : ''}
        >
            <Container>
                <Navbar.Brand as={Link} to="/">{t('profile_name')}</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar-nav" />
                <Navbar.Collapse id="main-navbar-nav">
                    <Nav className="ms-auto align-items-center gap-3">
                        <Nav.Link as={Link} to="/" onClick={closeMobileMenu}>{t('home')}</Nav.Link>
                        <Nav.Link as={Link} to="/repositories" onClick={closeMobileMenu}>{t('repositories')}</Nav.Link>
                        <Nav.Link as={Link} to="/testimonials" onClick={closeMobileMenu}>{t('testimonials')}</Nav.Link>
                        <Button
                            variant={darkMode ? 'outline-light' : 'outline-dark'}
                            onClick={() => {
                                toggleTheme();
                                closeMobileMenu();
                            }}
                            size="sm"
                        >
                            {darkMode ? `☀️ ${t('light_mode')}` : `🌙 ${t('dark_mode')}`}
                        </Button>
                        <select
                            value={i18n.language}
                            onChange={e => changeLanguage(e.target.value)}
                            style={{
                                marginLeft: '10px',
                                padding: '4px 10px',
                                borderRadius: '6px',
                                border: '1px solid #ccc',
                                background: darkMode ? '#212529' : '#fff',
                                color: darkMode ? '#f8f9fa' : '#212529'
                            }}
                            aria-label={t('language')}
                        >
                            <option value="pt">Português - Portuguese</option>
                            <option value="en">English</option>
                            <option value="ga">Gaeilge - Irish</option>
                            <option value="es">Español - Spanish</option>
                            <option value="fr">Français - French</option>
                            <option value="zh">中文 - Mandarin</option>
                            <option value="ja">日本語 - Japanese</option>
                        </select>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;