// const num = "10";
// if(num%2===0)
//    console.log("even");
// else
//    console.log("odd");
// let num = 5;
// console.log(num++);

const readLineSync = require('readline-sync');

const first = "apple";
const second = 'kiwi';
const third = 'kiwi';

const len1 = first.length;
const len2 = second.length;
const len3 = third.length;

if(len1<len2 && len1<len3)
    console.log(`${first} is smallest string`);
else if(len2<len3 && len2<len1)
    console.log(`${second} is smallest string`);
else if(len3<len1 && len3<len2)
    console.log(`${third} is the smallest string`);
else
    console.log(`Found 2 or more strings with equal size`);
