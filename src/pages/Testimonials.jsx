import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from "react";
import TestimonialCard from "../components/TestimonialCard";
import TestimonialModal from "../components/TestimonialModal";
import SortFilter from "../components/SortFilter";
import Pagination from "../components/Pagination";

function Testimonials() {
    const { t, i18n } = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});
    const [sortOrder, setSortOrder] = useState("desc");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const isDark = document.body.classList.contains("dark-theme");
    const testimonials = t("testimonials_data", { returnObjects: true }) || [];

    const sortedTestimonials = testimonials
        .slice()
        .sort((a, b) =>
            sortOrder === "desc"
                ? new Date(b.date) - new Date(a.date)
                : new Date(a.date) - new Date(b.date)
        );

    const totalItems = sortedTestimonials.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const paginatedTestimonials = sortedTestimonials.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    useEffect(() => {
        setCurrentPage(1);
    }, [sortOrder, itemsPerPage]);

    function openModal(testimonial) {
        setModalContent(testimonial);
        setModalOpen(true);
    }

    function closeModal() {
        setModalOpen(false);
        setModalContent({});
    }

    function getRecommendation(rec) {
        if (!rec) return "";
        if (typeof rec === "string") return rec;
        return rec[i18n.language] || rec.pt || Object.values(rec)[0] || "";
    }

    return (
        <section className={`testimonials-section${isDark ? " testimonials-section-dark" : ""}`}>
            <h2 className={`testimonials-title${isDark ? " testimonials-title-dark" : ""}`}>
                {t("testimonials_section.title")}
            </h2>

            <SortFilter
                value={sortOrder}
                onChange={setSortOrder}
                label={t("testimonials_section.sort_label")}
                ariaLabel={t("testimonials_section.sort_label")}
                options={[
                    { value: "desc", label: t("testimonials_section.most_recent") },
                    { value: "asc", label: t("testimonials_section.oldest") }
                ]}
            />

            <Pagination
                currentPage={currentPage}
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
                onItemsPerPageChange={setItemsPerPage}
                itemsPerPageOptions={[5, 10, 20]}
                labelItemsPerPage={t("pagination.items_per_page")}
                labelOf={t("pagination.of")}
                ariaLabelPrev={t("pagination.prev_page")}
                ariaLabelNext={t("pagination.next_page")}
            />

            <div className="testimonials-list">
                {paginatedTestimonials.map((testimonial, idx) => (
                    <TestimonialCard
                        key={idx}
                        testimonial={testimonial}
                        isDark={isDark}
                        i18n={i18n}
                        t={t}
                        getRecommendation={getRecommendation}
                        onSeeMore={openModal}
                    />
                ))}
            </div>

            <TestimonialModal
                isOpen={modalOpen}
                onClose={closeModal}
                testimonial={modalContent}
                isDark={isDark}
                i18n={i18n}
                t={t}
                getRecommendation={getRecommendation}
            />
        </section>
    );
}

export default Testimonials;