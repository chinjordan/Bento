// ┌┬┐┬┌┬┐┌─┐
//  │ ││││├┤
//  ┴ ┴┴ ┴└─┘
// Set time and Date


const setTime = (config) => {
	window.onload = displayClock();
	function displayClock() {
		const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

		var d = new Date();
		var mm = monthNames[d.getMonth()];
		var dd = d.getDate();
		var yyyy = d.getFullYear();
		var wd = weekday[d.getDay()];
		var min = (mins = ('0' + d.getMinutes()).slice(-2));
		var hh = d.getHours();
		var ampm = '';

		if (config.twelveHourFormat) {
			ampm = hh >= 12 ? ' pm' : ' am';
			hh = hh % 12;
			hh = hh ? hh : 12;
		}

		document.getElementById('hour').innerText = hh;
		document.getElementById('separator').innerHTML = ' : ';
		document.getElementById('minutes').innerText = min + ampm;

		document.getElementById('weekday').innerText = wd;
		document.getElementById('day').innerText = dd;
		document.getElementById('month').innerText = mm;
		document.getElementById('year').innerText = yyyy;

		setTimeout(displayClock, 1000);
	}
};