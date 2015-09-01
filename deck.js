var colours = ['red', 'blue', 'green', 'yellow'];
var faces = [0,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];
var specials = ['draw_2','draw_2','reverse', 'reverse','skip', 'skip', 'wild', 'wild4'];

var allFaces = faces.concat(specials);

var deck = [];

debug = true;

function buildEntireDeck() {
	if (deck.length > 0) {
		return;
	}

	var f, len;
	var i = 0;
	for (len = allFaces.length, f=0; f<len; ++f) {
		var c, clen;
		for (clen = colours.length, c=0; c<clen; ++c) {
			var card = { colour: colours[c], face: allFaces[f] };
			deck[i++] = card;
		}
	}

	logToConsole();
	return deck;
}

function shuffle() {
	buildEntireDeck();
	var a = deck;
    var N = a.length;
    var i = 0;
    for (; i < N; i++) {
        // choose index uniformly in [i, N-1]
        var r = i + parseInt(Math.random() * (N - i), 10);
        var swap = a[r];
        a[r] = a[i];
        a[i] = swap;
    }

    logToConsole();
	return deck;
}

function logToConsole() {
	if (debug) {
		var i = 0;
		for (; i < deck.length; i++) {
			console.log("Card #" + (i+1) + ": " + JSON.stringify(deck[i]));
		}
	}
}

// ------------------------------ 
module.exports.buildEntireDeck = buildEntireDeck;
module.exports.shuffle = shuffle;
module.exports.debug = debug;
