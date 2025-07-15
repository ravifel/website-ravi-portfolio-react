import React from "react";

function TestimonialModal({
    isOpen,
    onClose,
    testimonial,
    isDark,
    i18n,
    t,
    getRecommendation
}) {
    if (!isOpen) return null;
    return (
        <div className="testimonial-modal-overlay" onClick={onClose}>
            <div
                className={`testimonial-modal${isDark ? " testimonial-modal-dark" : ""}`}
                onClick={e => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
            >
                <button
                    className="testimonial-modal-close"
                    onClick={onClose}
                    aria-label={t("testimonials_section.close_modal")}
                >
                    &times;
                </button>
                <div className="testimonial-modal-header">
                    <strong>{testimonial.name}</strong>
                    {testimonial.title && <span className="testimonial-title"> — {testimonial.title}</span>}
                    {testimonial.date && (
                        <span className="testimonial-date" style={{ marginLeft: 8 }}>
                            <small>
                                {testimonial.date &&
                                    new Date(testimonial.date).toLocaleDateString(
                                        i18n.language === "en" ? "en-US" : "pt-BR"
                                    )}
                            </small>
                        </span>
                    )}
                </div>
                <div className="testimonial-modal-connection">{testimonial.connection}</div>
                <div className="testimonial-modal-body">
                    {getRecommendation(testimonial.recommendation)}
                </div>
            </div>
        </div>
    );
}
export default TestimonialModal;