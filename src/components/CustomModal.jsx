// CustomModal: wrapper around Bootstrap Modal with dark/light mode and custom content support.
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
            <div id="modal-content-selector">
            {/* Modal header with title and close button */}
            {title && (
                <Modal.Header className={isDark ? 'custom-modal-header-dark' : ''} id="modal-header">
                    <Modal.Title id="modal-title">{title}</Modal.Title>
                        <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            id="modal-close-btn"
                            onClick={onHide}
                        />
                </Modal.Header>
            )}
            {/* Modal body with content */}
            <Modal.Body className={isDark ? 'custom-modal-body-dark' : ''} id="modal-body">
                {children}
            </Modal.Body>
            </div>
        </Modal>
    );
}

export default CustomModal;