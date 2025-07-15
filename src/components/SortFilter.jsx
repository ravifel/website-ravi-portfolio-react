import React from "react";

function SortFilter({ value, onChange, options, label, ariaLabel }) {
    return (
        <div style={{ textAlign: "right", marginBottom: "1.5rem" }}>
            <label style={{ fontWeight: 500, marginRight: 8 }}>
                {label}
            </label>
            <select
                value={value}
                onChange={e => onChange(e.target.value)}
                style={{
                    padding: "0.3rem 0.7rem",
                    borderRadius: 5,
                    border: "1px solid #bbb",
                    fontSize: "1rem"
                }}
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