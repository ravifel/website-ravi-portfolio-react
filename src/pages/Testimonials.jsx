// Testimonials page: displays testimonial cards with sorting, pagination, and modal for full text.
import { useTranslation } from "react-i18next";
import React, { useState, useEffect, useContext } from "react";
import { Row, Col } from "react-bootstrap";
import TestimonialCard from "../components/TestimonialCard";
import SortFilter from "../components/SortFilter";
import Pagination from "../components/Pagination";
import CustomModal from "../components/CustomModal";
import { ThemeContext } from "../App";
import { Linkedin } from "lucide-react";
import "../styles/pages/Testimonials.css";
import CustomButton from "../components/CustomButton";

function Testimonials() {
  // Get translation and theme context
  const { t, i18n } = useTranslation();
  const { darkMode } = useContext(ThemeContext);

  // Modal visibility and content state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  // Sorting and pagination state
  const [sortOrder, setSortOrder] = useState("asc"); // oldest first
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // Fetch testimonial data from i18n
  const testimonials = t("testimonials_data", { returnObjects: true }) || [];

  // Sort testimonials by date (desc/asc)
  const sortedTestimonials = testimonials
    .slice()
    .sort((a, b) =>
      sortOrder === "desc"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date)
    );

  // Pagination logic
  const totalItems = sortedTestimonials.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedTestimonials = sortedTestimonials.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset to first page when sort or itemsPerPage changes
  useEffect(() => {
    setCurrentPage(1);
  }, [sortOrder, itemsPerPage]);

  // Open modal with full testimonial
  function openModal(testimonial) {
    setModalContent(testimonial);
    setModalOpen(true);
  }

  // Close modal and clear content
  function closeModal() {
    setModalOpen(false);
    setModalContent({});
  }

  // Get recommendation text (handles localization)
  function getRecommendation(rec) {
    if (!rec) return "";
    if (typeof rec === "string") return rec;
    return rec[i18n.language] || rec.pt || Object.values(rec)[0] || "";
  }

  // Ensure page mounts at the very top (robust for iOS Safari and collapsing navbar)
  useEffect(() => {
    const forceTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    const navbarCollapse = document.querySelector(".navbar-collapse");
    const isCollapsing =
      navbarCollapse?.classList.contains("show") ||
      navbarCollapse?.classList.contains("collapsing");

    if (isCollapsing) {
      const onEnd = () => {
        navbarCollapse?.removeEventListener("transitionend", onEnd);
        setTimeout(forceTop, 10); // ensure final height applied
      };
      navbarCollapse?.addEventListener("transitionend", onEnd);

      const safety = setTimeout(() => {
        navbarCollapse?.removeEventListener("transitionend", onEnd);
        forceTop();
      }, 450);

      return () => clearTimeout(safety);
    } else {
      forceTop();
      requestAnimationFrame(forceTop);
    }
  }, []);

  return (
    <section
      className={`testimonials-section${
        darkMode ? " testimonials-section-dark" : ""
      }`}
      id="page-testimonials"
    >
      {/* Section title */}
      <h2
        className={`testimonials-title${
          darkMode ? " testimonials-title-dark" : ""
        }`}
        id="testimonials-title"
      >
        {t("testimonials_section.title")}
      </h2>

      {/* LinkedIn button and description */}
      <div
        className="testimonials-linkedin-desc"
        style={{ textAlign: "center", marginBottom: 28 }}
        id="testimonials-linkedin-info"
      >
        <p id="testimonials-linkedin-description">
          {t("testimonials_section.description")}
        </p>
        <CustomButton
          icon={<Linkedin size={18} />}
          text={t("contact_linkedin")}
          href="https://www.linkedin.com/in/ravifel/"
          isExternal
          className="btn-contact"
          id="btn-linkedin-testimonials"
        />
      </div>

      {/* Sorting select */}
      <SortFilter
        value={sortOrder}
        onChange={setSortOrder}
        label={t("testimonials_section.sort_label")}
        ariaLabel={t("testimonials_section.sort_label")}
        options={[
          { value: "asc", label: t("testimonials_section.oldest") },
          { value: "desc", label: t("testimonials_section.most_recent") },
        ]}
        id="testimonials-sort-filter"
      />

      {/* Pagination controls */}
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
        id="testimonials-pagination"
      />

      {/* List of testimonial cards (Bootstrap grid) */}
      <Row xs={1} sm={2} md={3} className="g-4" id="testimonials-list">
        {paginatedTestimonials.map((testimonial, idx) => (
          <Col key={`testimonial-col-${currentPage}-${idx}`}>
            <TestimonialCard
              testimonial={testimonial}
              isDark={darkMode}
              i18n={i18n}
              t={t}
              getRecommendation={getRecommendation}
              onSeeMore={openModal}
              id={`testimonial-card-${currentPage}-${idx}`}
              data-testid="testimonial-card"
            />
          </Col>
        ))}
      </Row>

      {/* Modal to show full testimonial */}
      <CustomModal
        show={modalOpen}
        onHide={closeModal}
        title={
          modalContent && (
            <div className="testimonial-modal-title" id="testimonial-modal-title">
              <strong>{modalContent.name}</strong>
              {modalContent.title && <span> {modalContent.title}</span>}
              {modalContent.date && (
                <span className="testimonial-modal-date">
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
        isDark={darkMode}
        id={"testimonial-modal"}
      >
        {modalContent && (
          <>
            <div
              id="testimonial-modal-connection"
              className="testimonial-modal-connection"
            >
              <strong>- {modalContent.connection}</strong>
            </div>
            <div id="testimonial-modal-recommendation">
              {getRecommendation(modalContent.recommendation)}
            </div>
          </>
        )}
      </CustomModal>
    </section>
  );
}

export default Testimonials;
