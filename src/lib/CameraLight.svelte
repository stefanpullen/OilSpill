<script>
	import { T } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';


	export let camPos;



</script>

<!-- CAMERA -->
<T.PerspectiveCamera
	makeDefault
	near={0.1}
	far={2000}
	position={[0, camPos.y + 2, camPos.z]}
	on:create={({ ref }) => {
		ref.lookAt(0, camPos.y * 1.1, 0);
	}}
>
	<OrbitControls enableDamping maxDistance={200} minDistance={0.1} target.y={camPos.y * 1.1} />
</T.PerspectiveCamera>

<!-- LIGHT -->
<T.AmbientLight intensity={0.2} />
<T.DirectionalLight castShadow position={[-10, 100, 1]} intensity={2}>
	<T.OrthographicCamera attach="shadow.camera" />
	<T.Vector2 attach="shadow.mapSize" args={[4196, 4196]} />
</T.DirectionalLight>

<!-- <T.AxesHelper args={[50]} />
<T.GridHelper args={[5, 5]} /> -->
