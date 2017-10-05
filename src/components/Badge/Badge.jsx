import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import badgeTypes from './badgeType';

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
    type: PropTypes.oneOf(badgeTypes),
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