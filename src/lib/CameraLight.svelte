<script>
	import { T } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';
</script>

<!-- CAMERA -->
<T.PerspectiveCamera makeDefault position={[25, 15, 12]}>
	<OrbitControls enableDamping maxDistance={50} minDistance={0.1} target.y={2} />
</T.PerspectiveCamera>

<!-- LIGHT -->
<T.AmbientLight intensity={0.2} />

<T.DirectionalLight castShadow position={[3, 15, 10]} intensity={2}>
	<T.OrthographicCamera attach="shadow.camera" />
	<T.Vector2 attach="shadow.mapSize" args={[4196, 4196]} />
</T.DirectionalLight>
