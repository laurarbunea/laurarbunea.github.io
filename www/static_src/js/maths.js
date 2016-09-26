
var numberCheck = function(val) {
	if(isNaN(val) || val == '') {
		alert('Please, insert a correct value (integer number)');
		return;
	}
},

factorial = function(val) {
	val = Math.abs(parseInt(val));
	if(val == 0 || val == 1) {
		return 1;
	}
	return val * factorial(val-1);
},

simpleDisposition = function(elem, pos) {
	return factorial(elem)/factorial(elem-pos);
},

simpleCombination = function(elem, pos) {
	return factorial(elem)/(factorial(elem-pos)*factorial(elem));
},

permutation = function(elem, pos) {
	return factorial(elem)/factorial(pos);
},

ripDisposition = function(elem, pos) {
	return Math.pow(elem, pos);
},

ripCombination = function(elem, pos) {
	var n = elem - pos - 1;
	return simpleCombination(n, pos);
},

pyramid = function(elem) {
	for(var i=1; elem-i>=0; i++) {
		elem = elem-i;
	}
	if(i-1 == 0)
		elem = 0;
	// return [rows, remaining elements]
	return [i-1, elem];

},

pythagore = function(a,b,c) {
	var a2 = Math.pow(a, 2),
		b2 = Math.pow(b, 2),
		c2 = Math.pow(c, 2);

	if(a2+b2 == c2)
		return true;
	else
		return false;
},

mcm = function(a,b) {
	var mulA = a,
		mulB = b;

	while(mulA != mulB) {
		while (mulA < mulB)  
			mulA += a;
		while (mulB < mulA)  
			mulB += b;
	}

	return mulA;
},

MCD = function(a,b) {
	while (a != b) {			
		while (a < b)  
			b -= a;	
		while (b < a)  
			a -= b;	
	}
	return a;
},

fx1 = function(a,b) {
	return -b/a;
},

fx2 = function(a,b,c) {
	var det = Math.pow(b, 2) - 4*a*c;

	if(det < 0) {
		return null;
	};

	x1 = (-b - Math.sqrt(det, 2))/2;
	x2 = (-b + Math.sqrt(det, 2))/2;

	return [x1,x2];
},

sys1 = function(f1, f2) {
	var a1 = f1[0],
		a2 = f2[0],
		b1 = f1[1],
		b2 = f2[1];

	return fx1(a1-a2,b1-b2);
},

sys2 = function(f1, f2) {
	var a1 = f1[0],
		a2 = f2[0],
		b1 = f1[1],
		b2 = f2[1],
		c1 = f1[2],
		c2 = f2[2];

	return fx2(a1-a2,b1-b2,c1-c2);
},

pointInCircle = function (point, radius, center)
{
    var x = point[0] - center[0],
    	y = point[1] - center[1],
    	x2 = Math.sqrt(x, 2),
    	y2 = Math.sqrt(y, 2),
    	r2 = Math.sqrt(radius, 2);

    if((x2+y2) < r2)
    	return true;
    else
    	return false;
},

pointInRect = function (rect, dot)
{
    var x1 = rect[0][0],
    	x2 = rect[1][0],
    	x3 = rect[2][0],
    	x4 = rect[3][0],
    	y1 = rect[0][1],
    	y2 = rect[1][1],
    	y3 = rect[2][1],
    	y4 = rect[3][1],
    	dotx = dot[0],
    	doty = dot[1],
    	minx = Math.min(x1,x2,x3,x4),
    	miny = Math.min(y1,y2,y3,y4),
    	maxx = Math.max(x1,x2,x3,x4),
    	maxy = Math.max(y1,y2,y3,y4);

    if(dotx <= maxx && dotx >= minx)
    	if(doty <= maxy && doty >= miny)
    		return true;

    return false;
},

line2dots = function(dot1, dot2) {
	var m = (dot2[1]-dot1[1])/(dot2[0]-dot1[0]);

	return [m, (-m*dot1[0]+dot1[1])];
},

dotInLine = function(line,dot) {
	var lx = line[0],
		ly = line[1],
		dx = dot[0],
		dy = dot[1];

	if (dy == (lx*dx - ly))
		return true;

	return false;
},

dotOnCircle = function(circle,dot) {
	var a = circle[0],
		b = circle[1],
		c = circle[2],
		d = circle[3],
		e = circle[4],
		x = dot[0],
		y = dot[1]
		x2 = Math.pow(x, 2),
		y2 = Math.pow(y, 2),
		res = (a*x2)+(b*y2)+(c*x)+(d*y)+e;

	if (res == 0)
		return true;

	return false;
};

