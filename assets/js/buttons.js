// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
// ├┴┐│ │ │  │ │ ││││└─┐
// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘
// Function to print Button Cards.

const generateFirstButtonsContainer = () => {
	for (const button of CONFIG.firstButtonsContainer) {
		let item = `
        <a
          href="${button.link}"
          target="${CONFIG.openInNewTab ? '_blank' : ''}"
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

const generateSecondButtonsContainer = () => {
	for (const button of CONFIG.secondButtonsContainer) {
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
				target="${CONFIG.openInNewTab ? '_blank' : ''}"
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

const generateButtons = () => {
	switch (CONFIG.bentoLayout) {
		case 'bento':
			generateFirstButtonsContainer();
			break;
		case 'buttons':
			generateFirstButtonsContainer();
			generateSecondButtonsContainer();
			break;
		default:
			break;
	}
};

//generateButtons();
