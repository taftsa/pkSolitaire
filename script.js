var reset = 0;
var sw = 0;
var swOne;
var faint = 0;

$(document).on('click', '.start', function(){
	$(this).html('End Turn');
	$(this).removeClass('start');
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
	
	$('.active').html('');
	$('.active').removeClass('a b c po pa');
	
	prepSwitch();
	switchOne('.active');
	turn();
	$('#output').prepend('Select a new PK. ');
});

$(document).on('click', '#turn', function(){
	turn();
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

$(document).on('click', '#switch', function(){
	if (sw == 0) {
		prepSwitch();
	} else {
		sw = 0;
		$('#switch').css('background-color', '');
		$('#switch').css('color', '');
	};
});

$(document).on('click', '.pk', function(){
	if (reset == 1) {
		$(this).html('');
		reset = 0;
		$('#reset').css('background-color', '');
		$('#reset').css('color', '');
	} else if (sw == 1) {
		switchOne(this);
	} else if (sw == 2) {
		$('.thisun').html($(this).html());
		$(this).html(swOne);
		$('.thisun, #switch').css('background-color', '');
		$('.thisun, #switch').css('color', '');
		$('.thisun').removeClass('thisun');
		sw = 0;
		swOne = null;
	} else if ($(this).html() == '') {
		$(this).html('0');
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

function turn() {
	var whichOne = 0;
	
	while (Math.floor(Math.random() * 9) < 8) {
		whichOne += 1;
	};
	
	if (whichOne > 19) {
		whichOne = 21;
	};
	
	$('#output').html(challenges[whichOne]);
	
	confirm();
};

function prepSwitch() {
	sw = 1;
	$('#switch').css('background-color', 'black');
	$('#switch').css('color', 'white');
	$('.thisun').removeClass('thisun');
};

function switchOne(a) {
	sw = 2;
	swOne = $(a).html();
	$(a).css('background-color', 'grey');
	$(a).css('color', 'white');
	$(a).addClass('thisun');
};

var challenges = [
	'Switch your active PK with one of your benched PK.',
	'Remove one energy card from yor active PK.',
	'Your leftmost benched PK takes 30 damage.',
	'Your rightmost benched PK takes 30 damage.',
	'Select three of your benched PK. Each takes 20 damage.',
	'Take 90 damage.',
	'Take 80 damage.',
	'Take 70 damage.',
	'Take 60 damage.',
	'Take 50 damage.',
	'Take 40 damage.',
	'Take 30 damage.',
	'Take 20 damage.',
	'Take 10 damage.',
	'Take 100 damage.',
	'Discard 2 cards at random from your hand.',
	'You active PK is now asleep.',
	'You active PK is now confused.',
	'You active PK is now poisoned.',
	'You active PK is now paralyzed.',
	'You active PK is now burned.',
];