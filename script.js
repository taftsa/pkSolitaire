$(document).ready(function(){
	
});

$(document).on('click', '#hit', function(){
	var hp = $('#hp').html() - 10;
	if (hp == 0) {
		$('#challenge').html('You win!');
	};
	$('#hp').html(hp);
});

$(document).on('click', '#heal', function(){
	var hp = ($('#hp').html() / 1) + 10;
	$('#hp').html(hp);
});

$(document).on('click', '#faint', function(){
	var prizes = $('#prizes').html()  - 1;
	if (prizes == 0) {
		$('#challenge').html('You lose.');
	};
	$('#prizes').html(prizes);
});

$(document).on('click', '#turn', function(){
	var whichOne = 0;
	
	while (Math.floor(Math.random() * 9) < 8) {
		whichOne += 1;
	};
	
	if (whichOne > 19) {
		whichOne = 19;
	};
	
	$('#challenge').html(challenge[whichOne]);
});

var challenge = [
	"Take 40 damage.",
	"Take 30 damage.",
	"Take 20 damage.",
	"Take 10 damage.",
	"Take 40 damage.",
	"Take 30 damage.",
	"Take 20 damage.",
	"Take 10 damage.",
	"Switch your active Pokemon with one of your benched Pokemon.",
	"Remove one energy card from yor active Pokemon.",
	"Your leftmost benched Pokemon takes 30 damage.",
	"Your rightmost benched Pokemon takes 30 damage.",
	"Select three of your benched Pokemon. Each takes 20 damage.",
	"Take 40 damage.",
	"Take 30 damage.",
	"Take 20 damage.",
	"Take 10 damage.",
	"Take 100 damage.",
	"Discard 2 cards at random from your hand.",
	"You active Pokemon is now asleep."
];

//CHECK THE RANDOMNESS DISTRIBUTION