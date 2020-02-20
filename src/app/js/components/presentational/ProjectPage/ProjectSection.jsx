import React, { useState } from 'react';
import { CollapsibleContainer, FlexBox } from '..';
import { Project } from '.';

const SectionBanner = ({name, onClick}) => (
    <div onClick={onClick}>
        <p>{name}</p>
    </div>
)


export const ProjectSection = ({
    name,
    projects
}) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const toggleIsCollapsed = () => setIsCollapsed(initialState => !initialState);

    return (
        <FlexBox column>
            <SectionBanner
                name={name}
                onClick={toggleIsCollapsed}
            />
            <CollapsibleContainer isCollapsed={isCollapsed}>
                {
                    projects.map(project => (
                        <Project name={project.name}/>
                    ))
                }
            </CollapsibleContainer>
        </FlexBox>
    );
}