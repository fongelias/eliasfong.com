import { photographyProjectType } from './photography.manifest';


declare enum ProjectType {
	photographyProjectType
};

export interface Project {
	name: string;
	type: ProjectType;
}
