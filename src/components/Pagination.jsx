import React from "react";
import Select from "react-select";

const ArrowLeftSVG = ({ color = "#222", size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <polyline points="15 6 9 12 15 18" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ArrowRightSVG = ({ color = "#222", size = 24 }) => (
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
    isDarkMode = false
}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const start = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
    const end = Math.min(currentPage * itemsPerPage, totalItems);

    const selectOptions = itemsPerPageOptions.map(opt => ({
        value: opt,
        label: opt.toString()
    }));

    const getButtonStyle = (disabled) => ({
        minWidth: 36,
        minHeight: 36,
        borderRadius: "50%",
        border: "none",
        background: disabled
            ? (isDarkMode ? "#23272f" : "#e0e0e0")
            : (isDarkMode ? "#23272f" : "#f4f4f4"),
        color: disabled
            ? (isDarkMode ? "#5a5f68" : "#b0b8c1")
            : (isDarkMode ? "#fff" : "#222"),
        fontSize: 20,
        cursor: disabled ? "not-allowed" : "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.18s, color 0.18s",
        margin: "0 2px",
        outline: "none",
        boxShadow: "none"
    });

    const getArrowColor = (disabled) =>
        disabled
            ? (isDarkMode ? "#5a5f68" : "#b0b8c1")
            : (isDarkMode ? "#fff" : "#222");

    return (
        <div
            className="d-flex align-items-center justify-content-end"
            style={{
                gap: 20,
                padding: "18px 0 10px 0",
                fontSize: 15,
                flexWrap: "wrap"
            }}
        >
            <span>{labelItemsPerPage}</span>
            <div style={{ minWidth: 70 }}>
                <Select
                    classNamePrefix="pagination-select"
                    value={selectOptions.find(opt => opt.value === itemsPerPage)}
                    onChange={selected => onItemsPerPageChange(selected.value)}
                    options={selectOptions}
                    isSearchable={false}
                    styles={{
                        control: (base) => ({
                            ...base,
                            background: isDarkMode ? "#23272f" : "#fff",
                            color: isDarkMode ? "#fff" : "#222",
                            border: "none",
                            minHeight: 30,
                            boxShadow: "none",
                            cursor: "pointer"
                        }),
                        menu: base => ({
                            ...base,
                            background: isDarkMode ? "#23272f" : "#fff",
                            color: isDarkMode ? "#fff" : "#222",
                        }),
                        option: (base, state) => ({
                            ...base,
                            background: state.isSelected
                                ? (isDarkMode ? "#444" : "#eee")
                                : (isDarkMode ? "#23272f" : "#fff"),
                            color: isDarkMode ? "#fff" : "#222",
                            cursor: "pointer"
                        }),
                        singleValue: base => ({
                            ...base,
                            color: isDarkMode ? "#fff" : "#222"
                        }),
                        dropdownIndicator: base => ({
                            ...base,
                            color: isDarkMode ? "#fff" : "#222"
                        }),
                        indicatorSeparator: base => ({
                            ...base,
                            background: "transparent"
                        })
                    }}
                />
            </div>
            <span>
                {start}-{end} {labelOf} {totalItems}
            </span>
            <button
                className="pagination-arrow-btn"
                aria-label={ariaLabelPrev}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                style={getButtonStyle(currentPage === 1)}
            >
                <ArrowLeftSVG color={getArrowColor(currentPage === 1)} size={22} />
            </button>
            <button
                className="pagination-arrow-btn"
                aria-label={ariaLabelNext}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages || totalItems === 0}
                style={getButtonStyle(currentPage === totalPages || totalItems === 0)}
            >
                <ArrowRightSVG color={getArrowColor(currentPage === totalPages || totalItems === 0)} size={22} />
            </button>
        </div>
    );
};

export default Pagination;