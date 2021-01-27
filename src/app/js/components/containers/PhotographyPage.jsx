import React from 'react';
import { NavBar, PATHNAME, FlexBox } from '../presentational';
import { LeftNav } from '../presentational/LeftNav.jsx';
import { photographyProjects } from '../manifests/photographyProjects';

const PhotographyProjects = () => (
	<LeftNav.Container>
		{Object.values(photographyProjects).map(({pathName, linkName}) => (
			<LeftNav.Option pathName={pathName} linkName={linkName}/>
		))}
	</LeftNav.Container>
)

export const PhotographyPage = () => (
	<div className="photographyPage">
		<NavBar />
		<FlexBox className="photographyPageContainer">
			<PhotographyProjects/>
		</FlexBox>
	</div>
);


export const PHOTOGRAPHY_PAGE_PATHNAME = PATHNAME.PROJECTS_PAGE;


