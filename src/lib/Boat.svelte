<script>
	import { T } from '@threlte/core';


	export let d;
	export let i;

	let gap = 2;

	gap += gap * i;
</script>


<T.Mesh
	castShadow
	position.y={d.VolCumRel * 1.1}
	position.z={0.1}
	scale={0.02}
	rotation.z={Math.PI / 2}
>
	<T.CapsuleGeometry args={[1, 4, 20]} />
	<T.MeshStandardMaterial color={'white'} />
</T.Mesh>
