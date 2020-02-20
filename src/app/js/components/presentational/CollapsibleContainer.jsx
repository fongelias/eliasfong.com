import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { FlexBox } from '.';

export const CollapsibleContainer = ({
    isCollapsed,
    children
}) => {
    const [isRendered, setIsRendered] = useState(!isCollapsed);
    const [containerIsCollapsed, setContainerIsCollapsed] = useState(isCollapsed);
    
    useEffect(() => {
        if (isCollapsed) {
            // When collapsing, collapse before removing rendered elements
            setContainerIsCollapsed(isCollapsed);
            setTimeout(() => setIsRendered(!isCollapsed), 300);
        } else {
            // When expanding, render before expanding
            setIsRendered(!isCollapsed);
            setTimeout(() => setContainerIsCollapsed(isCollapsed));
        }
    }, [isCollapsed]);

    return (
        <div className={cx('collapsibleContainer', {
            'isCollapsed': containerIsCollapsed
        })}>
            <FlexBox column>
                { isRendered ? children : null }
            </FlexBox>
        </div>
    )
}