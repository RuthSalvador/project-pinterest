'use strict';

const Header = (update) => {
	const header = $('<header></header>');
	const nav = $('<div class="container"></div>')
	const title = $('<a href="#" class="title">Pinterest</a>');

	nav.append(title);
	header.append(nav);

	return header;
}