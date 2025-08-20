// Home page component: displays profile, contact options, and technologies.
import React, { useContext, useState } from 'react';
import { ThemeContext } from '../App';
import { useTranslation, Trans } from 'react-i18next';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Mail, Phone, Linkedin, Github, FileUser } from 'lucide-react';
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
import '../styles/pages/Home.css';

function Home() {
    // Get darkMode value from ThemeContext
    const { darkMode } = useContext(ThemeContext);
    // Get translation function from i18n
    const { t } = useTranslation();
    // State to control contact modal visibility
    const [showContactModal, setShowContactModal] = useState(false);

    // Color configuration for each technology icon
    const techColors = {
        selenium: "#43B02A",         // Selenium
        csharp: "#68217A",           // C#
        cypress: "#17202C",          // Cypress
        javascript: "#F7DF1E",       // JavaScript
        typescript: "#3178C6",       // TypeScript
        postman: "#FF6C37",          // Postman
        sqlite: "#003B57",           // SQLite
        postgresql: "#336791",       // PostgreSQL
        github: "#181717",           // GitHub
        bitbucket: "#2684FF",        // Bitbucket
        react: "#61DAFB",            // React
        angular: "#DD0031",          // Angular
        html: "#E34F26",             // HTML5
        css: "#1572B6",              // CSS3
        bootstrap: "#7952B3",        // Bootstrap
        angularmaterial: "#009688",  // Angular Material
        windows: "#0078D6",          // Windows
        linux: "#FCC624",            // Linux
        fedora: "#294172",           // Fedora
        ubuntu: "#E95420",           // Ubuntu
        jira: "#0052CC",             // Jira
        trello: "#0079BF",           // Trello
    };

    // List of technologies to be displayed using TechCard
    const tecnologias = [
        { icon: <SiSelenium size={24} color={techColors.selenium} />, key: "selenium", testId: "tech-selenium" },
        { icon: <FaCode size={24} color={techColors.csharp} />, key: "csharp", testId: "tech-csharp" },
        { icon: <SiCypress size={24} color={techColors.cypress} />, key: "cypress", testId: "tech-cypress" },
        { icon: <FaJs size={24} color={techColors.javascript} />, key: "javascript", testId: "tech-javascript" },
        { icon: <SiTypescript size={24} color={techColors.typescript} />, key: "typescript", testId: "tech-typescript" },
        { icon: <SiPostman size={24} color={techColors.postman} />, key: "postman", testId: "tech-postman" },
        { icon: <SiSqlite size={24} color={techColors.sqlite} />, key: "sqlite", testId: "tech-sqlite" },
        { icon: <SiPostgresql size={24} color={techColors.postgresql} />, key: "postgresql", testId: "tech-postgresql" },
        { icon: <FaGithub size={24} color={techColors.github} />, key: "github", testId: "tech-github" },
        { icon: <FaBitbucket size={24} color={techColors.bitbucket} />, key: "bitbucket", testId: "tech-bitbucket" },
        { icon: <FaReact size={24} color={techColors.react} />, key: "react", testId: "tech-react" },
        { icon: <FaAngular size={24} color={techColors.angular} />, key: "angular", testId: "tech-angular" },
        { icon: <FaHtml5 size={24} color={techColors.html} />, key: "html", testId: "tech-html" },
        { icon: <FaCss3 size={24} color={techColors.css} />, key: "css", testId: "tech-css" },
        { icon: <FaBootstrap size={24} color={techColors.bootstrap} />, key: "bootstrap", testId: "tech-bootstrap" },
        { icon: <SiMaterialdesign size={24} color={techColors.angularmaterial} />, key: "angularmaterial", testId: "tech-angularmaterial" },
        { icon: <FaWindows size={24} color={techColors.windows} />, key: "windows", testId: "tech-windows" },
        { icon: <FaLinux size={24} color={techColors.linux} />, key: "linux", testId: "tech-linux" },
        { icon: <SiFedora size={24} color={techColors.fedora} />, key: "fedora", testId: "tech-fedora" },
        { icon: <FaNodeJs size={24} color={techColors.ubuntu} />, key: "ubuntu", testId: "tech-ubuntu" },
        { icon: <SiJira size={24} color={techColors.jira} />, key: "jira", testId: "tech-jira" },
        { icon: <SiTrello size={24} color={techColors.trello} />, key: "trello", testId: "tech-trello" },
    ];

    return (
        // Main wrapper with theme-based background and text color
        <div className={darkMode ? 'bg-dark text-light min-vh-100' : 'bg-custom-light text-dark min-vh-100'} id="page-home">
            <Container className="py-5 home-container">
                <Row className="align-items-center">
                    {/* Profile image section */}
                    <Col xs={12} md={5} className="text-center mb-4 mb-md-0 col-profile-img">
                        <Image
                            src="/images/ravi-image-1.jpeg"
                            alt="Profile Image"
                            roundedCircle
                            fluid
                            className="home-profile-image"
                            data-testid="home-profile-image"
                            id="img-profile"
                        />
                    </Col>
                    {/* Profile details section */}
                    <Col xs={12} md={7}>
                        <h1 className="mb-3" id="profile-title">{t('profile_name')}</h1>
                        {/* Profile description with translation and strong tags */}
                        <p className="home-profile-desc" id="profile-description-1">
                            <Trans i18nKey="profile_description_1" components={{ strong: <strong /> }} />
                        </p>
                        <p className="home-profile-desc" id="profile-description-2">
                            <Trans i18nKey="profile_description_2" components={{ strong: <strong /> }} />
                        </p>
                        <p className="home-profile-desc" id="profile-description-3">
                            <Trans i18nKey="profile_description_3" components={{ strong: <strong /> }} />
                        </p>
                        <p className="home-profile-quote" id="profile-quote">
                            {t('profile_quote')}
                        </p>
                        {/* Resume buttons */}
                        <div className="d-flex flex-wrap gap-3 mt-4" id="resume-buttons">
                            <CustomButton
                                icon={<Mail />}
                                text={t('see_cover-letter-en')}
                                href="/cover-letter-english-2025.pdf"
                                isExternal
                                id="btn-cover-letter-en"
                            />
                            <CustomButton
                                icon={<FileUser />}
                                text={t('see_resume_en')}
                                href="/curriculo-ravi-en.pdf"
                                isExternal
                                id="btn-resume-en"
                            />
                        </div>
                    </Col>
                </Row>

                <hr className="my-5" />
                {/* Contact section title */}
                <h2 className="mb-4 d-flex align-items-center" id="contact-title">
                    <Phone className="me-2" />
                    {t('contact')}
                </h2>
                {/* Contact introduction */}
                <p className={`mb-4 text-muted ${darkMode ? 'text-muted-fix' : ''}`} id="contact-intro">
                    {t('contact_intro')}
                </p>
                <Row className="mb-5" id="contact-buttons">
                    {/* Email and WhatsApp contact buttons */}
                    <Col md={6} className="d-flex flex-column gap-3 mb-3">
                        <CustomButton
                            icon={<Mail />}
                            text={t('contact_email')}
                            onClick={() => setShowContactModal(true)}
                            as="button"
                            className="btn btn-outline-primary btn-contact"
                            id="btn-contact-email"
                        />
                        <CustomButton
                            icon={<Phone />}
                            text={t('contact_whatsapp')}
                            href="https://wa.me/5585997641193?text=Ol%C3%A1%2C%20Ravi.%20Como%20vai%3F%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20n%C3%BAmero%20que%20encontrei%20no%20seu%20website."
                            isExternal
                            className="btn btn-outline-primary btn-contact"
                            id="btn-contact-whatsapp"
                        />
                    </Col>

                    {/* LinkedIn and GitHub contact buttons */}
                    <Col md={6} className="d-flex flex-column gap-3 mb-3">
                        <CustomButton
                            icon={<Linkedin />}
                            text={t('contact_linkedin')}
                            href="https://www.linkedin.com/in/ravifel"
                            isExternal
                            className="btn btn-outline-primary btn-contact"
                            id="btn-contact-linkedin"
                        />
                        <CustomButton
                            icon={<Github />}
                            text={t('contact_github')}
                            href="https://github.com/ravifel"
                            isExternal
                            className="btn btn-outline-primary btn-contact"
                            id="btn-contact-github"
                        />
                    </Col>
                </Row>

                {/* Custom modal for contact form */}
                <CustomModal
                    show={showContactModal}
                    onHide={() => setShowContactModal(false)}
                    title={t('contactForm.contact_form_title')}
                    isDark={darkMode}
                    id="modal-contact-form"
                >
                    <ContactForm onClose={() => setShowContactModal(false)} isDark={darkMode} id="contact-form" />
                </CustomModal>

                <hr className="my-5" />
                {/* Technologies section title */}
                <h2 className="mb-4 d-flex align-items-center" id="tech-title">
                    {t('technologies')}
                </h2>
                {/* Technologies grid */}
                <Row xs={3} md={4} lg={6} className="g-3" id="tech-list">
                    {tecnologias.map((tech) => (
                        <TechCard
                            key={tech.testId}
                            icon={tech.icon}
                            label={t(`techs.${tech.key}`)}
                            testId={tech.testId}
                            id={`tech-card-${tech.key}`}
                        />
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Home;