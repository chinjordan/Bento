// ┬  ┬┌─┐┌┬┐┌─┐
// │  │└─┐ │ └─┐
// ┴─┘┴└─┘ ┴ └─┘
// Functions for printing both lists

const generateFirstListsContainer = (config) => {
	if (lists_1.children.length > 0) {
    return;
  }
	for (const list of config.firstlistsContainer) {
		let item = `
        <div class="card list list__${list.id}" id="list_${list.id}">
          <span class="iconify listIcon" data-icon="${list.icon}"></span>
          <a
          target="${config.openInNewTab ? '_blank' : ''}"
          href="${list.links[0].link}"
          class="listItem"
          >${list.links[0].name}</a>
          <a
          target="${config.openInNewTab ? '_blank' : ''}"
          href="${list.links[1].link}"
          class="listItem"
          >${list.links[1].name}</a>
          <a
          target="${config.openInNewTab ? '_blank' : ''}"
          href="${list.links[2].link}"
          class="listItem"
          >${list.links[2].name}</a>
          <a
          target="${config.openInNewTab ? '_blank' : ''}"
          href="${list.links[3].link}"
          class="listItem"
          >${list.links[3].name}</a>
        </div>
      `;
		const position = 'beforeend';
		lists_1.insertAdjacentHTML(position, item);
	}
};

const generateSecondListsContainer = (config) => {
	if (lists_2.children.length > 0) {
    return;
  }
	for (const list of config.secondListsContainer) {
		let item = `
        <div class="card list list__${list.id}" id="list_${list.id}">
        <i class="listIcon" icon-name="${list.icon}"></i>
        <a
        target="${config.openInNewTab ? '_blank' : ''}"
        href="${list.links[0].link}"
        class="listItem"
        >${list.links[0].name}</a>
        <a
        target="${config.openInNewTab ? '_blank' : ''}"
        href="${list.links[1].link}"
        class="listItem"
        >${list.links[1].name}</a>
        <a
        target="${config.openInNewTab ? '_blank' : ''}"
        href="${list.links[2].link}"
        class="listItem"
        >${list.links[2].name}</a>
        <a
        target="${config.openInNewTab ? '_blank' : ''}"
        href="${list.links[3].link}"
        class="listItem"
        >${list.links[3].name}</a>
        </div>
      `;
		const position = 'beforeend';
		lists_2.insertAdjacentHTML(position, item);
	}
};

const generateLists = (config) => {
	switch (config.bentoLayout) {
		case 'bento':
			generateFirstListsContainer(config);
			break;
		case 'lists':
			generateFirstListsContainer(config);
			generateSecondListsContainer(config);
			break;
		default:
			break;
	}
};

