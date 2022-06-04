// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'visitor!',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning,',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to sleep,',

	// Layout
	bentoLayout: 'buttons', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'InsertYourAPIKeyHere123456', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '19:30',
	hourDarkThemeInactive: '07:30',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'E-mail',
			icon: 'lucide:mail',
			link: 'mailto:jordanchin@duck.com',
		},
		{
			id: '2',
			name: 'Portfolio',
			icon: 'lucide:briefcase',
			link: 'http://portfolio.jordanchin.ca/',
		},
		{
			id: '3',
			name: 'LinkedIn',
			icon: 'lucide:linkedin',
			link: 'https://www.linkedin.com/in/jordan-chin/',
		},
		{
			id: '4',
			name: 'Pixelfed',
			icon: 'ri:pixelfed-line',
			link: 'https://pixelfed.social/jordan',
		},
		{
			id: '5',
			name: 'French Verb Trainer',
			icon: 'lucide:languages',
			link: 'https://verbesfrancais.apppage.net/',
		},
		{
			id: '6',
			name: 'Repeat in Shadows',
			icon: 'lucide:headphones',
			link: 'https://shadowing.apppage.net/',
		}
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Blog',
			icon: 'lucide:edit',
			link: 'https://blog.jordanchin.ca',
		},
		{
			id: '2',
			name: 'Pacific Crest Trail',
			icon: 'lucide:mountain-snow',
			link: 'https://www.postholer.com/journal/Pacific-Crest-Trail/2019/ilikemilk/2019-02-06/First-Entry/62964',
		},
		{
			id: '3',
			name: 'Great Divide Trail',
			icon: 'lucide:compass',
			link: 'https://www.postholer.com/user/ilikemilk/3394',
		},
		{
			id: '4',
			name: 'goodreads',
			icon: 'cib:goodreads',
			link: 'https://www.goodreads.com/user/show/44444651-jordan'
		},
		{
			id: '5',
			name: 'Discord',
			icon: 'ri:discord-line',
			link: 'https://discordapp.com/users/ukonvasara#9581',
		},
		{
			id: '6',
			name: 'Pokemon Go',
			icon: 'ic:twotone-catching-pokemon',
			link: '',
			extra: "img/pgo.png"
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'lucide:music',
			id: '1',
			links: [
				{
					name: 'Inspirational',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'Classic',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'Oldies',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'Rock',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
			],
		},
		{
			icon: 'lucide:coffee',
			id: '2',
			links: [
				{
					name: 'Linkedin',
					link: 'https://www.linkedin.com',
				},
				{
					name: 'Dribbble',
					link: 'https://www.dribbble.com',
				},
				{
					name: 'Trello',
					link: 'https://www.trello.com',
				},
				{
					name: 'Slack',
					link: 'https://www.slack.com',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'lucide:binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'lucide:github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
