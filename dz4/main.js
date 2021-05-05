var randomInt = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
 
var generateRandArr = (n1, n2, len) =>{
    len = parseInt(len)||0; n1 = parseInt(n1)||0; n2 = parseInt(n2)||0;
    if(n1 == n2 && len > 0) return [n1];
    if(!len) return []
    let min = n1 < n2 ? n1 : n2; let max = n1 > n2 ? n1 : n2; let diff = max - min
    if(len > diff) return []
    let o = [];
    for(let i = 0; i < len;){
        let n = randomInt(min, max)
        if(!o.includes(n)){
            o[i] = n;
            i++
        }
    }
    return o;
}
console.log( generateRandArr(8, 8, 6) );
console.log( generateRandArr(8, 8, 0) );
console.log( generateRandArr(1, 8, 66) );
console.log( generateRandArr(1, 8, 6) );
console.log( generateRandArr("-4451", -33455, 6) );

var string = ' Эх сейчас бы, Эх: бы! Эх; сейчас, сделать сделать сделать дз ...       ';
 
function shazam(str)
{
str = str.replace(/[^а-яА-ЯёЁ ]/g, '');
str = str.replace(/  +/g, ' ').trim().toLowerCase();
 
var arr = str.split(' ');
 
var obj = {};
 
arr.forEach( function(item) { item in obj ? obj[item]++ : obj[item] = 1; } );
 
Object.getOwnPropertyNames(obj).forEach(
function(item) { console.log(item + ': ' + obj[item]); }
);
 
}
 
shazam(string);
