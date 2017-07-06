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
	const divFix 		 = $('<div class="div-fix flex flex__between"></div>');
	const file 			 = $('<img src="assets/img/send.png" alt="send">');
	const buttom		 = $('<button class="btn btn__follow border--board"> Seguir Tablero</button>');

  const boardHeader = $('<div class="board-header"></div>');
	let boardName			= $('<h1 class="title">'+state.board.name+'</h1>');
	const pins 				= $('<p class="small"><b>'+state.board.counts.pins+'</b> Pines</p>');
	const followers 	= $('<p class="small"><b>'+state.board.counts.followers+'</b> Seguidores</p>');
	let userImage 		= $('<img class="border--circle push-right" src="'+state.userData.image["60x60"].url+'" alt="userImage">');

	container.append(boardFixed);
	container.append(subHeader);
	boardFixed.append(divFix);
	divFix.append(file);
	divFix.append(buttom);
	subHeader.append(boardHeader);
	boardHeader.append(boardName);
	boardHeader.append(pins);
	boardHeader.append(followers);
	boardHeader.append(userImage);

	const boardPins = $('<div class="board-pins flex flex__wrap"></div>');
	let boardCount 	= state.boardData.length;
	for(let i = 0; i < boardCount ; i++){

		const boardContainer = $('<div class="board-container block padding__block border--board"></div>');
		const boardHover 		 = $('<div class="hover-special"></div>');
		const pin 					 = $('<div class="pin"></div>');
		const img 					 = $('<img class="block__pin border--board" src="'+state.boardData[i].image.original.url+'" alt="pin">');
		const pinNote 			 = $('<h5 class="pin-name">'+state.boardData[i].note+'</h5>');
		const userContainer  = $('<div class="flex flex__center border--board"></div>');
		let userImage 			 = $('<img class="border--circle header__boxIcon--icons" src="'+state.userData.image["60x60"].url+'" alt="userImage">');
		const userDetails		 = $('<div></div>');
		const userName 			 = $('<p class="small--10"><b>'+state.boardData[i].creator.first_name+'</b></p>');
		let boardName				 = $('<p class="small--10">'+state.board.name+'</p>');

		pin.append(img);
		pin.append(pinNote);
		userContainer.append(userImage);
		userContainer.append(userDetails);
		userDetails.append(userName);
		userDetails.append(boardName);
    boardContainer.append(boardHover);
    boardContainer.append(pin);
		boardContainer.append(userContainer);
		boardPins.append(boardContainer);
		container.append(boardPins);
	}

	return container
};

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