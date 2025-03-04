<script lang="ts">
	import type { ProjectMeta } from '../types';
	import { generateGitHubUrls } from '$lib/utils';
	import { Download, ExternalLink, FolderCode, Github } from 'lucide-svelte';

	function formatEpoch(epoch: number) {
		try {
			const dt = new Date(epoch * 1000);
			let options = {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
				timeZone: 'UTC'
			} as const;

			return new Intl.DateTimeFormat('en-US', options).format(dt);
		} catch (err) {
			return '';
		}
	}

	let { data }: { data: ProjectMeta } = $props();

	const IconComponent = data.icon ?? FolderCode;

	const { repoUrl, downloadUrl } = generateGitHubUrls(data.repoName);
	const sortedTechStack = data.techStack?.slice().sort() || [];
	const releaseDate = formatEpoch(data.releasedOn);
</script>

<div
	class="group relative overflow-hidden rounded-xl border border-gray-700/50 transition-transform duration-500 before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(400px_at_50%_120%,rgba(59,130,246,0.15),transparent)] before:opacity-0 before:transition-opacity before:duration-500 hover:-translate-y-1 hover:border-gray-400/20 hover:before:opacity-100 active:scale-[0.98] active:border-gray-400/30 active:before:opacity-100"
>
	<div class="flex h-full flex-col p-6">
		<header
			class="group relative mb-4 flex items-center justify-between gap-4 rounded-2xl p-4 transition-colors duration-300"
		>
			<div class="relative flex-shrink-0">
				<div
					class="relative rounded-xl bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 p-3 shadow-inner transition-transform duration-300 group-hover:scale-[1.02] group-active:scale-[1.02]"
				>
					<IconComponent
						class="h-8 w-8 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-300 group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.3)] group-active:scale-90 group-active:text-blue-300 group-active:drop-shadow-[0_0_12px_rgba(59,130,246,0.3)]"
					/>
					<div
						class="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] opacity-0 transition-opacity group-hover:opacity-100"
					></div>
				</div>
			</div>

			<div class="min-w-0 flex-1">
				<h3 class="text-2xl font-bold text-white">
					{data.name}
				</h3>
				{#if releaseDate}
					<span class="mt-1 block text-sm font-medium text-zinc-400/80">
						Released on {releaseDate}
					</span>
				{/if}
			</div>
		</header>

		{#if sortedTechStack.length}
			<div class="mb-4 flex flex-wrap gap-2">
				{#each sortedTechStack as tech}
					<span
						class="inline-flex items-center rounded-full bg-gray-800 px-3 py-1 text-sm font-medium text-blue-400"
					>
						{tech}
					</span>
				{/each}
			</div>
		{/if}

		<p class="mb-6 line-clamp-3 font-['Inter'] leading-relaxed text-gray-300/90">
			{data.description}
		</p>

		<div class="mt-auto flex flex-col gap-3 lg:flex-row">
			{#if repoUrl}
				<a
					href={repoUrl}
					class="card-btn bg-gray-800/60 hover:bg-gray-700/60 active:bg-gray-700/60"
					target="_blank"
					rel="noopener noreferrer"
					title="View GitHub repository"
				>
					<Github class="h-5 w-5" />
					<span>Source Code</span>
				</a>
			{/if}

			{#if data.liveUrl}
				<a
					href={data.liveUrl}
					class="card-btn bg-blue-600/60 hover:bg-blue-500"
					target="_blank"
					rel="noopener noreferrer"
					title="View Live Instance"
				>
					<span>Live</span>
					<ExternalLink class="h-5 w-5" />
				</a>
			{/if}

			{#if downloadUrl && !data.liveUrl}
				<a
					href={downloadUrl}
					class="card-btn bg-blue-600/60 hover:bg-blue-500"
					target="_blank"
					rel="noopener noreferrer"
					title="Download"
				>
					<span>Download</span>
					<Download class="h-5 w-5" />
				</a>
			{/if}
		</div>
	</div>
</div>
