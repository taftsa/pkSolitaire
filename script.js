var reset = 0;

$(document).ready(function(){
	var el = document.documentElement,
	rfs = el.requestFullscreen
      || el.webkitRequestFullScreen
      || el.mozRequestFullScreen
      || el.msRequestFullscreen
      ;
     rfs.call(el);
});

$(document).on('click', '#hit', function(){
	var hp = $('#hp').html() - 10;
	if (hp == 0) {
		$('#output').html('You win!');
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
		$('#output').html('You lose.');
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
	
	$('#output').html(challenges[whichOne]);
	
	confirm();
});

$(document).on('click', '#coin', function(){
	if (Math.floor(Math.random() * 2) == 1) {
		$('#output').html('Tails');
	} else {
		$('#output').html('Heads');
	};
	confirm();
});

$(document).on('click', '#reset', function(){
	if (reset == 0) {
		reset = 1;
		$('#reset').css('background-color', 'black');
		$('#reset').css('color', 'white');
	} else {
		reset = 0;
		$('#reset').css('background-color', '');
		$('#reset').css('color', '');
	};
});

$(document).on('click', '.poke', function(){
	if (reset == 1) {
		$(this).html('0');
		reset = 0;
		$('#reset').css('background-color', '');
		$('#reset').css('color', '');
	} else {
		var newDmg = ($(this).html() / 1) + 10;
		$(this).html(newDmg);
	};
});

function confirm() {
	$('#output').css('background-color', '#282828');
	setTimeout(function(){
		$('#output').css('background-color', 'black');
	}, 100);
	setTimeout(function(){
		$('#output').css('background-color', '#282828');
	}, 200);
	setTimeout(function(){
		$('#output').css('background-color', 'black');
	}, 300);
};

var challenges = [
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