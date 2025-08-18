// TestimonialCard: displays a single testimonial, truncates long text with "see more" button.
import React from "react";
import '../styles/components/TestimonialCard.css';

const CHAR_LIMIT = 150;

// Helper function to truncate text at the last space before the limit
function truncateText(text, limit) {
    if (text.length <= limit) return text;
    const trunc = text.slice(0, limit);
    const lastSpace = trunc.lastIndexOf(" ");
    return trunc.slice(0, lastSpace > 0 ? lastSpace : limit) + "...";
}

function TestimonialCard({
    testimonial,
    isDark,
    i18n,
    t,
    getRecommendation,
    onSeeMore,
    id
}) {
    // Get localized recommendation text
    const recommendationText = getRecommendation(testimonial.recommendation);
    const isLong = recommendationText.length > CHAR_LIMIT;

    return (
        <div className={`testimonial-card${isDark ? " testimonial-card-dark" : ""}`} id={id}>
            {/* Testimonial text, truncated if too long */}
            <p className={`testimonial-text${isDark ? " testimonial-text-dark" : ""}`} id={`${id}-text`}>
                "{isLong ? truncateText(recommendationText, CHAR_LIMIT) : recommendationText}"
                {isLong && (
                    <>
                        &nbsp;
                        {/* "See more" button to expand full testimonial in modal */}
                        <button
                            className="see-more-btn"
                            onClick={() => onSeeMore(testimonial)}
                            aria-label={t("testimonials_section.see_more_aria")}
                            id={`${id}-see-more-btn`}
                        >
                            {t("testimonials_section.see_more")}
                        </button>
                    </>
                )}
            </p>
            {/* Author and meta info */}
            <div className={`testimonial-info${isDark ? " testimonial-info-dark" : ""}`} id={`${id}-info`}>
                <div id={`${id}-name`}>
                    <strong>{testimonial.name}</strong>
                    {testimonial.title && <span className="testimonial-title"> — {testimonial.title}</span>}
                </div>
                <div className="testimonial-connection" id={`${id}-connection`}>{testimonial.connection}</div>
                {testimonial.date && (
                    <div className="testimonial-date" id={`${id}-date`}>
                        <small>{new Date(testimonial.date).toLocaleDateString(i18n.language === "en" ? "en-US" : "pt-BR")}</small>
                    </div>
                )}
            </div>
        </div>
    );
}
export default TestimonialCard;