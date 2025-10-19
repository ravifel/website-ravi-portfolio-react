// Repositories page: displays grouped repositories using Accordion and RepositoryCard.
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import RepositoryCard from '../components/RepositoryCard';
import { ThemeContext } from '../App';
import { Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import repositoriesData from '../data/repositories.json';
import '../styles/pages/Repositories.css';

const Repositories = () => {
    // Get darkMode value from ThemeContext
    const { darkMode } = useContext(ThemeContext);
    // Get translation function from i18n
    const { t } = useTranslation();
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        // Main wrapper with theme-based background and text color
        <div
            className={darkMode ? 'bg-dark text-light min-vh-100' : 'bg-custom-light text-dark min-vh-100'}
            id="page-repositories"
        >
            <Container className="py-5">
                {/* Page title with GitHub icon */}
                <h2 className="mb-4" id="repositories-title">
                    <span role="img" aria-label="Folder">
                        <Github className='iconGithub' />
                    </span>
                    {t('repositories')}
                </h2>
                {/* Accordion for repository groups */}
                <Accordion alwaysOpen id="repositories-accordion">
                    {repositoriesData.map((group, groupIdx) => (
                        <Accordion.Item
                            eventKey={group.eventKey}
                            key={group.eventKey}
                            className={darkMode ? 'bg-dark text-light' : ''}
                            id={`accordion-group-${group.eventKey}`}
                        >
                            {/* Accordion group header */}
                            <Accordion.Header id={`accordion-header-${group.eventKey}`}>
                                {t(group.titleKey)}
                            </Accordion.Header>
                            {/* Accordion group body with repository cards */}
                            <Accordion.Body id={`accordion-body-${group.eventKey}`}>
                                <Row xs={1} md={2} lg={3} className="g-4" id={`repositories-row-${group.eventKey}`}>
                                    {group.items.map((repo, repoIdx) => (
                                        <Col key={repo.nameKey}>
                                            <RepositoryCard
                                                name={t(repo.nameKey)}
                                                description={t(repo.descriptionKey)}
                                                url={repo.url}
                                                tech={repo.tech}
                                                id={`repository-card-${group.eventKey}-${repo.nameKey}`}
                                                btnId={`btn-view-repository-${group.eventKey}-${repo.nameKey}`}
                                            />
                                        </Col>
                                    ))}
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </Container>
        </div>
    );
};

export default Repositories;