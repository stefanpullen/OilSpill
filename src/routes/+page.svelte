<script>
	import { Canvas } from '@threlte/core';
	import Scene from '../lib/Scene.svelte';
	export let data = {};
</script>

<div>
	<Canvas>
		<Scene data={data.data} />
	</Canvas>
</div>

<style>
	div {
		position: absolute;
		width: 100%;
		height: 100vh;
	}
</style>
