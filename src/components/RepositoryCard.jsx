import React from 'react';
import { Card, Button } from 'react-bootstrap';
import {
    FaReact, FaAngular, FaBootstrap, FaHtml5,
    FaCss3Alt, FaNodeJs, FaJava, FaGithub, FaCode
} from 'react-icons/fa';
import {
    SiJavascript, SiTypescript, SiCypress, SiSelenium,
    SiPostman, SiMongodb, SiMysql, SiPostgresql, SiDotnet
} from 'react-icons/si';
import { BiCodeAlt } from 'react-icons/bi';
import { Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../styles/components/RepositoryCard.css';

const techIcons = {
    javascript: <SiJavascript size={60} color="#F7DF1E" />,
    typescript: <SiTypescript size={60} color="#3178C6" />,
    react: <FaReact size={60} color="#61DAFB" />,
    angular: <FaAngular size={60} color="#DD0031" />,
    csharp: <SiDotnet size={60} color="#512BD4" />,
    cypress: <SiCypress size={60} color="#2EAB59" />,
    selenium: <SiSelenium size={60} color="#43B02A" />,
    playwright: <BiCodeAlt size={60} color="#212529" />,
    postman: <SiPostman size={60} color="#FF6C37" />,
    bootstrap: <FaBootstrap size={60} color="#7952B3" />,
    html: <FaHtml5 size={60} color="#E44D26" />,
    css: <FaCss3Alt size={60} color="#264DE4" />,
    nodejs: <FaNodeJs size={60} color="#339933" />,
    java: <FaJava size={60} color="#007396" />,
    github: <FaGithub size={60} color="#181717" />,
    vscode: <FaCode size={60} color="#007ACC" />,
    mongodb: <SiMongodb size={60} color="#47A248" />,
    mysql: <SiMysql size={60} color="#4479A1" />,
    postgresql: <SiPostgresql size={60} color="#336791" />,
    default: <BiCodeAlt size={60} color="#212529" />,
};

const RepositoryCard = ({ name, description, url, tech }) => {
    const { t } = useTranslation();
    const icon = techIcons[tech?.toLowerCase()] || techIcons.default;

    return (
        <Card className="repository-card shadow-sm border-0 h-100 text-center">
            <Card.Body className="d-flex flex-column align-items-center">
                <div className="mb-3">{icon}</div>
                <Card.Title className="text-capitalize">{name}</Card.Title>
                <Card.Text className="repository-description">{description}</Card.Text>
                <Button
                    variant="outline-primary"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto d-inline-flex align-items-center"
                >
                    <span className="me-2"><Github /></span> {t('view_repository')}
                </Button>
            </Card.Body>
        </Card>
    );
};

export default RepositoryCard;