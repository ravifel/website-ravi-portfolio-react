import React from "react";
import '../styles/components/SortFilter.css';

function SortFilter({ value, onChange, options, label, ariaLabel }) {
    return (
        <div className="sort-filter-container">
            <label className="sort-filter-label">
                {label}
            </label>
            <select
                className="sort-filter-select"
                value={value}
                onChange={e => onChange(e.target.value)}
                aria-label={ariaLabel}
            >
                {options.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>
        </div>
    );
}
export default SortFilter;