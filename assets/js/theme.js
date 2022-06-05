//  ┌┬┐┬ ┬┌─┐┌┬┐┌─┐
//  │ ├─┤├┤ │││├┤
//  ┴ ┴ ┴└─┘┴ ┴└─┘
// Set theme based on Configurations and Preferences

const setTheme = (config) => {
	let darkTheme = localStorage.getItem('darkTheme');
	const themeToggle = document.querySelector('#themeButton');
	const bodyBackground = document.getElementById('#body');

	const enableDark = () => {
		document.body.classList.add('darktheme');
		localStorage.setItem('darkTheme', 'enabled');
		themeToggle.innerHTML = `<span id="themeIcon" class="iconify themeButton__icon" data-icon="lucide:sun"></span>`;
	};

	const disableDark = () => {
		document.body.classList.remove('darktheme');
		localStorage.setItem('darkTheme', null);
		themeToggle.innerHTML = `<span id="themeIcon" class="iconify themeButton__icon" data-icon="lucide:moon"></span>`;
	};

	if (darkTheme === 'enabled') {
		document.body.classList.add('notransition');
		enableDark();
		document.body.classList.remove('notransition');
	} else {
		disableDark();
	}

	themeToggle.addEventListener('click', () => {
		darkTheme = localStorage.getItem('darkTheme');
		if (darkTheme !== 'enabled') {
			enableDark();
		} else {
			disableDark();
		}
	});

	if (config.imageBackground) {
		document.body.classList.add('withImageBackground');
	}

	if (config.changeThemeByOS && config.autoChangeTheme) {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			enableDark();
		} else {
			disableDark();
		}
	}

	if (config.changeThemeByHour && config.autoChangeTheme && !config.changeThemeByOS) {
		const date = new Date();
		const hours = date.getHours() < 10 ? '0' + date.getHours().toString() : date.getHours().toString();
		const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes().toString() : date.getMinutes().toString();
		const currentTime = hours + ':' + minutes;
		if (currentTime >= config.hourDarkThemeActive) {
			enableDark();
		} else if (currentTime >= config.hourDarkThemeInactive) {
			disableDark();
		}
	}
}