<script>
	import { T } from '@threlte/core';
	import { interactivity } from '@threlte/extras';
	import { spring } from 'svelte/motion';
	import { Text } from '@threlte/extras';

	export let x;
	export let z;
	export let y;
	export let r;
	export let color;
	export let name;

	interactivity();

	const scale = spring(1);
	const opac = spring(0);

	const onPointerEnter = () => {
		scale.set(1.5);
		opac.set(1);
	};
	const onPointerLeave = () => {
		scale.set(1);
		opac.set(0);
	};
</script>

<T.Mesh
	position.x={x}
	position.y={y}
	position.z={z}
	scale={r * $scale}
	on:pointerenter={onPointerEnter}
	on:pointerleave={onPointerLeave}
>
	<T.SphereGeometry />
	<T.MeshStandardMaterial {color} />
</T.Mesh>

<Text
	text={name}
	position.z={$opac}
	position.x={$opac}
	position.y={12}
	fontSize={1.5}
    color={'black'}
	rotation.y={Math.PI / 4}
	fillOpacity={$opac}
	anchorX="center"
/>
