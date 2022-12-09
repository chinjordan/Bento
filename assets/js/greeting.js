// ┌─┐┬─┐┌─┐┌─┐┌┬┐┬┌┐┌┌─┐┌─┐
// │ ┬├┬┘├┤ ├┤  │ │││││ ┬└─┐
// └─┘┴└─└─┘└─┘ ┴ ┴┘└┘└─┘└─┘
// Function to set Greetings

const setGreeting = (config) => {
	const today = new Date();
	const hour = today.getHours();
	const name = config.name;

	const gree1 = `${config.greetingNight}\xa0`;
	const gree2 = `${config.greetingMorning}\xa0`;
	const gree3 = `${config.greetingAfternoon}\xa0`;
	const gree4 = `${config.greetingEvening}\xa0`;

if (hour >= 23 || hour < 6) {
	document.getElementById('greetings').innerText = gree1 + name;
} else if (hour >= 6 && hour < 12) {
	document.getElementById('greetings').innerText = gree2 + name;
} else if (hour >= 12 && hour < 17) {
	document.getElementById('greetings').innerText = gree3 + name;
} else {
	document.getElementById('greetings').innerText = gree4 + name;
}
