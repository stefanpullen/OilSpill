<script>
	import { T } from '@threlte/core';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'; // import Annotations from './Annotations.svelte';
	import CameraLight from './CameraLight.svelte';
	import Spill from './Spill.svelte';
	import Boat from './Boat.svelte';
	import Water from './Water.svelte';
	import Annotations from './Annotations.svelte';
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import FrontPage from './FrontPage.svelte';
	import { Environment } from '@threlte/extras';
	import * as ease from 'svelte/easing';
	import Barrel from './Barrel.svelte';
	gsap.registerPlugin(ScrollTrigger);

	export let data;
	console.log(data)

	let data1 = data[0];
	let data2 = data[1];
	let data3 = data[2];
	let data4 = data[3];
	let data5 = data[4];

	let camPos = { y: data1.VolCumRel, z: 3.5, yl: data1.VolCumRel };
	let frontPos = { y: data1.VolCumRel, z: 1, opac: 1 };

	let isMounted = false;
	onMount(() => {
		gsap.set(data1, { Vol0: 0 });
		gsap.set(data2, { Vol0: 0 });
		gsap.set(data3, { Vol0: 0 });
		gsap.set(data4, { Vol0: 0 });
		gsap.set(data5, { Vol0: 0 });

		let section = 0;

		const tl1 = gsap.timeline({
			default: {
				duration: 1,
				ease: ease.cubicInOut
			},
			scrollTrigger: {
				trigger: '.page',
				start: 'top top',
				end: 'bottom bottom',
				scrub: 0.1
				// markers: true
				// pin:true
			}
		});

		// Step 0.0
		tl1.to(
			frontPos,
			{
				duration: 2,
				y: 18,
				opac: 0,
				onUpdate: () => {
					frontPos = frontPos;
				}
			},
			section
		);
		tl1.to(
			data,
			{
				barPac: 1,
				onUpdate: () => {
					data = data;
				}
			},
			section
		);
		section += 1;

		// Step 1.1
		section += 1;
		tl1.to(
			'.content-1',
			{
				opacity: 1
			},
			section
		);
		section += 1;

		tl1.to(
			data1,
			{
				opacity: 1,
				Vol0: data1.Vol,
				onUpdate: () => {
					data1 = data1;
				}
			},
			section
		);

		// Step 2.1
		section += 1;
		tl1.to(
			'.content-1',
			{
				opacity: 0
			},
			section
		);

		tl1.to(
			camPos,
			{
				duration: 1,
				y: data2.VolCumRel,
				z: data2.Vol * 4,
				onUpdate: () => {
					camPos = camPos;
				}
			},
			section
		);

		tl1.to(
			frontPos,
			{
				duration: 0,
				z: 22.5,

				onUpdate: () => {
					frontPos = frontPos;
				}
			},
			section
		);
		// Step 2.2
		// Step 1.1
		section += 1;
		tl1.to(
			'.content-2',
			{
				opacity: 1
			},
			section
		);
		section += 1;

		tl1.to(
			data2,
			{
				opacity: 1,

				Vol0: data2.Vol,
				onUpdate: () => {
					data2 = data2;
				}
			},
			section
		);

		// Step 2.1
		section += 1;
		tl1.to(
			'.content-2',
			{
				opacity: 0
			},
			section
		);
		tl1.to(
			camPos,
			{
				duration: 1,
				y: data3.VolCumRel,
				z: data3.Vol * 4,
				onUpdate: () => {
					camPos = camPos;
				}
			},
			section
		);
		// Step 3.2
		section += 1;
		// Step 1.1
		tl1.to(
			'.content-3',
			{
				opacity: 1
			},
			section
		);
		section += 1;

		tl1.to(
			data3,
			{
				opacity: 1,
				Vol0: data3.Vol,
				onUpdate: () => {
					data3 = data3;
				}
			},
			section
		);

		// Step 2.1
		section += 1;
		tl1.to(
			'.content-3',
			{
				opacity: 0
			},
			section
		);
		tl1.to(
			camPos,
			{
				duration: 1,
				y: data4.VolCumRel,
				z: data4.Vol * 4,
				onUpdate: () => {
					camPos = camPos;
				}
			},
			section
		);
		// Step 4.2
		section += 1;
		// Step 1.1
		tl1.to(
			'.content-4',
			{
				opacity: 1
			},
			section
		);
		section += 1;

		tl1.to(
			data4,
			{
				opacity: 1,

				Vol0: data4.Vol,
				onUpdate: () => {
					data4 = data4;
				}
			},
			section
		);

		// Step 2.1
		section += 1;
		tl1.to(
			'.content-4',
			{
				opacity: 0
			},
			section
		);
		tl1.to(
			camPos,
			{
				duration: 1,
				y: data5.VolCumRel,
				z: data5.Vol * 4,
				onUpdate: () => {
					camPos = camPos;
				}
			},
			section
		);
		// Step 5.2
		section += 1;
		// Step 1.1
		tl1.to(
			'.content-5',
			{
				opacity: 1
			},
			section
		);
		section += 1;

		tl1.to(
			data5,
			{
				opacity: 1,

				Vol0: data5.Vol,
				onUpdate: () => {
					data5 = data5;
				}
			},
			section
		);

		// Step 2.1
		section += 1;
		tl1.to(
			'.content-5',
			{
				opacity: 0
			},
			section
		);
		section += 1;

		tl1.to(
			camPos,
			{
				duration: 1,
				y: 6,
				z: 25,
				onUpdate: () => {
					camPos = camPos;
				}
			},
			section
		);
		section += 1;

		// Step 0.0
		tl1.to(
			frontPos,
			{
				duration: 2,
				y: 7,
				onUpdate: () => {
					frontPos = frontPos;
				}
			},
			section
		);
		section += 1;

		isMounted = true;
	});
</script>

<FrontPage {frontPos} />
<Environment path="/textures/" format="hdr" files="background2.hdr" />

{#if isMounted}
	<CameraLight {camPos} {data} />
	<Spill data={data1} />
	<Spill data={data2} />
	<Spill data={data3} />
	<Spill data={data4} />
	<Spill data={data5} />

	<Annotations data={data1} />
	<Annotations data={data2} />
	<Annotations data={data3} />
	<Annotations data={data4} />
	<Annotations data={data5} />
	{#each data as d}
		<Barrel {d} />
	{/each}
	<Water />
{/if}
