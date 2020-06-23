console.log("ADURU" ,"VENKATA"," RAKESH"," KUMAR ",'21');
console.log('UpGrad', 2+1, 20 > 10);
var city = "Berlin";
console.log(city);
var firstName="rakesh";
console.log(firstName);
var x = true;
var y = false;
var a=10;
var b=110;
console.log(x && y);
console.log(a == b);
var output=3**3/3;
console.log(output);
console.log(2 ** 3 ** 2);
console.log(output);
var x = y = 10;
console.log(x, y);
console.log("C:\\Program Files\\nodejs");
var name="  " 
console.log(name.length);  //2 include spaces
console.log("\"upgrad\"\n is  a distance education platform");
console.log('ra'+'ki');
var x = 4 + "Hello";
console.log(x);
var x = 2 + 3 + "Hello";
console.log(x);
var x = parseInt("10.3");
console.log(x);

var x="10";
var b="12k";
var sub=x-b; 
console.log(isNaN(sub)); //true


var x="20a";
x=x.toString();
console.log(x);//20a

console.log(Number("10.20"));//10.2
console.log(Number("10a"));//NaN

console.log(parseInt("10"));//10

console.log(parseInt("10.00"));//10

console.log(parseInt("10.20"));//10

console.log(parseFloat("10.20"));//10.2

console.log(parseInt("10.00"));//10

console.log(parseInt("10a"));//10

console.log(parseInt("10a2"));//10

var marks;
console.log(marks);//undefined

console.log(null==undefined);//true

console.log(isNaN(1+null));//false

console.log(isNaN(1+undefined));//true

console.log(typeof 12); //number
console.log(typeof 'UpGrad');//string
console.log(typeof true);//boolean
console.log(typeof undefined);//undefined
console.log(typeof null);//object
console.log("0"===0);//false
console.log("0"==0);//true

console.log("00"===00);

console.log(typeof('5'), typeof(''));
console.log(6 * 7 + 3);

var x = 0;

if (x === 0) {
    console.log("Neither positive nor negative!");//this is output
} else if (x > 0) {
    console.log("Positive!");
} else {
    console.log("Negative!");
}

var x = 0;
var y = '0';
var z = '2 - 2';
if( x === y ) {
   console.log("Pizza");
} else if( x  ===  z ) {
   console.log(" Pizza's Over");
} else if( x == y ) {
   console.log('More Pizza’s Coming');   //this is output      
} else {
   console.log('Party’s Over; Go home');
}

var x = 10;
x % 2 === 0 ? console.log("Even") : console.log("Odd");

var x = 10;

if (x === 0) {
    console.log("Neither positive nor negative!");
} else if (x > 0) {
    if (x < 10) {
        console.log("Single-digit positive number!");
    } else {
        console.log("More than one-digit positive number!");//this is output
    }
} else {
    console.log("Negative number!");
}

var num1=12;
var num2=21;
var num3=82;
if (num1>num2){
if (num1>num2)
{ console.log("num1 is greatest");
}
}
else if (num2>num1){
if (num2>num3)
{ console.log("num2is greatest");
}}
else{
console.log("num3  is greatest");
}

var category = "women";

switch(category) {
   case "men":
       console.log("Showing men\'s apparels!");
       break;
   case "women":
       console.log("Showing women\'s apparels!");//this is output
       break;
   default:
       console.log("Showing all apparels!");
}






