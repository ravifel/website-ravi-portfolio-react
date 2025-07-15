import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { useTranslation, Trans } from 'react-i18next';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import TechCard from '../components/TechCard';
import CustomButton from '../components/CustomButton';

function Home() {
    const { darkMode } = useContext(ThemeContext);
    const { t } = useTranslation();

    // Refactor this part of the code
    const tecnologias = [
        { emoji: "🎭", key: "playwright", testId: "tech-playwright" },
        { emoji: "🧬", key: "selenium", testId: "tech-selenium" },
        { emoji: "⚙️", key: "csharp", testId: "tech-csharp" },
        { emoji: "🧪", key: "cypress", testId: "tech-cypress" },
        { emoji: "🟨", key: "javascript", testId: "tech-javascript" },
        { emoji: "🟦", key: "typescript", testId: "tech-typescript" },
        { emoji: "📮", key: "postman", testId: "tech-postman" },
        { emoji: "🗄️", key: "sql", testId: "tech-sql" },
        { emoji: "🐘", key: "postgresql", testId: "tech-postgresql" },
        { emoji: "📦", key: "sqlite", testId: "tech-sqlite" },
        { emoji: "🌿", key: "git", testId: "tech-git" },
        { emoji: "🐙", key: "github", testId: "tech-github" },
        { emoji: "🧵", key: "bitbucket", testId: "tech-bitbucket" },
        { emoji: "⚛️", key: "react", testId: "tech-react" },
        { emoji: "🅰️", key: "angular", testId: "tech-angular" },
        { emoji: "🧾", key: "html", testId: "tech-html" },
        { emoji: "🎨", key: "css", testId: "tech-css" },
        { emoji: "📘", key: "bootstrap", testId: "tech-bootstrap" },
        { emoji: "📐", key: "angularmaterial", testId: "tech-angularmaterial" },
        { emoji: "🖥️", key: "vscode", testId: "tech-vscode" },
        { emoji: "📋", key: "jira", testId: "tech-jira" },
        { emoji: "💬", key: "teams", testId: "tech-teams" },
        { emoji: "☁️", key: "azuredevops", testId: "tech-azuredevops" },
        { emoji: "📌", key: "trello", testId: "tech-trello" },
        { emoji: "🪟", key: "windows", testId: "tech-windows" },
        { emoji: "🐧", key: "linux", testId: "tech-linux" },
        { emoji: "🎩", key: "fedora", testId: "tech-fedora" },
        { emoji: "🔶", key: "ubuntu", testId: "tech-ubuntu" },
    ];

    return (
        <div className={darkMode ? 'bg-dark text-light min-vh-100' : 'bg-custom-light text-dark min-vh-100'}>
            <Container className="py-5">
                <Row className="align-items-center">
                    <Col xs={12} md={5} className="text-center mb-4 mb-md-0">
                        <Image
                            src="/images/ravi-image-2.jpeg"
                            alt="Profile Image"
                            roundedCircle
                            fluid
                            style={{
                                maxWidth: '240px',
                                opacity: 0.95,
                                border: '4px solid #212529',
                                padding: '4px'
                            }}
                            data-testid="home-profile-image"
                        />
                    </Col>

                    <Col xs={12} md={7}>
                        <h1 className="mb-3">{t('profile_name')}</h1>
                        <p style={{ fontSize: '1.1rem' }}>
                            <Trans i18nKey="profile_description_1" components={{ strong: <strong /> }} />
                        </p>
                        <p style={{ fontSize: '1.1rem' }}>
                            <Trans i18nKey="profile_description_2" components={{ strong: <strong /> }} />
                        </p>
                        <p style={{ fontSize: '1.1rem' }}>
                            <Trans i18nKey="profile_description_3" components={{ strong: <strong /> }} />
                        </p>
                        <p style={{ fontStyle: 'italic', fontSize: '1rem' }}>
                            {t('profile_quote')}
                        </p>

                        <div className="d-flex flex-wrap gap-3 mt-4">
                            <CustomButton
                                icon="📄"
                                text={t('see_resume_pt')}
                                href="/curriculo-ravi-pt.pdf"
                                isExternal
                            />
                            <CustomButton
                                icon="🌍"
                                text={t('see_resume_en')}
                                href="/curriculo-ravi-en.pdf"
                                isExternal
                            />
                        </div>
                    </Col>
                </Row>

                <hr className="my-5" />
                <h2 className="mb-4 d-flex align-items-center">
                    <Phone className="me-2" />
                    {t('contact')}
                </h2>
                <p className={`mb-4 text-muted ${darkMode ? 'text-muted-fix' : ''}`}>
                    {t('contact_intro')}
                </p>
                <Row className="mb-5">
                    <Col md={6} className="d-flex flex-column gap-3 mb-3">
                        <CustomButton
                            icon={<Mail />}
                            text={t('contact_email')}
                            href="mailto:ravifel.contact@gmail.com"
                            className="btn btn-outline-primary btn-contact"
                        />
                        <CustomButton
                            icon={<Phone />}
                            text={t('contact_whatsapp')}
                            href="https://wa.me/5585997641193?text=Ol%C3%A1%2C%20Ravi.%20Como%20vai%3F%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20n%C3%BAmero%20que%20encontrei%20no%20seu%20website."
                            isExternal
                            className="btn btn-outline-primary btn-contact"
                        />
                    </Col>

                    <Col md={6} className="d-flex flex-column gap-3 mb-3">
                        <CustomButton
                            icon={<Linkedin />}
                            text={t('contact_linkedin')}
                            href="https://www.linkedin.com/in/ravifel"
                            isExternal
                            className="btn btn-outline-primary btn-contact"
                        />
                        <CustomButton
                            icon={<Github />}
                            text={t('contact_github')}
                            href="https://github.com/ravifel"
                            isExternal
                            className="btn btn-outline-primary btn-contact"
                        />
                    </Col>
                </Row>

                <hr className="my-5" />
                <h2 className="mb-4">
                    <span role="img" aria-label={t('technologies')}>💻</span> {t('technologies')}
                </h2>
                <Row xs={3} md={4} lg={6} className="g-3">
                    {tecnologias.map((tech) => (
                        <TechCard
                            key={tech.testId}
                            emoji={tech.emoji}
                            label={t(`techs.${tech.key}`)}
                            testId={tech.testId}
                        />
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Home;