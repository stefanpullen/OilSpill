import gsap from 'gsap';
import { writable } from "svelte/store";
export let data
export const dataStore = writable(data);

export function Animations1() {
    
    let tl = gsap.timeline();

	tl.to(data, {
		duration: 5,
		ease: 'Back.easeInOut',
		stagger: 0.5,
		Vol0: (i) => data[i].Vol,
		onUpdate: () => {
			data = data;
            console.log('hai')
		}
	});
}
