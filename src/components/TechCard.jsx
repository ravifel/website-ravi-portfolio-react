// TechCard component: displays a technology icon and label in a Bootstrap column.
import React from 'react';
import { Col } from 'react-bootstrap';
import '../styles/components/TechCard.css';

const TechCard = ({ icon, label, testId, id }) => {
    return (
        <Col>
            <div
                className="tech-card p-2 border rounded text-center shadow-sm d-flex flex-column align-items-center justify-content-center"
                data-testid={testId}
                id={id}
            >
                <span className="tech-card-icon">{icon}</span>
                <p className="mb-0 tech-card-label">{label}</p>
            </div>
        </Col>
    );
};

export default TechCard;