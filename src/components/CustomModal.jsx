import React from 'react';
import { Modal } from 'react-bootstrap';
import '../styles/components/CustomModal.css';

function CustomModal({ show, onHide, title, children, className = '', size = 'md', isDark = false, id, ...props }) {
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            size={size}
            className={`${className} ${isDark ? 'custom-modal-dark' : ''}`}
            id={id}
            {...props}
        >
            {title && (
                <Modal.Header closeButton className={isDark ? 'custom-modal-header-dark' : ''} id="modal-header">
                    <Modal.Title id="modal-title">{title}</Modal.Title>
                </Modal.Header>
            )}
            <Modal.Body className={isDark ? 'custom-modal-body-dark' : ''} id="modal-body">
                {children}
            </Modal.Body>
        </Modal>
    );
}

export default CustomModal;