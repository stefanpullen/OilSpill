<script>
	import { T } from '@threlte/core';
	import { Water } from './jsModules/Water2.js';
	import { CircleGeometry, Vector2 } from 'three';

	export let data;
	
	const waterGeometry = new CircleGeometry(data.Vol *1.1, 72);

	const water = new Water(waterGeometry, {
		color: '#373A36',
		scale: data.Vol,
		flowDirection: new Vector2(-1, -1),
		textureWidth: 1024,
		textureHeight: 1024
	});

	// export let i;
	// let gap = 2;
	// gap += gap * i;
</script>

<T.Mesh receiveShadow castShadow position.y={data.VolCumRel *1.1} transparent  opacity={data.opacity}>
	<T.CircleGeometry args={[data.Vol0, 72]} />	
	<T.MeshPhysicalMaterial reflectivity={1} metalness={0.9} color={'white'} roughness={0.2} />
</T.Mesh>
<!-- <T is={water} position.y={data.VolCumRel *1.1} position.z={0.1} /> -->
