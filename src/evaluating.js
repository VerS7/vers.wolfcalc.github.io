(function () {
	function decimalAdjust(type, value, exp) {
		if (typeof exp === "undefined" || +exp === 0) {
			return Math[type](value);
		}
		value = +value;
		exp = +exp;
		if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
			return NaN;
		}
		value = value.toString().split("e");
		value = Math[type](+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)));
		value = value.toString().split("e");
		return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));
	}

	if (!Math.round10) {
		Math.round10 = function (value, exp) {
			return decimalAdjust("round", value, exp);
		};
	}
	if (!Math.floor10) {
		Math.floor10 = function (value, exp) {
			return decimalAdjust("floor", value, exp);
		};
	}
	if (!Math.ceil10) {
		Math.ceil10 = function (value, exp) {
			return decimalAdjust("ceil", value, exp);
		};
	}
})();

const gainToDistance = (gain_value) => {
	return Math.floor((GAIN_K * gain_value - GAIN_START) * GAIN_DIST_DIGIT);
};

const calculateTdcDist = (boat_length, periscope_divisions, x) => {
	dist = (boat_length / periscope_divisions) * x;
	if (dist.isNaN || dist === Infinity || speed === undefined) {
		return 0;
	}
	return dist;
};

const calculateTdcSpeed = (boat_length, timer_seconds) => {
	speed = (boat_length / timer_seconds) * KTS;
	if (speed.isNaN || speed === Infinity || speed === undefined) {
		return 0;
	}
	return speed;
};
