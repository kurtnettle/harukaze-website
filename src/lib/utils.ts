import type { GitHubUrls } from './types';

export function generateGitHubUrls(repoName: string): GitHubUrls {
	const authorName = 'kurtnettle';
	const githubBaseurl = 'https://github.com';

	const safeRepoName = encodeURIComponent(repoName);
	const baseUrl = `${githubBaseurl}/${authorName}/${safeRepoName}`;

	return {
		repoUrl: baseUrl,
		downloadUrl: `${baseUrl}/releases/latest`
	};
}
