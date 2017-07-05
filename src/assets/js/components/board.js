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
