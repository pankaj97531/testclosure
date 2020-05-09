/*********Hoisting and closure************/
console.log(x);
var x=10;

var a=10;
function outer(){
  var b = 20;
  var inner = function (){
    a++;
    b++;
    console.log(b);
    console.log(a);
  }
  return inner;
}
a = 30;
var outerFun = outer();
a = 40;
outerFun();
var outerFun2 = outer();
outerFun2();
/****************Excellent Example of hoisting*******************/
var a1=10;

function outer(){
  var b1=a1;
  console.log(b1);
  function inner(){
    var c1=b1;
    console.log(c1);
    var b1=20;
  }
  inner();
}
outer();
console.log(y1);
y1=20;


