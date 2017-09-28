import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Badge = (props) => {
    let badgeClass = classNames({
        [props.className]: props.className,
        'badge': true,
        [`badge-${props.type}`]: props.type,
        'badge-pill': props.pill
    });

    let Tag = props.href ? 'a' : 'span';

    return (
        <Tag
            className={badgeClass} 
            href={props.href}
            target={props.target}
            onClick={props.onClick}>
            {props.label}
        </Tag>
    );
};

Badge.propTypes = {
    href: PropTypes.string,
    label: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    className: PropTypes.string,
    type: PropTypes.oneOf([
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark'
    ]),
    pill: PropTypes.bool,
    target: PropTypes.oneOf([
        '_self',
        '_blank',
    ]),
    onClick: PropTypes.func
};

Badge.defaultProps = {
    type: 'primary',
    pill: false,
    target: '_self'
};

export default Badge;