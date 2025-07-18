import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/components/ContactForm.css';

function ContactForm() {
    const { t } = useTranslation();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess(false);
        setError(false);
        setLoading(true);

        const formData = new FormData(e.target);

        try {
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
        <form onSubmit={handleSubmit}>
            {success && (
                <div className="alert alert-success" role="alert">
                    {t('contactForm.success')}
                </div>
            )}
            {error && (
                <div className="alert alert-danger" role="alert">
                    {t('contactForm.error')}
                </div>
            )}

            <div className="mb-3">
                <label htmlFor="name" className="form-label">{t('contactForm.name')}</label>
                <input type="text" className="form-control" id="name" name="name" required />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">{t('contactForm.email')}</label>
                <input type="email" className="form-control" id="email" name="email" required />
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">{t('contactForm.message')}</label>
                <textarea className="form-control" id="message" name="message" rows={4} required />
            </div>
            <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? t('contactForm.sending') || "Enviando..." : t('contactForm.send')}
            </button>
        </form>
    );
}

export default ContactForm;