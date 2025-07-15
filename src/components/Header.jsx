import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { ThemeContext } from '../App';

function Header() {
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    const closeMobileMenu = () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarToggler && navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    };

    return (
        <Navbar
            bg={darkMode ? 'dark' : undefined} // 'light' removido, usaremos classe personalizada
            variant={darkMode ? 'dark' : 'light'}
            expand="lg"
            sticky="top"
            className={!darkMode ? 'navbar-custom-light' : ''}
        >
            <Container>
                <Navbar.Brand as={Link} to="/">Ravi Silva</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar-nav" />
                <Navbar.Collapse id="main-navbar-nav">
                    <Nav className="ms-auto align-items-center gap-3">
                        <Nav.Link as={Link} to="/" onClick={closeMobileMenu}>Início</Nav.Link>
                        <Nav.Link as={Link} to="/repositories" onClick={closeMobileMenu}>Repositórios</Nav.Link>
                        <Button
                            variant={darkMode ? 'outline-light' : 'outline-dark'}
                            onClick={() => {
                                toggleTheme();
                                closeMobileMenu();
                            }}
                            size="sm"
                        >
                            {darkMode ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
