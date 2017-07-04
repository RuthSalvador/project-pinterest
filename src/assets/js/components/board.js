'use strict';

const Board = (update) => {

	const container = $('<div class="container"></div>');
	let boardName = $('<p>'+state.board.name+'</p>');
	const pins 		= $('<p>'+state.board.counts.pins+' Pines</p>');
	const followers = $('<p>'+state.board.counts.followers+' Seguidores</p>');
	let userImage = $('<img src="'+state.userData.image["60x60"].url+'" alt="userImage">');

	container.append(boardName);
	container.append(pins);
	container.append(followers);
	container.append(userImage);
	let boardCount = state.boardData.length;
	for(var i = 0; i < boardCount ; i++){

		const boardContainer = $('<div class="board-container"></div>');
		const pin = $('<div class="pin"></div>');
		const img = $('<img src="'+state.boardData[i].image.original.url+'" alt="pin">');
		const pinNote = $('<h3 class="pin-name">'+state.boardData[i].note+'</h3>');
		const userContainer = $('<div></div>');
		let userImage = $('<img src="'+state.userData.image["60x60"].url+'" alt="userImage">');
		const userName = $('<p>'+state.boardData[i].creator.first_name+'</p>')
		let boardName = $('<p>'+state.board.name+'</p>');	

		pin.append(img);
		pin.append(pinNote);
		userContainer.append(userImage);
		userContainer.append(userName);
		userContainer.append(boardName);
		boardContainer.append(pin);
		boardContainer.append(userContainer);
		container.append(boardContainer);
	};

	return container
}