import { Project } from './project.manifest';


export const photographyProjects: PhotographyProject[] = [];

export const photographyProjectType = "photographyProject";

export interface PhotographyProject extends Project {
	url: string;
}

const TOOLS: Record<string, string> = {
	MAMIYA6: "mamiya 6",
}

export class PhotographData {
	constructor(
		public name: string,
		public url: string,
		public date: Date,
		public medium: string = "photograph",
		public tool?: string,
	){}
}

export const photographs: PhotographData[] = [
	new PhotographData(
		"path of the sun",
		"https://elias-fong-photos.s3.amazonaws.com/2020/mamiya6/img20200719_21520474.jpg",
		new Date(2020,4),
		"photograph",
		TOOLS.MAMIYA6,
	)
];
