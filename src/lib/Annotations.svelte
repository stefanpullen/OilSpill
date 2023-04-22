<script>
	import { Text, Float } from '@threlte/extras';
	export let data;

	const font1 = './Fonts/Lora-Medium.ttf';
	const font2 = './Fonts/Raleway-Regular.ttf';
</script>

<Float speed={1} floatIntensity={0} floatingRange={[-0.2, 0.2]}>
	<Text
		text={data.Barrels + " Million Barrels"}
		position.z={0.11}
		position.x={0}
		position.y={data.VolCumRel * 1.09}
		fontSize={data.Vol0 / 4}
		maxWidth={data.Vol0 *2}
		color={'white'}
		anchorX="center"
		font={font1}
		textAlign={'center'}
		fillOpacity={data.opacity}
		lineHeight={0.9}
	/>

</Float>
