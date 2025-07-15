import React from "react";

const CHAR_LIMIT = 515;

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
    onSeeMore
}) {
    const recommendationText = getRecommendation(testimonial.recommendation);
    const isLong = recommendationText.length > CHAR_LIMIT;

    return (
        <div className={`testimonial-card${isDark ? " testimonial-card-dark" : ""}`}>
            <p className={`testimonial-text${isDark ? " testimonial-text-dark" : ""}`}>
                "{isLong ? truncateText(recommendationText, CHAR_LIMIT) : recommendationText}"
                {isLong && (
                    <>
                        &nbsp;
                        <button
                            className="see-more-btn"
                            onClick={() => onSeeMore(testimonial)}
                            aria-label={t("testimonials_section.see_more_aria")}
                        >
                            {t("testimonials_section.see_more")}
                        </button>
                    </>
                )}
            </p>
            <div className={`testimonial-info${isDark ? " testimonial-info-dark" : ""}`}>
                <div>
                    <strong>{testimonial.name}</strong>
                    {testimonial.title && <span className="testimonial-title"> — {testimonial.title}</span>}
                </div>
                <div className="testimonial-connection">{testimonial.connection}</div>
                {testimonial.date && (
                    <div className="testimonial-date">
                        <small>{new Date(testimonial.date).toLocaleDateString(i18n.language === "en" ? "en-US" : "pt-BR")}</small>
                    </div>
                )}
            </div>
        </div>
    );
}
export default TestimonialCard;