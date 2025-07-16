import React, { useContext, useState } from 'react';
import { ThemeContext } from '../App';
import { useTranslation, Trans } from 'react-i18next';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import {
    FaReact,
    FaAngular,
    FaGithub,
    FaHtml5,
    FaCss3,
    FaJs,
    FaNodeJs,
    FaLinux,
    FaWindows,
    FaBootstrap,
    FaBitbucket,
    FaCode,
} from 'react-icons/fa';
import {
    SiTypescript,
    SiPostgresql,
    SiTrello,
    SiJira,
    SiFedora,
    SiCypress,
    SiSelenium,
    SiSqlite,
    SiMaterialdesign,
    SiPostman,
} from 'react-icons/si';
import TechCard from '../components/TechCard';
import CustomButton from '../components/CustomButton';
import ContactForm from '../components/ContactForm';
import CustomModal from '../components/CustomModal';

function Home() {
    const { darkMode } = useContext(ThemeContext);
    const { t } = useTranslation();
    const [showContactModal, setShowContactModal] = useState(false);

    const iconColor = darkMode ? "#fff" : "#222";

    const tecnologias = [
        { icon: <SiSelenium size={24} color={iconColor} />, key: "selenium", testId: "tech-selenium" },
        { icon: <FaCode size={24} color={iconColor} />, key: "csharp", testId: "tech-csharp" },
        { icon: <SiCypress size={24} color={iconColor} />, key: "cypress", testId: "tech-cypress" },
        { icon: <FaJs size={24} color={iconColor} />, key: "javascript", testId: "tech-javascript" },
        { icon: <SiTypescript size={24} color={iconColor} />, key: "typescript", testId: "tech-typescript" },
        { icon: <SiPostman size={24} color={iconColor} />, key: "postman", testId: "tech-postman" },
        { icon: <SiSqlite size={24} color={iconColor} />, key: "sqlite", testId: "tech-sqlite" },
        { icon: <SiPostgresql size={24} color={iconColor} />, key: "postgresql", testId: "tech-postgresql" },
        { icon: <FaGithub size={24} color={iconColor} />, key: "github", testId: "tech-github" },
        { icon: <FaBitbucket size={24} color={iconColor} />, key: "bitbucket", testId: "tech-bitbucket" },
        { icon: <FaReact size={24} color={iconColor} />, key: "react", testId: "tech-react" },
        { icon: <FaAngular size={24} color={iconColor} />, key: "angular", testId: "tech-angular" },
        { icon: <FaHtml5 size={24} color={iconColor} />, key: "html", testId: "tech-html" },
        { icon: <FaCss3 size={24} color={iconColor} />, key: "css", testId: "tech-css" },
        { icon: <FaBootstrap size={24} color={iconColor} />, key: "bootstrap", testId: "tech-bootstrap" },
        { icon: <SiMaterialdesign size={24} color={iconColor} />, key: "angularmaterial", testId: "tech-angularmaterial" },
        { icon: <FaWindows size={24} color={iconColor} />, key: "windows", testId: "tech-windows" },
        { icon: <FaLinux size={24} color={iconColor} />, key: "linux", testId: "tech-linux" },
        { icon: <SiFedora size={24} color={iconColor} />, key: "fedora", testId: "tech-fedora" },
        { icon: <FaNodeJs size={24} color={iconColor} />, key: "ubuntu", testId: "tech-ubuntu" },
        { icon: <SiJira size={24} color={iconColor} />, key: "jira", testId: "tech-jira" },
        { icon: <SiTrello size={24} color={iconColor} />, key: "trello", testId: "tech-trello" },
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
                                icon={<Mail />}
                                text={t('see_resume_pt')}
                                href="/curriculo-ravi-pt.pdf"
                                isExternal
                            />
                            <CustomButton
                                icon={<Mail />}
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
                            onClick={() => setShowContactModal(true)}
                            as="button"
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

                {/* ContactForm modal */}
                <CustomModal
                    show={showContactModal}
                    onHide={() => setShowContactModal(false)}
                    title={t('contactForm.contact_form_title')}
                >
                    <ContactForm onClose={() => setShowContactModal(false)} />
                </CustomModal>

                <hr className="my-5" />
                <h2 className="mb-4 d-flex align-items-center">
                    {t('technologies')}
                </h2>
                <Row xs={3} md={4} lg={6} className="g-3">
                    {tecnologias.map((tech) => (
                        <TechCard
                            key={tech.testId}
                            icon={tech.icon}
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