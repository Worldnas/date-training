var now = new Date();
var now1 = now.getDate();
console.log(now1)
//2


var now2 = new Date();
var now3 = now2.getDay();
console.log(now3)
//3


var now4 = new Date();
var now5 = now4.getFullYear();
console.log(now5)
//4


var now6 = new Date();
var now7 = now6.getMilliseconds();
console.log(now7)
//5


var now8 = new Date();
var now9 = now8.getMinutes();
console.log(now9)
//6


var now10 = new Date();
var now11 = now10.getMonth();
console.log(now11)
//7


var now12 = new Date();
var now13 = now12.getSeconds();
console.log(now13)
//8


var now14 = new Date();
var now15 = now14.getTime();
console.log(now15)
//9


var now16 = new Date();
var now17 = now16.getTimezoneOffset();
console.log(now17)
//10


var time=now.getTime();
now.setFullYear(2031);
var time2=now.getTime();
var newtime=(time2-time)/1000/60/60/24;
var year=newtime/365;
console.log(Math.floor(year));
//11


now.setTime(1);
var day=now.getTime();
console.log(day);