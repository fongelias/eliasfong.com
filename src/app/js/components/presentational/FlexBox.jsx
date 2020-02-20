import React from 'react';
import cx from 'classnames';

export const FlexBox = ({
    children,
    className = "",
    column
}) => (
    <div className={cx(`flexBox ${className}`, {
        'flexBox--direction-column': column
    })}>
        {children}
    </div>
)
