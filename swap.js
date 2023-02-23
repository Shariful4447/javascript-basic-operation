var a=5;
var b=7;
console.log("before swap", a, b);

var c=a;
a=b;
b=c;
console.log("after swap", a,b);



var p=5;
var q=7;
[p,q] = [q,p];
console.log("after swap", p, q );