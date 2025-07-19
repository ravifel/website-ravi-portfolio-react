import React from "react";
import '../styles/components/SortFilter.css';

function SortFilter({ value, onChange, options, label, ariaLabel, id }) {
    return (
        <div className="sort-filter-container" id={id}>
            <label className="sort-filter-label" id={`${id}-label`}>
                {label}
            </label>
            <select
                className="sort-filter-select"
                value={value}
                onChange={e => onChange(e.target.value)}
                aria-label={ariaLabel}
                id={`${id}-select`}
            >
                {options.map(opt => (
                    <option key={opt.value} value={opt.value} id={`${id}-option-${opt.value}`}>{opt.label}</option>
                ))}
            </select>
        </div>
    );
}
export default SortFilter;