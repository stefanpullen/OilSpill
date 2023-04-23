<script>
	import { Canvas } from '@threlte/core';
	import Scene from '../lib/Scene.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		window.addEventListener('beforeunload', scrollToTop);
	});

	function scrollToTop() {
		window.scrollTo(0, 0);
	}

	export let data = {};
</script>

<div class="wrapper">
	<Canvas>
		<Scene data={data.data.reverse()} />
	</Canvas>
</div>
<div class="page">
	<section class="section0" />
	<section class="section1">
		<div class="content-1">
			<h2 id="title1">5. The ABT Summer Spill</h2>
			<p class="loc-dat">Angola coast - May 1991</p>
			<p class="cause">
				Explosion and sinking of a tanker, killing five of the 32 crew members. The spill occurred
				1.287 km shore, reducing the enviromental impact.
			</p>
		</div>
	</section>
	<section class="section2">
		<div class="content-2">
			<h2 id="title2">4. Atlantic Empress/Aegean Captain</h2>
			<p class="loc-dat">Caribbean Sea - July 1979</p>
			<p class="cause">
				Collision of two crude oil tankers. 26 sailors were killed It was the largest shipbased oil
				spill but no enviromental impact study was carried out.
			</p>
		</div>
	</section>
	<section class="section3">
		<div class="content-3">
			<h2 id="title3">3. Ixtoc I Spill</h2>
			<p class="loc-dat">Bay of Campeche - June 1979</p>
			<p class="cause">
				Oil eruption at an offshore drilling rig. The oil spill was only stopped after 295 days and
				caused catastrophic damage to marine and bird life. Plugged after 152 days.
			</p>
		</div>
		z
	</section>
	<section class="section4">
		<div class="content-4">
			<h2 id="title4">2.The Deepwater Horizon Spill</h2>
			<p class="loc-dat">LocaGulf of Mexico - April 2010</p>
			<p class="cause">
				Explosion on the Deepwater Horizon rig, killing 11 people and causing an unprecedented
				ecological disaster in the United States.
			</p>
		</div>
	</section>
	<section class="section5">
		<div class="content-5">
			<h2 id="title5">1. Gulf War Spill</h2>
			<p class="loc-dat">Persian Gulf - January 1991</p>
			<p class="cause">
				Iraqi forces deliberately released oil during the gulf war to hinder a possible water
				landing. Consequently damaging coastlines, marine species and ecosystems.
			</p>
			<div class="content" />
		</div>
	</section>
</div>

<style>
	.wrapper {
		width: calc(100vh * 9 / 16);
		height: 100vh;
		margin: 0.5vw auto;
		background-color: white;
		z-index: 1;
		position: fixed;
	}

	.page {
		position: relative;
		z-index: 2;
	}

	section {
		width: 100vw;
		height: 100vh;
		/* outline: 1px solid red; */
		/* text-align: center; */
	}

	.loc-dat {
		font-weight: bold;
		padding: 0 0 10px;
	}

	.content-1,
	.content-2,
	.content-3,
	.content-4,
	.content-5 {
		font-size: 0.9rem;
		position: fixed;
		bottom: -45px;
		left: 50%;
		width: 340px;
		transform: translate(-50%, -50%);
		opacity: 0;
	}

	p {
		text-align: justify;
	}

	@media screen and (min-width: 768px) {
		.wrapper {
			width: 100%;
			max-width: 1200px;
		}
		.content-1,
		.content-2,
		.content-3,
		.content-4,
		.content-5 {
			width: 400px;
		}
	}
</style>
