var clock;
function startTime(element) {
	let timeString = new Date().toLocaleTimeString('nb-No', { hour: 'numeric', hour12: false, minute: 'numeric', second: 'numeric' });
	element.innerHTML = timeString;
	clock = setTimeout(startTime.bind(null, element), 1000);
}
function stopTime() {
	clearTimeout(clock);
}


function log(obj) { console.log(obj); } 