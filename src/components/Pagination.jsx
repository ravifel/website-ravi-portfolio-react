// Pagination component: controls page navigation and items per page selection.
import React from "react";
import Select from "react-select";
import "../styles/components/Pagination.css";

// SVG left arrow icon
const ArrowLeftSVG = ({ color = "currentColor", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <polyline
      points="15 6 9 12 15 18"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// SVG right arrow icon
const ArrowRightSVG = ({ color = "currentColor", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <polyline
      points="9 6 15 12 9 18"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
  itemsPerPageOptions = [6, 12, 18, 24, 30],
  labelItemsPerPage = "Resultados por página",
  labelOf = "de",
  ariaLabelPrev = "Página anterior",
  ariaLabelNext = "Próxima página",
  isDarkMode = false,
  showPageCount = false, // optional: show "X / Y" page count
  id = "pagination",
}) => {
  // Calculate total pages, start and end of the current page range
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage || 1));
  const clampedCurrent = Math.min(Math.max(currentPage, 1), totalPages);
  const start = totalItems === 0 ? 0 : (clampedCurrent - 1) * itemsPerPage + 1;
  const end = Math.min(clampedCurrent * itemsPerPage, totalItems);

  // Build select options for items per page
  const selectOptions = itemsPerPageOptions.map((opt) => ({
    value: opt,
    label: opt.toString(),
  }));

  // Get arrow color depending on disabled state and theme
  const getArrowColor = (disabled) =>
    disabled ? (isDarkMode ? "#5a5f68" : "#b0b8c1") : undefined;

  // Handlers with bounds safeguards
  const goPrev = () => {
    if (clampedCurrent > 1) onPageChange(clampedCurrent - 1);
  };
  const goNext = () => {
    if (clampedCurrent < totalPages) onPageChange(clampedCurrent + 1);
  };

  const selectId = `${id}-select-items-per-page`;

  return (
    <div className="pagination-container" id={id}>
      {/* Items-per-page selector with explicit label association */}
      <label className="pagination-select-label" htmlFor={selectId} id={`${id}-label-items-per-page`}>
        {labelItemsPerPage}
      </label>
      <div style={{ minWidth: 70 }}>
        <Select
          classNamePrefix="pagination-select"
          value={selectOptions.find((opt) => opt.value === itemsPerPage)}
          onChange={(selected) => onItemsPerPageChange(selected.value)}
          options={selectOptions}
          isSearchable={false}
          inputId={selectId}
          aria-labelledby={`${id}-label-items-per-page`}
        />
      </div>

      {/* Range summary with aria-live for SR updates */}
      <span id={`${id}-range`} aria-live="polite">
        {start}-{end} {labelOf} {totalItems}
      </span>

      {/* Optional page count "X / Y" */}
      {showPageCount && (
        <span className="pagination-pagecount" id={`${id}-pagecount`} aria-live="polite">
          {clampedCurrent} / {totalPages}
        </span>
      )}

      {/* Previous page button */}
      <button
        className="pagination-arrow-btn"
        aria-label={ariaLabelPrev}
        onClick={goPrev}
        disabled={clampedCurrent === 1 || totalItems === 0}
        id={`${id}-prev`}
        type="button"
      >
        <ArrowLeftSVG color={getArrowColor(clampedCurrent === 1 || totalItems === 0)} size={22} />
      </button>

      {/* Next page button */}
      <button
        className="pagination-arrow-btn"
        aria-label={ariaLabelNext}
        onClick={goNext}
        disabled={clampedCurrent === totalPages || totalItems === 0}
        id={`${id}-next`}
        type="button"
      >
        <ArrowRightSVG
          color={getArrowColor(clampedCurrent === totalPages || totalItems === 0)}
          size={22}
        />
      </button>
    </div>
  );
};

export default Pagination;
