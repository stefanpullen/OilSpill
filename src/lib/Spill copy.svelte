<script>
	import { T } from '@threlte/core';
	import { Water } from 'three/addons/objects/Water2.js';
	import {  CircleGeometry, Vector2,  } from 'three';

	export let d
	export let i

	const waterGeometry = new CircleGeometry(d.vol, 72);

	const water = new Water(waterGeometry, {
		color: '#373A36',
		scale: 5,
		flowDirection: new Vector2(-1, -1),
		textureWidth: 1024,
		textureHeight: 1024,
	});
</script>

<T.Mesh receiveShadow castShadow  rotation.x={-10 * (Math.PI / 180)}  >
	<T.CircleGeometry args={[5, 72]} />
	<T.MeshStandardMaterial color={'white'} />
</T.Mesh>

<T is={water} position.y={0.1} rotation.x={-10 * (Math.PI / 180)}/>
