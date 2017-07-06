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
