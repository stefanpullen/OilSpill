<script>
	import { T } from '@threlte/core';
	import { Water } from './jsModules/Water2.js';
	import { PlaneGeometry, Vector2 } from 'three';
	import { Text } from '@threlte/extras';
	import { tweened } from 'svelte/motion';
	import * as ease from 'svelte/easing';
	import { Float } from '@threlte/extras';

	export let frontPos;

	const font1 = './Fonts/Lora-Medium.ttf';
	const font2 = './Fonts/Raleway-Regular.ttf';

	// const scale = tweened(0, { delay:2000, duration: 4000, easing: ease.backOut })
	// const scale2 = tweened(0, { delay:4000, duration: 4000, easing: ease.backOut })
	// const scale3 = tweened(0, { delay:6000, duration: 4000, easing: ease.backIn })
	// const scale4 = tweened(0, { delay:6000, duration: 4000, easing: ease.backIn })
	// scale.set(1)
	// scale2.set(1)
	// scale3.set(1)
	// scale4.set(1)

	const waterGeometry = new PlaneGeometry(5, 4);

	const water = new Water(waterGeometry, {
		color: '#373A36',
		scale: 5,
		flowDirection: new Vector2(1, 1),
		textureWidth: 1024,
		textureHeight: 1024
	});
</script>

<T.Mesh receiveShadow position.z={frontPos.z} position.y={frontPos.y * 1.1} rotation.x={0}>
	<T.PlaneGeometry args={[5, 4]} />
	<T.MeshPhysicalMaterial reflectivity={1} metalness={0.9} color={'white'} roughness={0.2} />
</T.Mesh>

<T is={water} position.z={frontPos.z + 0.1} position.y={frontPos.y * 1.1} rotation.x={0} />

<Float speed={1} floatIntensity={1} floatingRange={[0, 0.1]}>
	<Text
		text={'The five largest offshore'}
		position.z={frontPos.z + .3}
		position.x={-0.45}
		position.y={frontPos.y * 1.16}
		fontSize={0.067}
		color={'white'}
		font={font2}
		fillOpacity={1}
		maxWidth={1}
	/>
	<Text
		text={'Oil Spills'}
		position.z={frontPos.z + .301}
		position.x={0}
		position.y={frontPos.y * 1.15}
		fontSize={0.37}
		maxWidth={0.4}
		color={'white'}
		lineHeight={0.8}
		anchorX="center"
		font={font1}
		fillOpacity={1}
	/>
	<Text
		text={'A Data Story by Stefan Pullen'}
		position.z={ frontPos.z + .301}
		position.x={0}
		position.y={frontPos.y * 1.05}
		fontSize={0.06}
		color={'white'}
		anchorX="center"
		font={font2}
		fillOpacity={1}
		maxWidth={1}
	/>
</Float>
