import React from 'react';
import { FlexBox, ProjectSection, PROJECT_MANIFEST } from '..';

export const ProjectSectionList = () => (
    <FlexBox column className="maxWidth">
        {
            PROJECT_MANIFEST.map(section => (
                <ProjectSection
                    name={section.name}
                    projects={section.projects}
                />
            ))
        }
    </FlexBox>
)