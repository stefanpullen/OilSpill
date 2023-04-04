<script>
	import * as d3 from 'd3';
	import Annotations from './Annotations.svelte';
	import CameraLight from './CameraLight.svelte';
	import Grids from './Grids.svelte';
	import Sphere from './Sphere.svelte';
	export let data;

	const xScale = d3
		.scaleLinear()
		.domain(d3.extent(data.map((d) => d.sat_fat)))
		.range([0, 10]);

	const yScale = d3
		.scaleLinear()
		.domain(d3.extent(data.map((d) => d.sodium)))
		.range([0, 10]);

	const zScale = d3
		.scaleLinear()
		.domain(d3.extent(data.map((d) => d.sugar)))
		.range([0, 10]);

	const rScale = d3
		.scaleLinear()
		.domain(d3.extent(data.map((d) => d.calories)))
		.range([0.03, 0.5]);

	var colorScale = d3
		.scaleOrdinal()
		.domain(['Mcdonalds', 'Burger King'])
		.range(['#DA291C', '#0033A0']);
</script>

<CameraLight />
<Grids/>
<Annotations/>

{#each data as d, i}
	<Sphere
		y={yScale(d.sodium)}
		x={xScale(d.sat_fat)}
		z={zScale(d.sugar)}
		r={rScale(d.calories)}
		color={colorScale(d.restaurant)}
		name={d.item}
	/>
{/each}

