var colours = ['red', 'blue', 'green', 'yellow'];
var faces = [0,1,2,3,4,5,6,7,8,9];
var specials = ['draw_2', 'reverse', 'skip', 'wild', 'wild_4'];

var allFaces = faces.concat(specials);

var tmpCounter = 0;

exports.next = function() {
	return { colour: 'red', face: tmpCounter++};
}
