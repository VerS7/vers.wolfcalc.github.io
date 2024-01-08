let gauge = new Gauge(document.getElementById("dial-gain")).setOptions(GAUGE_OPTIONS);

gauge.set(0);
gauge.maxValue = 10;
gauge.animationSpeed = 10;

const setGaugeDist = (distance) => {
	const _approx = (distance_) => {
		if (distance_ <= 7000) {
			return 500;
		}
		if (distance_ <= 15000) {
			return 1000;
		}
		if (distance_ <= 30000) {
			return 2000;
		}
		if (distance_ > 30000) {
			return 3000;
		}
	};

	slider_value = document.getElementById("dial-slider").value;
	dist = document.getElementById("dist");

	if (slider_value <= 18) {
		dist.textContent = "Distance: Very close < 800m";
	} else {
		dist.textContent = `Distance: ${distance}m ± ${_approx(distance)}m`;
	}
};

const gaugeChange = () => {
	var gain_value = document.getElementById("dial-slider").value * 0.1;
	document.getElementById("gain-value").textContent = `Gain: ${Math.floor10(gain_value, -1)}`;
	setGaugeDist(gainToDistance(gain_value));
	gauge.set(gain_value);
};
