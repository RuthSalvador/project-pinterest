'use strict';

const Header = (update) => {
	const header = $('<header></header>');
	const nav = $('<div class="container"></div>');
	const title = $('<img src="assets/img/pinterest-logo.png" alt="">');


	nav.append(title);
	header.append(nav);

	return header;
};