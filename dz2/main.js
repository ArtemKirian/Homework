var str = 'abcd';
str = str.split("").reverse().join("");
console.log(str);

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
alert( factorial(6) );

  let input = 30, 
  output = [];
for(let i = 2; i != input; i++){
   if (input % i == 0)
    output.push(input / i);    
}
alert(output);

let string = '123456';
let numbers = string.split('');
let sum = 0;
numbers.forEach(number => {if(number % 2 === 0) sum += +number});
console.log(sum);

console.log(17 * Math.ceil(300 / 17));

function NOD (x, y) {
    if (y > x) return NOD(y, x);
    if (!y) return x;
    return NOD(y, x % y);
}
console.log(NOD(10, 25));

