// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
// ├┴┐│ │ │  │ │ ││││└─┐
// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘
// Function to print Button Cards.

const generateFirstButtonsContainer = (config) => {
	for (const button of config.firstButtonsContainer) {
		let item = `
        <a
          href="${button.link}"
          target="${config.openInNewTab ? '_blank' : ''}"
          class="card button button__${button.id}"
        >
		  <span class="iconify buttonIcon" data-icon="${button.icon}"></span>
		  <p>
			${button.name}
		  </p>
        </a>
    `;

		const position = 'beforeend';

		buttons_1.insertAdjacentHTML(position, item);
	}
};

const generateSecondButtonsContainer = (config) => {
	for (const button of config.secondButtonsContainer) {
		let link = button.link
		let extra = ""
		if (button.extra) {
			link = button.extra;
			extra = `data-fslightbox="gallery"`;
		}

		let item = `
			<a
				href="${link}"
				${extra}
				target="${config.openInNewTab ? '_blank' : ''}"
				class="card button button__${button.id}"
			>
			<span class="iconify buttonIcon" data-icon="${button.icon}"></span>
			<p>${button.name}</p>
			</a>
		`;

		const position = 'beforeend';

		buttons_2.insertAdjacentHTML(position, item);
	}
};

const generateButtons = (config) => {
	switch (config.bentoLayout) {
		case 'bento':
			generateFirstButtonsContainer(config);
			break;
		case 'buttons':
			generateFirstButtonsContainer(config);
			generateSecondButtonsContainer(config);
			break;
		default:
			break;
	}
};

