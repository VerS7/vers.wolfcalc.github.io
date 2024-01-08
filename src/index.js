// TDC window
let periscope1x = document.getElementById("periscope-1.5x");
let periscope6x = document.getElementById("periscope-6x");

let boatLength = document.getElementById("length-meters");
let periscopeDivisions = document.getElementById("periscope-divisions");
let timerSeconds = document.getElementById("timer-seconds");

let tdcDist = document.getElementById("tdc-dist");
let tdcSpeed = document.getElementById("tdc-speed");

// Documentation window
let docBtn = document.getElementById("doc-reveal-btn");
let docWnd = document.getElementById("doc-window");
let doc = document.getElementById("doc");
let docSrc = null;
let docWndState = false;

const userLanguage = navigator.language;

if (userLanguage.startsWith("ru")) {
	docSrc = "src/docfiles/doc_ru.html";
} else docSrc = "src/docfiles/doc_en.html";

fetch(docSrc)
	.then((response) => response.text())
	.then((text) => (doc.innerHTML = text));

const docWndChange = () => {
	if (docWndState === false) {
		docWndReveal();
		docWndState = true;
	} else {
		docWndClose();
		docWndState = false;
	}
};

const docWndReveal = () => {
	docBtn.textContent = "Close documentation";
	docWnd.style.width = "55%";
	docWnd.style.height = "95%";
	doc.style.display = "flex";
};

const docWndClose = () => {
	docBtn.textContent = "Open documentation";
	docWnd.style.width = "auto";
	docWnd.style.height = "auto";
	doc.style.display = "none";
};

const tdcChange = () => {
	if (periscope1x.checked === true) {
		x = 100;
	} else {
		x = 400;
	}
	tdcDist.innerText = `Distance: ${Math.floor10(calculateTdcDist(boatLength.value, periscopeDivisions.value, x), -1)}m`;
	tdcSpeed.innerText = `Speed: ${Math.floor10(calculateTdcSpeed(boatLength.value, timerSeconds.value), -1)}Kt/s`;
};

periscope1x.addEventListener("change", () => {
	periscope6x.checked = false;
	tdcChange();
});

periscope6x.addEventListener("change", () => {
	periscope1x.checked = false;
	tdcChange();
});

boatLength.addEventListener("input", () => {
	tdcChange();
});

periscopeDivisions.addEventListener("input", () => {
	tdcChange();
});

timerSeconds.addEventListener("input", () => {
	tdcChange();
});
