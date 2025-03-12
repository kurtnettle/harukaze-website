import { Library, Smartphone, Terminal } from 'lucide-svelte';
import type { ProjectMeta } from '../types';

export const projects: ProjectMeta[] = [
	{
		id: 1,
		name: 'Faculty Scraper',
		icon: Terminal,
		description: 'A cross-platform CLI tool to scrape faculty information from the BUBT websites',
		releasedOn: 1739383200,
		techStack: ['Node.js', 'TypeScript', 'Cheerio', 'Inquirer', 'Commander.js'],
		repoName: 'bubt-faculty-scraper'
	},
	{
		id: 2,
		name: 'Harukaze Android',
		icon: Smartphone,
		description:
			'A simple android app to help accessing various other project websites without remembering long URLs.',
		releasedOn: 1740333600,
		techStack: ['Jetpack Compose', 'Kotlin', 'Ktor', 'Koin'],
		repoName: 'harukaze-android'
	},
	{
		id: 3,
		name: 'Facfyndr',
		icon: Library,
		description:
			'A community-driven faculty directory developed to help students easily find and connect with faculty members at BUBT',
		releasedOn: 1741730226,
		techStack: ['SvelteKit', 'TypeScript', 'TailwindCSS', 'Supabase', 'Drizzle-ORM', 'shadcn/ui'],
		repoName: 'facfyndr',
		liveUrl: 'https://facfyndr.pages.dev/'
	}
];
