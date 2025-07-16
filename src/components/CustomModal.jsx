import React from 'react';
import { Modal } from 'react-bootstrap';

function CustomModal({ show, onHide, title, children, className = '', size = 'md', ...props }) {
    return (
        <Modal show={show} onHide={onHide} centered size={size} className={className} {...props}>
            {title && (
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
            )}
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    );
}

export default CustomModal;