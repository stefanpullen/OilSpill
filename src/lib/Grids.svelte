<script>
	import { Grid } from '@threlte/extras';
</script>

<Grid position.x={5} position.z={5} gridSize={[10, 10]} sectionColor={'#000000'} />
<Grid
	axes={'xyz'}
	position.x={5}
	position.z={0}
	position.y={5}
	gridSize={[10, 10]}
	sectionColor={'#000000'}
/>
<Grid
	axes={'zyx'}
	position.x={0}
	position.z={5}
	position.y={5}
	gridSize={[10, 10]}
	sectionColor={'#000000'}
/>
