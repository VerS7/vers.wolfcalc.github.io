var opts = {
  angle: -0.25, 
  lineWidth: 0.28, 
  radiusScale: 0.87, 
  pointer: {
    length: 0.6, 
    strokeWidth: 0.052, 
    color: '#000000' 
  },
  limitMax: false,     
  limitMin: false,     
  colorStart: '#DEDEDE',   
  colorStop: '#D4D4D4',    
  strokeColor: '#E0E0E0',  
  generateGradient: true,
  highDpiSupport: true,  
  renderTicks: {
    divisions: 10,
    divWidth: 1.5,
    divLength: 0.64,
    divColor: '#333333',
    subDivisions: 10,
    subLength: 0.35,
    subWidth: 0.7,
    subColor: '#666666'
  }
};

var target = document.getElementById('dial-gain'); 
var gauge = new Gauge(target).setOptions(opts); 
gauge.maxValue = 10; 
gauge.setMinValue(0);  
gauge.animationSpeed = 10; 
gauge.set(0); 

function evaluate(value) {
    if (document.getElementById("dial-slider").value <= 9) {
        document.getElementById("dist").textContent = "Very close < 850m";
    }
    else {
        document.getElementById("dist").textContent = `Distance: ${Math.floor((0.99*value-1.80)*5000)}m ± 500m`;
    }
}

function gauge_change() {
    var changer = document.getElementById("dial-slider").value * 0.20;
    var gain = document.getElementById("gain-value");
    gauge.set(changer);
    gain.textContent = `Gain: ${Math.floor10(changer, -1)}`;
    evaluate(changer);
}