<script>
	import { T } from '@threlte/core';
	import { Float } from '@threlte/extras';

	export let d;
</script>

<Float
	speed={3}
	floatIntensity={3}
	rotationIntensity={0.02}
	rotationSpeed={3}
	floatingRange={[0.01, 0.01]}
>
	<T.Group  castShadow position.y={d.VolCumRel * 1.1} position.z={0.1} scale={0.05} rotation.x={0.3}>
		<T.Mesh position.y={2}>
			<T.CylinderGeometry args={[1.5, 1.5, 0.1, 64]} />
			<T.MeshStandardMaterial transparent opacity={d.barPac} metalness={1} roughness={0.4} color={'white'} />
		</T.Mesh>
		<T.Mesh position.y={-2}>
			<T.CylinderGeometry args={[1.5, 1.5, 0.1, 64]} />
			<T.MeshStandardMaterial transparent opacity={d.barPac} metalness={1} roughness={0.4} color={'white'} />
		</T.Mesh>
		<T.Mesh position.y={0.7}>
			<T.CylinderGeometry args={[1.5, 1.5, 0.1, 64]} />
			<T.MeshStandardMaterial  transparent opacity={d.barPac} metalness={1} roughness={0.4} color={'white'} />
		</T.Mesh>
		<T.Mesh position.y={-0.7}>
			<T.CylinderGeometry args={[1.5, 1.5, 0.1, 64]} />
			<T.MeshStandardMaterial transparent opacity={d.barPac} metalness={1} roughness={0.4} color={'white'} />
		</T.Mesh>
		<T.Mesh>
			<T.CylinderGeometry args={[1.4, 1.4, 4, 64]} />
			<T.MeshStandardMaterial transparent opacity={d.barPac} metalness={1} roughness={0.4} color={'white'} />
		</T.Mesh>
		<T.Mesh position.y={2.1} position.z={1}>
			<T.CylinderGeometry args={[0.3, 0.3, 0.2, 64]} />
			<T.MeshStandardMaterial metalness={1} roughness={0.4} color={'white'} />
		</T.Mesh>
	</T.Group>
</Float>
