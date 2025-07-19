import React from "react";
import Select from "react-select";
import '../styles/components/Pagination.css';

const ArrowLeftSVG = ({ color = "currentColor", size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <polyline points="15 6 9 12 15 18" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ArrowRightSVG = ({ color = "currentColor", size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <polyline points="9 6 15 12 9 18" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
    id = "pagination"
}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const start = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
    const end = Math.min(currentPage * itemsPerPage, totalItems);

    const selectOptions = itemsPerPageOptions.map(opt => ({
        value: opt,
        label: opt.toString()
    }));

    const getArrowColor = (disabled) =>
        disabled
            ? (isDarkMode ? "#5a5f68" : "#b0b8c1")
            : undefined;

    return (
        <div className="pagination-container" id={id}>
            <span id={`${id}-label-items-per-page`}>{labelItemsPerPage}</span>
            <div style={{ minWidth: 70 }}>
                <Select
                    classNamePrefix="pagination-select"
                    value={selectOptions.find(opt => opt.value === itemsPerPage)}
                    onChange={selected => onItemsPerPageChange(selected.value)}
                    options={selectOptions}
                    isSearchable={false}
                    inputId={`${id}-select-items-per-page`}
                />
            </div>
            <span id={`${id}-range`}>
                {start}-{end} {labelOf} {totalItems}
            </span>
            <button
                className="pagination-arrow-btn"
                aria-label={ariaLabelPrev}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                id={`${id}-prev`}
            >
                <ArrowLeftSVG color={getArrowColor(currentPage === 1)} size={22} />
            </button>
            <button
                className="pagination-arrow-btn"
                aria-label={ariaLabelNext}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages || totalItems === 0}
                id={`${id}-next`}
            >
                <ArrowRightSVG color={getArrowColor(currentPage === totalPages || totalItems === 0)} size={22} />
            </button>
        </div>
    );
};

export default Pagination;