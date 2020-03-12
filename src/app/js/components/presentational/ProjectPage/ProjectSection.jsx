import React, { useState } from 'react';
import { CollapsibleContainer, FlexBox } from '..';
import { Project } from '.';
import cx from 'classnames';

const SectionBanner = ({
    name,
    onClick,
    isDisabled
}) => (
    <div onClick={onClick} className={cx('projectSectionBanner', {
        isDisabled
    })}>
        <p className="projectSectionBanner__name">{name}</p>
    </div>
)


export const ProjectSection = ({
    name,
    projects
}) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const toggleIsCollapsed = () => setIsCollapsed(initialState => !initialState);
    const noProjects = projects.length === 0;
    return (
        <FlexBox column className="maxWidth">
            <SectionBanner
                name={name}
                onClick={toggleIsCollapsed}
                isDisabled={noProjects}
            />
            {
                noProjects ? null : (
                    <CollapsibleContainer isCollapsed={isCollapsed}>
                        {
                            projects.map(project => (
                                <Project
                                    name={project.name}
                                    link={project.link}
                                />
                            ))
                        }
                    </CollapsibleContainer>
                )
            }
        </FlexBox>
    );
}