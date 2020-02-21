import React from 'react';
import { NavBar, PATHNAME, ProjectSectionList, FlexBox } from '../presentational';


export const ProjectPage = () => (
	<div className="projectPage">
		<NavBar />
		<FlexBox className="projectPageContainer">
			<ProjectSectionList/>
		</FlexBox>
	</div>
);


export const PROJECT_PAGE_PATHNAME = PATHNAME.PROJECTS_PAGE;


