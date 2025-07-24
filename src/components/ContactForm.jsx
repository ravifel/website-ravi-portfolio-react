// ContactForm: handles contact form logic, validation, and submission to Formspree, with feedback messages.
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/components/ContactForm.css';

function ContactForm({ isDark = false, id = "contact-form" }) {
    const { t } = useTranslation();
    // State for form submission feedback and loading
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    // Handles contact form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess(false);
        setError(false);
        setLoading(true);

        const formData = new FormData(e.target);

        try {
            // Send POST request to Formspree endpoint
            const response = await fetch('https://formspree.io/f/xdkdopjz', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSuccess(true);
                e.target.reset();
            } else {
                setError(true);
            }
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={isDark ? "contact-form-dark" : ""} id={id}>
            {/* Show success alert if form was sent successfully */}
            {success && (
                <div className="alert alert-success" role="alert" id="contact-success-message">
                    {t('contactForm.success')}
                </div>
            )}
            {/* Show error alert if form submission failed */}
            {error && (
                <div className="alert alert-danger" role="alert" id="contact-error-message">
                    {t('contactForm.error')}
                </div>
            )}

            {/* Name input field */}
            <div className="mb-3">
                <label htmlFor="input-name" className="form-label" id="label-name">{t('contactForm.name')}</label>
                <input type="text" className="form-control" id="input-name" name="name" required />
            </div>
            {/* Email input field */}
            <div className="mb-3">
                <label htmlFor="input-email" className="form-label" id="label-email">{t('contactForm.email')}</label>
                <input type="email" className="form-control" id="input-email" name="email" required />
            </div>
            {/* Message textarea field */}
            <div className="mb-3">
                <label htmlFor="input-message" className="form-label" id="label-message">{t('contactForm.message')}</label>
                <textarea className="form-control" id="input-message" name="message" rows={4} required />
            </div>
            {/* Submit button */}
            <button type="submit" className="btn btn-primary" id="btn-contact-send" disabled={loading}>
                {loading ? t('contactForm.sending') || "Enviando..." : t('contactForm.send')}
            </button>
        </form>
    );
}

export default ContactForm;