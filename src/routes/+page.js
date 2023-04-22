import { csvParse, autoType, scaleBand, scaleLinear, extent } from 'd3';

export async function load({ fetch }) {
	const response = await fetch('/oilSpills.csv');
	const rawData = await response.text();
	const data = csvParse(rawData).map((d) => {
		const parsed = autoType(d);
		return {
			...parsed
		};
	});

	const rScale = scaleLinear()
		.domain(extent(data.map((d) => d.Barrels)))
		.range([0.85, 3.55]);

	data.forEach((obj, i) => {
		obj.Vol = rScale(obj.Barrels);
		obj.VolCumRel = rScale(obj.VolCum * 2);
		obj.Vol0 = 0;
		obj.opacity = -0.5;
		obj.barPac = 0;
		obj.volStat = obj.Vol;

	});

	return { data };
}
