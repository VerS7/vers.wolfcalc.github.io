const GAIN_K = 0.99;
const GAIN_START = 1.8;
const GAIN_DIST_DIGIT = 5000;
const GAIN_VALUE_MULTIPLIER = 0.2;
const KTS = 1.94;
const GAUGE_OPTIONS = {
	angle: -0.25,
	lineWidth: 0.28,
	radiusScale: 0.87,
	pointer: {
		length: 0.6,
		strokeWidth: 0.052,
		color: "#1e1e1e",
	},
	limitMax: false,
	limitMin: false,
	colorStart: "#DEDEDE",
	colorStop: "#D4D4D4",
	strokeColor: "#E0E0E0",
	generateGradient: true,
	highDpiSupport: true,
	renderTicks: {
		divisions: 10,
		divWidth: 1.5,
		divLength: 0.64,
		divColor: "#333333",
		subDivisions: 10,
		subLength: 0.35,
		subWidth: 0.7,
		subColor: "#666666",
	},
};
