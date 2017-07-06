'use strict';

const Header = (update) => {
	const header 		= $('<header class="header flex flex__around"></header>');
	const boxLogo		= $('<div class="header__boxLogo"></div>');
	const logo 			= $('<img src="assets/img/pinterest-logo.png" alt="logo pinterest" class="header__boxIcon--icons" >');
	const boxInput 	= $('<div class="header__boxInput"></div>');
	const boxInputSearch = $('<div class="header__boxInput--input"></div>');
	const input 		= $('<input type="text" placeholder="Buscar">');
	const boxIcons  = $('<div class="header__boxIcon flex flex__around"></div>');
	const search 		= $('<span class="fa fa-search"></span>');
	const perfil 		= $('<img src="assets/img/icon-profile.png" alt="logo pinterest" class="header__boxIcon--icons">');
	const option 		= $('<span class="fa fa-bars header__boxIcon--icons"></span>');
	const message 	= $('<img src="assets/img/message.png" alt="logo pinterest" class="header__boxIcon--icons">');


	boxLogo.append(logo);
	boxInputSearch.append(input);
	boxInputSearch.append(search);
	boxInput.append(boxInputSearch);
	boxIcons.append(perfil);
	boxIcons.append(option);
	boxIcons.append(message);
	header.append(boxLogo);
	header.append(boxInput);
	header.append(boxIcons);
	return header;
};
