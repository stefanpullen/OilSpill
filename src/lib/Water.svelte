<script>
	import { T } from '@threlte/core';
	import { Water } from './jsModules/Water2.js';
	import { CircleGeometry, PlaneGeometry, Vector2 } from 'three';

	// export let d;
	// export let i;
	// let gap = 2;
	// gap += gap * i;

	const waterGeometry = new PlaneGeometry(30, 30);

	const water = new Water(waterGeometry, {
		color: '#373A36',
		scale: 30,
		flowDirection: new Vector2(-3, -3),
		textureWidth: 1024,
		textureHeight: 1024
	});
</script>

<T is={water} position.y={5}  position.z={0.1}  />
