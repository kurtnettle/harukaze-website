<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '$lib/data/projects';

	let projectsSection: HTMLElement | null = null;

	async function scrollToProjects() {
		if (!projectsSection) return;

		const offset = projectsSection.getBoundingClientRect().top + window.scrollY;

		try {
			window.scrollTo({
				top: offset,
				behavior: 'smooth'
			});
		} catch (error) {
			console.error('Scroll failed:', error);
		}
	}
</script>

<svelte:head>
	<title>Project Harukaze</title>
</svelte:head>

<div
	class="hero relative h-screen w-full overflow-hidden bg-gradient-to-br from-[#000411] to-[#0b0a14]"
>
	<div
		class="animate-fade-in hero-content relative z-20 flex h-full flex-col items-center justify-center px-5 text-center"
	>
		<h1
			class="mb-6 font-['Inter'] text-5xl font-bold text-white md:text-6xl lg:text-7xl xl:text-8xl"
		>
			<span>PROJECT</span>
			<br />
			<span
				class="mt-4 inline-block bg-gradient-to-r from-[#00C9FF] via-[#0077FF] to-[#0033FF] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,119,255,0.5)]"
			>
				HARUKAZE
			</span>
			<br />
			<span class="inline-block text-xl font-medium text-gray-300/90 md:text-2xl lg:text-3xl">
				春 風 • Spring Breeze
			</span>
		</h1>

		<p
			class=" mx-auto mb-10 max-w-2xl font-['Inter'] text-base leading-relaxed tracking-wide text-gray-300/90 sm:text-lg md:text-xl"
		>
			An open-source initiative I commenced during my Spring 2025 semester, aimed at making the
			internal tools I used, to streamline various task, accessible to my university community.
		</p>

		<button
			class="group mt-8 rounded-lg bg-blue-600 px-6 py-3
            font-['Inter'] font-semibold text-white transition-all duration-300
            hover:scale-105 hover:shadow-[0_10px_30px_rgba(59,130,246,0.5)]
            focus:ring-2 focus:ring-[#3B82F6] focus:outline-none
            sm:px-8 sm:py-4"
			aria-label="View Project Details"
			onclick={() => scrollToProjects()}
		>
			<span class="relative">
				View Tools
				<span
					class="absolute -bottom-1 left-1/2 h-0.5 w-0 bg-white transition-all duration-500 ease-in-out group-hover:left-0 group-hover:w-full group-hover:delay-100"
				></span>
			</span>
		</button>
	</div>
</div>

<div
	bind:this={projectsSection}
	class="bg-gradient-to-bl from-[#0b0a14] to-[#000411] sm:h-fit xl:h-screen"
>
	<div class="mx-auto sm:container">
		<div class="px-5 py-16">
			<h2 class="mb-12 text-center text-4xl font-bold text-white">
				Zero Bug Projects
				<img
					class="hidden size-10 sm:inline"
					src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f643/512.gif"
					alt="🙃"
				/>
			</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
				{#each projects as project (project.id)}
					<ProjectCard data={project} />
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(1.25rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-in {
		animation: fadeIn 1.5s ease-out forwards;
		will-change: opacity, transform;
	}

	@media (prefers-reduced-motion: reduce) {
		.animate-fade-in {
			animation: none;
		}
	}
</style>
