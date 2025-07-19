import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/CustomButton.css';

const CustomButton = ({
    href,
    to,
    onClick,
    icon,
    text,
    isExternal = false,
    as = 'a',
    className = 'btn btn-outline-primary d-inline-flex align-items-center',
    id,
}) => {
    const commonProps =
        as === 'a'
            ? {
                href,
                target: isExternal ? '_blank' : undefined,
                rel: isExternal ? 'noopener noreferrer' : undefined,
            }
            : { onClick, to };

    return React.createElement(
        as,
        {
            className,
            ...commonProps,
            id,
        },
        <>
            {icon && <span className="me-2">{icon}</span>}
            {text}
        </>
    );
};

CustomButton.propTypes = {
    href: PropTypes.string,
    to: PropTypes.string,
    onClick: PropTypes.func,
    icon: PropTypes.node,
    text: PropTypes.string.isRequired,
    isExternal: PropTypes.bool,
    as: PropTypes.oneOf(['a', 'button', 'Link']),
    className: PropTypes.string,
    id: PropTypes.string,
};

export default CustomButton;