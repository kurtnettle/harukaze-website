import type { Icon } from 'lucide-svelte';

export type ProjectMeta = {
	id: number;
	name: string;
	description: string;
	icon: typeof Icon;
	releasedOn: number;
	techStack: string[];
	repoName: string;
	liveUrl?: string;
};

export type GitHubUrls = {
	repoUrl: string;
	downloadUrl: string;
};
