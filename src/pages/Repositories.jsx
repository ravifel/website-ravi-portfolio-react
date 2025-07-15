import React, { useContext } from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import RepositoryCard from '../components/RepositoryCard';
import { ThemeContext } from '../App';
import { Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import repositoriesData from '../data/repositories.json';


const Repositories = () => {
    const { darkMode } = useContext(ThemeContext);
    const { t } = useTranslation();

    return (
        <div className={darkMode ? 'bg-dark text-light min-vh-100' : 'bg-custom-light text-dark min-vh-100'}>
            <Container className="py-5">
                <h2 className="mb-4">
                    <span role="img" aria-label="Folder"><Github className='iconGithub' /></span> {t('repositories')}
                </h2>
                <Accordion alwaysOpen>
                    {repositoriesData.map((group) => (
                        <Accordion.Item
                            eventKey={group.eventKey}
                            key={group.eventKey}
                            className={darkMode ? 'bg-dark text-light' : ''}
                        >
                            <Accordion.Header>{t(group.titleKey)}</Accordion.Header>
                            <Accordion.Body>
                                <Row xs={1} md={2} lg={3} className="g-4">
                                    {group.items.map((repo) => (
                                        <Col key={repo.nameKey}>
                                            <RepositoryCard
                                                name={t(repo.nameKey)}
                                                description={t(repo.descriptionKey)}
                                                url={repo.url}
                                                tech={repo.tech}
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