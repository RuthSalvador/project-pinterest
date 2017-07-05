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
console.log("hola miriam adios");