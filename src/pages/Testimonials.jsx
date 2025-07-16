import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from "react";
import TestimonialCard from "../components/TestimonialCard";
import SortFilter from "../components/SortFilter";
import Pagination from "../components/Pagination";
import CustomModal from "../components/CustomModal";

function Testimonials() {
    const { t, i18n } = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});
    const [sortOrder, setSortOrder] = useState("desc");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);

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
                itemsPerPageOptions={[6, 12, 18, 24, 30]}
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

            <CustomModal
                show={modalOpen}
                onHide={closeModal}
                title={
                    modalContent && (
                        <div>
                            <strong>{modalContent.name}</strong>
                            {modalContent.title && <span> — {modalContent.title}</span>}
                            {modalContent.date && (
                                <span style={{ marginLeft: 8 }}>
                                    <small>
                                        {new Date(modalContent.date).toLocaleDateString(
                                            i18n.language === "en" ? "en-US" : "pt-BR"
                                        )}
                                    </small>
                                </span>
                            )}
                        </div>
                    )
                }
            >
                {modalContent && (
                    <>
                        <div>{modalContent.connection}</div>
                        <div>{getRecommendation(modalContent.recommendation)}</div>
                    </>
                )}
            </CustomModal>
        </section>
    );
}

export default Testimonials;