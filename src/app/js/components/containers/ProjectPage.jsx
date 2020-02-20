import React from 'react';
import { NavBar, PATHNAME, ProjectSectionList, FlexBox } from '../presentational';


export const ProjectPage = () => (
	<div className="projectPage">
		<NavBar />
		<FlexBox className="projectContainer">
			<div className="innerContainer">
				<ProjectSectionList/>
			</div>
		</FlexBox>
	</div>
);


export const PROJECT_PAGE_PATHNAME = PATHNAME.PROJECTS_PAGE;


