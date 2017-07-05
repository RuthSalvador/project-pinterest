'use strict';
const render = (root) => {

	root.empty();
	const wrapper = $('<div class="wrapper"></div>');

	const update = function() {
		render(root);
	};

	wrapper.append(Header(update));
	wrapper.append(Board(update));
	root.append(wrapper);

};

const state = {
	boardData: null,
	userData: null,
	board: null
};

$( _ => {

	const token = "Abt9DqiGVqIRi5YiudzVES8zdhUbFM4pbUqLpSZEItcfpsA05gAAAAA";
	const pinterest = "https://api.pinterest.com/v1";

	getJSON(pinterest+'/boards/arabelyuska/web-ui/?access_token='+token+'&fields=name%2Ccreator%2Cimage%2Ccounts', (err,json) => {

		if(err){ return alert(err.message);}
		state.board = json.data;

		getJSON(pinterest+'/users/arabelyuska/?access_token='+token+'&fields=first_name%2Cid%2Clast_name%2Curl%2Cimage', (err,user) => {
			if(err){ return alert(err.message);}
			state.userData = user.data;

			getJSON(pinterest+'/boards/arabelyuska/web-ui/pins/?access_token='+token+'&fields=id%2Clink%2Cnote%2Curl%2Coriginal_link%2Ccreated_at%2Ccreator%2Cimage%2Ccounts%2Ccolor%2Cboard%2Cmedia%2Cmetadata',(err,board) => {
				if(err){ return alert(err.message);}
				state.boardData = board.data;

				const root = $('.root');
				render(root)
			});
		});
	});

});

'use strict';

const Board = (update) => {

	const container = $('<div class="container"></div>');
	const subHeader = $('<div class="sub-header"></div>');

	const boardFixed = $('<div class="board-fixed"></div>');
	const file = $('<img src="assets/img/send.png" alt="send">');
	const buttom = $('<button> Seguir Tablero</button>');

  const boardHeader = $('<div class="board-header"></div>');
	let boardName = $('<h1>'+state.board.name+'</h1>');
	const pins 		= $('<p>'+state.board.counts.pins+' Pines</p>');
	const followers = $('<p>'+state.board.counts.followers+' Seguidores</p>');
	let userImage = $('<img class="border--circle" src="'+state.userData.image["60x60"].url+'" alt="userImage">');

	container.append(subHeader);
	subHeader.append(boardFixed);
	boardFixed.append(file);
	boardFixed.append(buttom);
	subHeader.append(boardHeader);
	boardHeader.append(boardName);
	boardHeader.append(pins);
	boardHeader.append(followers);
	boardHeader.append(userImage);

	const boardPins = $('<div class="board-pins flex flex__wrap"></div>');
	let boardCount = state.boardData.length;
	for(let i = 0; i < boardCount ; i++){

		const boardContainer = $('<div class="board-container block padding__block"></div>');
		const pin = $('<div class="pin"></div>');
		const img = $('<img class="block__pin" src="'+state.boardData[i].image.original.url+'" alt="pin">');
		const pinNote = $('<h3 class="pin-name">'+state.boardData[i].note+'</h3>');
		const userContainer = $('<div></div>');
		let userImage = $('<img class="border--circle" src="'+state.userData.image["60x60"].url+'" alt="userImage">');
		const userName = $('<p>'+state.boardData[i].creator.first_name+'</p>');
		let boardName = $('<p>'+state.board.name+'</p>');

		pin.append(img);
		pin.append(pinNote);
		userContainer.append(userImage);
		userContainer.append(userName);
		userContainer.append(boardName);
		boardContainer.append(pin);
		boardContainer.append(userContainer);
		boardPins.append(boardContainer);
		container.append(boardPins);
	}

	return container
};

'use strict';

const Header = (update) => {
	const header 		= $('<header class="header flex flex__center"></header>');
	const boxLogo		= $('<div class="header__boxLogo"></div>');
	const logo 			= $('<img src="assets/img/pinterest-logo.png" alt="logo pinterest" class="header__boxIcon--icons" >');
	const boxInput 	= $('<div class="header__boxInput"></div>');
	const boxInputSearch = $('<div class="header__boxInput--input"></div>');
	const input 		= $('<input type="text" placeholder="Buscar" >');
	const boxIcons = $('<div class="header__boxIcon flex flex__center"></div>');
	const search 		= $('<span class="fa fa-search"></span>');
	const perfil 		= $('<img src="assets/img/icon-profile.png" alt="logo pinterest" class="header__boxIcon--icons" >');
	const option 		= $('<span class="fa fa-bars header__boxIcon--icons"></span>');
	const message 	= $('<img src="assets/img/message.png" alt="logo pinterest" class="header__boxIcon--icons" >');


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

'use strict';

const getJSON = (url, cb) => {

  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {

    if (xhr.status !== 200) {
      return cb(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
    }

    cb(null, xhr.response);
  });

  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.send();
};