function testClosure1(x){
	this.x = x
	var innerFunc = function(y){
		return this.x+y;
	}
	return innerFunc.bind(this);
}

var t1 = new testClosure1(10);
console.log(t1);
console.log(t1(11));
console.log(t1(12));
console.log(t1(13));
console.log(t1(14));

function testClosure2(x){
	this.x = x
	var dynamicval = this.x;
	var innerFunc = function(y){
		this.y = y;
		
		this.result = dynamicval + this.y;
		
	}
	return innerFunc.bind(this);
}

var t2 = new testClosure2(10);
//var bindt2 = t2.bind(this);
//console.log(bindt2);
console.log(new t2(11));

function testClosure3(){
	var x =10;
	function inner(){
		return x++;
	}
	return inner;
}

var t3 = testClosure3();
console.log(t3());
console.log(t3());
console.log(t3());
console.log(t3());
console.log(t3());